import { testimonials } from "../data/portfolioData";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section>
      <h2>Testimonials</h2>

      <div className="grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;