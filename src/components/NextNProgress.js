import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import PropTypes from "prop-types";

// implementation of nprogress that displays the progress of a loading state as a progress bar with a spinner
class NextNProgress extends React.Component {
  static defaultProps = {
    color: "red",
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3
  };

  timer = null;

  // set start position and then start progress
  routeChangeStart = () => {
    NProgress.set(this.props.startPosition);
    NProgress.start();
  };

  // stop the progress animation once the route change is complete
  routeChangeEnd = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      NProgress.done(true);
    }, this.props.stopDelayMs);
  };

  render() {
    const { color, height } = this.props;

    return (
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: ${color};
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: ${height}px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          opacity: 1;
        }
        #nprogress .spinner {
          display: "block";
          position: fixed;
          z-index: 1031;
          top: 19px;
          left: 6px;
        }
        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;
          border: solid 2px transparent;
          border-top-color: ${color};
          border-left-color: ${color};
          border-radius: 50%;
          -webkit-animation: nprogresss-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    );
  }

  componentDidMount() {
    const { options } = this.props;

    // apply any additionally provided configurations
    if (options) {
      NProgress.configure(options);
    }

    // bind router events
    Router.events.on("routeChangeStart", this.routeChangeStart);
    Router.events.on("routeChangeComplete", this.routeChangeEnd);
    Router.events.on("routeChangeError", this.routeChangeEnd);
  }
}
NextNProgress.propTypes = {
  // the color to set the spinner/progress bar to
  color: PropTypes.string,
  // where the progress bar should start
  startPosition: PropTypes.number,
  // the delay before stopping the animation
  stopDelayMs: PropTypes.number,
  // additional nprogress options #[https://github.com/rstacruz/nprogress#configuration]
  options: PropTypes.object
};

export default NextNProgress;
