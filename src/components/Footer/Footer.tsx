import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TAEJF</h3>
            <p>JUAN FERNANDEZ T.A.E.</p>
            <p>Technical Architecture & Engineering</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Get in touch for consultations</p>
            <p>and project discussions</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <p>Architecture Design</p>
            <p>Engineering Solutions</p>
            <p>Technical Consulting</p>
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
