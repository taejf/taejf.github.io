import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Technical Architecture",
      description: "Designing robust and scalable system architectures tailored to your needs."
    },
    {
      title: "Engineering Solutions",
      description: "Implementing cutting-edge engineering practices for optimal performance."
    },
    {
      title: "Consulting",
      description: "Expert guidance and strategic planning for your technical projects."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
