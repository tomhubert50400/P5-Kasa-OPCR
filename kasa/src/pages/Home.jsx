import React from "react";

import Banner from "../components/Banner";
import homeBanner from "../assets/images/home-banner.png";

const Home = () => {
  return (
    <div>
      <Banner image={homeBanner} texte={"chez vous,\n partout et ailleurs"} />
    </div>
  );
};

export default Home;
