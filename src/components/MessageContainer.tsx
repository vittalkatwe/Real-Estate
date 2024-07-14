import PropTypes from "prop-types";
import "./MessageContainer.css";

const MessageContainer = ({ className = "" }) => {
  return (
    <section className={`message-container ${className}`}>
      <div className="message-container-child" />
      <img className="img-icon1" loading="lazy" alt="" src="/img-1@2x.png" />
      <div className="feature-details">
        <div className="content1">
          <h3 className="long-headline-on">
            Long headline on two lines to turn your visitors into users and
            achieve more
          </h3>
          <div className="separated-they-live2">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean
          </div>
          <div className="list">
            <div className="benefit-list">
              <div className="oval">
                <img
                  className="oval-icon"
                  loading="lazy"
                  alt=""
                  src="/oval.svg"
                />
              </div>
              <div className="showcase-and-embed">{`Showcase and embed your work with `}</div>
            </div>
            <div className="benefit-list1">
              <div className="oval1">
                <img
                  className="oval-icon1"
                  loading="lazy"
                  alt=""
                  src="/oval.svg"
                />
              </div>
              <div className="publish-across-socia">
                Publish across social channels in a click
              </div>
            </div>
            <div className="benefit-list2">
              <div className="oval2">
                <img
                  className="oval-icon2"
                  loading="lazy"
                  alt=""
                  src="/oval.svg"
                />
              </div>
              <div className="sell-your-videos">Sell your videos worldwide</div>
            </div>
            <div className="benefit-list3">
              <div className="oval3">
                <img
                  className="oval-icon3"
                  loading="lazy"
                  alt=""
                  src="/oval.svg"
                />
              </div>
              <div className="embed-your-work">{`Embed your work with `}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MessageContainer.propTypes = {
  className: PropTypes.string,
};

export default MessageContainer;
