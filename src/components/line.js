import React from "react";

export default function ({rotate, scale}) {
  return (
    <div
      style={{
        transform: `
          translate(-50%, -50%)
          scale(${ scale })
          rotate(${ rotate }deg)`
      }}
      className="line"
      />
  );
}