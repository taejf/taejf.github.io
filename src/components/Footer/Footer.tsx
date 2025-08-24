import logo from '../../assets/logo-white.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <a href="/"><img className="logo-image" src={logo} alt="JUAN FERNANDEZ T.A.E."/></a>
            <span>Customized software solutions</span>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Custom Software Development</li>
              <li>Automated Testing Solutions</li>
              <li>Consulting and Training</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 JUAN FERNANDEZ T.A.E. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
