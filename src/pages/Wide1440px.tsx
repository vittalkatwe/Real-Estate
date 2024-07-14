import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent from "../components/GroupComponent";
import MessageContainer from "../components/MessageContainer";
import Testimonials from "../components/Testimonials";
import FrameComponent from "../components/FrameComponent";
import "./Wide1440px.css";

const Wide1440px = () => {
  return (
    <div className="wide-1440px">
      <FrameComponent2 />
      <FrameComponent1 />
      <GroupComponent />
      <MessageContainer />
      <Testimonials />
      <section className="cta">
        <div className="content">
          <div className="headline">
            <div className="tagline">Tagline</div>
            <h1 className="long-headline-to">
              Long headline to turn your visitors into users
            </h1>
          </div>
          <button className="cta-button-white">
            <b className="action">Action</b>
          </button>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Wide1440px;
