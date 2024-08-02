import "../styles/index.sass";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="header-logo-img" src={logo} alt="Logo kasa" />
      </div>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li className="header-nav-li">
            <Link className="header-nav-link" to="/">
              Accueil
            </Link>
          </li>
          <li className="header-nav-li">
            <Link className="header-nav-link" to="/about">
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
