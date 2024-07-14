import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`nav-wrapper ${className}`}>
      <header className="nav">
        <div className="logo-black-wrapper">
          <div className="logo-black">
            <a className="medium-length-displa">brand</a>
            <div className="medium-length-displa1">tm</div>
          </div>
        </div>
        <nav className="nav-inner">
          <nav className="menu-one-parent">
            <a className="menu-one">Link 1</a>
            <a className="menu-two">Link 2</a>
            <a className="menu-three">Link 3</a>
            <a className="menu-four">Link 4</a>
            <a className="menu-four1">Link 5</a>
          </nav>
        </nav>
        <button className="cta-button-black">
          <a className="action1">Action</a>
        </button>
      </header>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
