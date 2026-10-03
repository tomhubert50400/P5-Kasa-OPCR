import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { createServer } from "vite";

let server;
const components = {};

before(async () => {
  server = await createServer({
    root: fileURLToPath(new URL("../", import.meta.url)),
    optimizeDeps: { noDiscovery: true, include: [] },
    server: { middlewareMode: true, hmr: false, watch: null },
  });

  for (const path of [
    "components/Banner",
    "components/Carousel",
    "components/Collapse",
    "components/logements/Host",
    "components/logements/Rating",
    "components/logements/Tags",
    "pages/Home",
    "pages/About",
    "pages/NotFound",
  ]) {
    const { default: component } = await server.ssrLoadModule(`/src/${path}.jsx`);
    components[path.split("/").at(-1)] = component;
  }
});

after(async () => {
  await server?.close();
});

function render(name, props) {
  return renderToStaticMarkup(createElement(components[name], props));
}

function renderPage(name) {
  return renderToStaticMarkup(
    createElement(StaticRouter, { location: "/" }, createElement(components[name])),
  );
}

test("banner preserves its image, multiline text, and empty About title", () => {
  const html = render("Banner", {
    image: "/banner.png",
    texte: "chez vous,\n partout et ailleurs",
  });
  assert.match(html, /src="\/banner.png"/);
  assert.match(html, /chez vous,\n partout et ailleurs/);
  assert.match(render("Banner", { image: "/about.png", texte: "" }), /<h1[^>]*><\/h1>/);
});

test("carousel preserves empty, single-slide, and multiple-slide rendering", () => {
  assert.equal(render("Carousel", { slides: [] }), "");

  const single = render("Carousel", { slides: ["/first.jpg"] });
  assert.match(single, /1\/1/);
  assert.doesNotMatch(single, /left-arrow|right-arrow/);

  const multiple = render("Carousel", { slides: ["/first.jpg", "/second.jpg"] });
  assert.match(multiple, /left-arrow/);
  assert.match(multiple, /right-arrow/);
  assert.match(multiple, /1\/2/);
  assert.match(multiple, /src="\/first.jpg"/);
  assert.doesNotMatch(multiple, /src="\/second.jpg"/);
});

test("collapse accepts text and equipment-list content without changing its initial state", () => {
  const text = render("Collapse", {
    title: "Description",
    content: "Un appartement confortable",
    customClass: "logement",
  });
  assert.match(text, /collapse-item-logement/);
  assert.match(text, /collapse-container-content closed/);
  assert.match(text, /Un appartement confortable/);

  const list = render("Collapse", {
    title: "Equipements",
    content: createElement("ul", null, createElement("li", null, "WIFI")),
    customClass: "logement",
  });
  assert.match(list, /<ul><li>WIFI<\/li><\/ul>/);
});

test("host name lines, picture, and tag text remain unchanged", () => {
  const host = render("Host", {
    host: { name: "Nathalie Jean", picture: "/host.jpg" },
  });
  assert.match(host, /<span>Nathalie<br\/><\/span><span>Jean<\/span>/);
  assert.match(host, /src="\/host.jpg" alt="Nathalie Jean"/);
  assert.match(render("Tags", { tags: "Montmartre" }), /<span class="tags-content">Montmartre<\/span>/);
});

test("ratings accept the dataset's string scores and numeric scores identically", () => {
  const html = render("Rating", { score: "3" });
  assert.equal(html, render("Rating", { score: 3 }));
  assert.equal((html.match(/class="rating-star"/g) || []).length, 5);
  assert.equal((html.match(/empty-star\.svg/g) || []).length, 2);
});

test("Home and About still render using the automatic JSX runtime", () => {
  assert.match(renderPage("Home"), /chez vous,\n partout et ailleurs/);
  const about = renderPage("About");
  assert.equal((about.match(/collapse-item-about/g) || []).length, 4);
  assert.doesNotMatch(about, /<footer/);
});

test("the 404 page keeps its apostrophes and home link", () => {
  const html = renderPage("NotFound");
  assert.match(html, /Oups! La page que vous demandez n&#x27;existe pas\./);
  assert.match(html, /Retourner sur la page d&#x27;accueil/);
  assert.match(html, /href="\/"/);
});

test("all bundled lodging and About records satisfy the prop contracts", async (t) => {
  const errors = t.mock.method(console, "error", () => {});
  const logements = JSON.parse(await readFile(new URL("../src/assets/datas/logements.json", import.meta.url), "utf8"));
  const about = JSON.parse(await readFile(new URL("../src/assets/datas/collapseData.json", import.meta.url), "utf8"));

  for (const logement of logements) {
    render("Carousel", { slides: logement.pictures });
    render("Host", { host: logement.host });
    render("Rating", { score: logement.rating });
    for (const tag of logement.tags) render("Tags", { tags: tag });
    render("Collapse", { title: "Description", content: logement.description, customClass: "logement" });
    render("Collapse", {
      title: "Equipements",
      content: createElement("ul", null, logement.equipments.map((item, i) => createElement("li", { key: i }, item))),
      customClass: "logement",
    });
  }
  for (const item of about) {
    render("Collapse", { title: item.title, content: item.content, customClass: "about" });
  }
  assert.deepEqual(errors.mock.calls.map(({ arguments: args }) => args), []);
});
