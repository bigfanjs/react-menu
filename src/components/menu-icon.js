import React from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";

import TouchAction from "./touch-action";

export default function ({isRunning, handleAnimFinish, handleAnimStart, onOpen}) {
  return (
    <li onClick={handleAnimStart}>
      <TransitionGroup component="div">
        { isRunning &&
          <TouchAction
            onfinish={handleAnimFinish}
            onOpen={onOpen} /> }
      </TransitionGroup>
      <i className="fa fa-bars fa-lg" aria-hidden="true" />
    </li>
  );
}