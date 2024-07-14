import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`hero-content-wrapper ${className}`}>
      <div className="hero-content">
        <div className="text">
          <div className="headline1">
            <h1 className="medium-length-displa2">
              Medium length display headline
            </h1>
            <div className="separated-they-live">{`Separated they live in Bookmarks right at the coast of the famous Semantics, large language `}</div>
          </div>
          <div className="button">
            <button className="cta-button-black1">
              <b className="action2">Action</b>
            </button>
            <div className="separated-they-live1">
              5,000 people like you have purchased this product!
            </div>
          </div>
        </div>
        <img className="img-icon" loading="lazy" alt="" src="/img@2x.png" />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
