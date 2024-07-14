import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <section className={`rectangle-parent ${className}`}>
      <div className="frame-child" />
      <div className="feature-one">
        <div className="title">
          <div className="feature-icon" />
          <div className="feature-content">
            <b className="feature-one1">Feature one</b>
          </div>
        </div>
        <div className="all-base-ui">
          All base UI elements are made using Nested Symbols and shared styles
          that are logically connected with one another.
        </div>
      </div>
      <div className="feature-one2">
        <div className="title1">
          <div className="title-child" />
          <div className="feature-one-wrapper">
            <b className="feature-one3">Feature two</b>
          </div>
        </div>
        <div className="all-base-ui1">
          All base UI elements are made using Nested Symbols and shared styles
          that are logically connected with one another.
        </div>
      </div>
      <div className="feature-one4">
        <div className="title2">
          <div className="title-item" />
          <div className="feature-one-container">
            <b className="feature-one5">Feature three</b>
          </div>
        </div>
        <div className="all-base-ui2">
          All base UI elements are made using Nested Symbols and shared styles
          that are logically connected with one another.
        </div>
      </div>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
