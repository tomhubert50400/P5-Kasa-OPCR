import React from "react";

const Banner = ({ image, texte }) => {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-img" />
      <h1 className="banner-text">{texte}</h1>
    </div>
  );
};

export default Banner;
