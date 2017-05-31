import React from "react";

class TouchAction extends React.Component {
  componentWillEnter(callback) {
    let action = [
      {transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
      {transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
      {transform: "translate(-50%, -50%) scale(1)", opacity: 0 }
    ];

    if (this.props.borderRadius) {
      action = action.map((obj, idx) => {
        obj["borderRadius"] = idx < 2 ? "50%" : 0;
        if (idx === 2) obj["opacity"] = 1;

        return obj;
      });

      action.push({
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 0,
        borderRadius: 0
      });
    }

    const animate = this.touch.animate(action, {
      duration: 350,
      fill: "forwards"
    });

    animate.onfinish = callback;
  }

  componentDidEnter() {
    const {onfinish} = this.props;

    if (onfinish) {
      onfinish();
    }
    this.props.onOpen();
  }

  render() {
    return <div ref={(node) => {this.touch = node;}} className="touch" />;
  }
}

export default TouchAction;