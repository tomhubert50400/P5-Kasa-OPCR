import "../styles/index.sass";
import logoFooter from "../assets/images/logo-footer.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logoFooter} alt="Logo Kasa" />
      <p className="footer-text">
        © 2020 Kasa. All <br />
        rights reserved
      </p>
    </div>
  );
};

export default Footer;
