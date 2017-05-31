import React from "react";

export default function(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isRunning: false };

      this.handleAnimFinish = this.handleAnimFinish.bind(this);
      this.handleAnimStart = this.handleAnimStart.bind(this);
    }

    handleAnimStart() {
      this.setState(() => ({
        isRunning: true
      }));
    }

    handleAnimFinish() {
      this.setState(() => ({
        isRunning: false
      }));
    }

    render() {
      return (
        <WrappedComponent
          isRunning={this.state.isRunning}
          handleAnimFinish={this.handleAnimFinish}
          handleAnimStart={this.handleAnimStart}
          {...this.props}
          />
      );
    }
  };
}