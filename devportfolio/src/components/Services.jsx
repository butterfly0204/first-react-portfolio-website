import { services } from "../data/portfolioData";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section id="services">
      <h2>Services</h2>

      <div className="grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;