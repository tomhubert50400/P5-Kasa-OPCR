import { Link } from 'react-router-dom';
import './style.sass';
import logoMobile from '../../assets/logo-mobile.svg';
import logoDesktop from '../../assets/logo-desktop.svg';

function Header() {
  return (
    <header className="header">
      <img src={logoMobile} alt="Kasa" className='logo-mobile'/>
      <img src={logoDesktop} alt="Kasa" className='logo-desktop'/>
      <nav>
        <ul>
          <li>
            <Link to="/" >Accueil</Link>
          </li>
          <li>
            <Link to="/about" >A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
