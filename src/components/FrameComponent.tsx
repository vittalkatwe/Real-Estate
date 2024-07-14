import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={`rectangle-group ${className}`}>
      <div className="frame-item" />
      <div className="medium-length-displa-parent">
        <div className="medium-length-displa3">brand</div>
        <div className="medium-length-displa4">tm</div>
      </div>
      <div className="footer-links">
        <b className="first-column">First column</b>
        <div className="page-links">
          <div className="first-page">First page</div>
          <div className="second-page">Second page</div>
          <div className="third">Third</div>
          <div className="fourth">Fourth</div>
        </div>
      </div>
      <div className="footer-columns">
        <b className="second">Second</b>
        <div className="footer-pages">
          <div className="first-page1">Fifth page</div>
          <div className="second-page1">Sixth page</div>
          <div className="third1">Eighth</div>
        </div>
      </div>
      <div className="footer-columns1">
        <b className="third2">Third</b>
        <div className="first-page-parent">
          <div className="first-page2">Fifth page</div>
          <div className="second-page2">Sixth page</div>
          <div className="third3">Eighth</div>
        </div>
      </div>
      <div className="subscribe">
        <b className="subscribe1">Subscribe</b>
        <div className="subscription-form">
          <div className="input">
            <div className="placeholder">Enter email</div>
            <img className="icon2" alt="" src="/icon-6.svg" />
          </div>
          <div className="join-our-newsletter">
            Join our newsletter to stay up to date on features and releases
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
