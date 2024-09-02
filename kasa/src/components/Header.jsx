import "../styles/index.sass";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="header-logo-img" src={logo} alt="Logo kasa" />
      </div>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li className="header-nav-li">
            <NavLink
              exact
              className="header-nav-link"
              activeClassName="active"
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li className="header-nav-li">
            <NavLink
              className="header-nav-link"
              activeClassName="active"
              to="/about"
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
