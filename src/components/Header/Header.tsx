import logo from "/src/assets/logo-white.svg";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="/"><img className="logo-image" src={logo} alt="JUAN FERNANDEZ T.A.E."/></a>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
