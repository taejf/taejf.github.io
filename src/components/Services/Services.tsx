import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "We design and build tailored software solutions that align with your business objectives.",
    },
    {
      title: "Automated Testing Solutions",
      description:
        "We implement robust automated testing strategies to ensure quality, reliability, and efficiency in your software.",
    },
    {
      title: "Consulting and Training",
      description:
        "We provide expert consulting and hands-on training in software development and test automation best practices.",
    },
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
