import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          JUAN FERNANDEZ T.A.E.
        </h1>
        <p className="hero-subtitle">
          Technical Architecture & Engineering Solutions
        </p>
        <p className="hero-description">
          Delivering innovative technical solutions with precision, 
          reliability, and excellence in every project.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
