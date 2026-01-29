import logo from '../../assets/logo-white.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content simplified">
          <a href="/"><img className="logo-image" src={logo} alt="JUAN FERNANDEZ T.A.E."/></a>
          <span>Customized software solutions</span>
          <a
            href="https://www.linkedin.com/in/juan-fernandez-tae/"
            className="linkedin-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
            </svg>
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JUAN FERNANDEZ T.A.E. S.A.S, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
