import "../styles/index.sass";

import Banner from "../components/Banner";
import aboutBanner from "../assets/images/about-banner.png";

const About = () => {
  return (
    <div className="about">
      <Banner image={aboutBanner} texte="" />
    </div>
  );
};

export default About;
