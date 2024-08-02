import React from "react";

import Banner from "../components/Banner";
import homeBanner from "../assets/images/home-banner.png";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div>
      <Banner image={homeBanner} texte={"chez vous,\n partout et ailleurs"} />
      <Cards />
    </div>
  );
};

export default Home;
