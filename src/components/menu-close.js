import React from "react";
import {TransitionMotion, spring} from "react-motion";

import Line from "./line";

class Close extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false,
      lines: [
        { key: "line1", start: 90, end: 315 },
        { key: "line2", start: 90, end: 225 }
      ]
    };
  }

  willEnter() {
    return {
      rotate: 90,
      scale: 0
    };
  }

  willLeave() {
    return {
      rotate: spring(90),
      scale: spring(0)
    };
  }

  getDefaultStyles() {
    return this.state.lines.map(({key, start}) => ({
      key, style: { rotate: start, scale: 0}
    }));
  }

  getStyles() {
    if (!this.state.menuOpened) return [];

    return this.state.lines.map(({key, end}) => ({
      key,
      style: {
        rotate: spring(end, {stiffness: 100, damping:8}),
        scale: spring(1)
      }
    }));
  }

  componentWillReceiveProps({ isOpen }) {
    if (isOpen) {
      setTimeout(() => {
        this.setState({
          menuOpened: true
        });
      }, 500);
    } else {
      this.setState({
        menuOpened: false
      });
    }
  }

  render() {
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willLeave={this.willLeave}
        willEnter={this.willEnter}>
        {(styles) => (
          <div className="menu-close" onClick={this.props.onClose}>
            { styles.map(({style, key}) => (
              <Line {...style} key={key} />
            ))}
          </div>
        )}
      </TransitionMotion>
    );
  }
}

export default Close;