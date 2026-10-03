import PropTypes from "prop-types";

const Banner = ({ image, texte }) => {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-img" />
      <h1 className="banner-text">{texte}</h1>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};

export default Banner;
