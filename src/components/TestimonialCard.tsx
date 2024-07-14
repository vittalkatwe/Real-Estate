import PropTypes from "prop-types";
import "./TestimonialCard.css";

const TestimonialCard = ({ className = "" }) => {
  return (
    <div className={`testimonial-card ${className}`}>
      <blockquote className="subtitle-text">
        “A testimonial describing what the person thinks about this service,
        product or startup in general.”
      </blockquote>
      <div className="footer">
        <div className="customer">
          <img
            className="image-icon"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <div className="name">
            <b className="label">Name Surname</b>
            <div className="author-position">Description</div>
          </div>
        </div>
        <div className="icons">
          <img className="icon" loading="lazy" alt="" src="/icon.svg" />
          <img className="icon1" loading="lazy" alt="" src="/icon-1.svg" />
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  className: PropTypes.string,
};

export default TestimonialCard;
