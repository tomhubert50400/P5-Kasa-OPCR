import "../styles/index.sass";

import Banner from "../components/Banner";
import aboutBanner from "../assets/images/about-banner.png";
import Collapse from "../components/Collapse";
import CollapseData from "../assets/datas/collapseData.json";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about">
      <Banner image={aboutBanner} texte="" />
      <div className="collapse">
        <div className="collapse-dropdown">
          {CollapseData.map((collapse) => {
            return (
              <div key={collapse.id}>
                <Collapse content={collapse.content} title={collapse.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
