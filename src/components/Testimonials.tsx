import TestimonialCard from "./TestimonialCard";
import PropTypes from "prop-types";
import "./Testimonials.css";

const Testimonials = ({ className = "" }) => {
  return (
    <section className={`testimonials ${className}`}>
      <div className="testimonial-list">
        <div className="testimonial-card-parent">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
