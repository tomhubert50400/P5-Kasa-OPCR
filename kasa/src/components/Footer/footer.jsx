import logoFooter from '../../assets/logo-footer.svg';
import './style.sass';

function Footer () {
  return (
    <footer className='footer'>
        <img src={logoFooter} alt="Kasa" />
        <p class="footer-text">© 2024 Kasa. All <span class="mobile-break">rights reserved</span></p>
    </footer>
  );
}

export default Footer;