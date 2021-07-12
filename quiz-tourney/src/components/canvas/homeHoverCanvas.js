/** @format */

import React, { useRef, useEffect } from "react";

import { drawMainCanvasHoverArea } from "../Functions";

const HomeHoverCanvas = () => {
  const homeHoverCanvas = useRef(null);

  const mainCanvasMouseHandler = e => {
    if (homeHoverCanvas.current.getBoundingClientRect() !== null) {
      const cnvs = homeHoverCanvas.current;
      const ctx = cnvs.getContext("2d");

      let relativeOffset = homeHoverCanvas.current.getBoundingClientRect();
      let relativeX = e.clientX - relativeOffset.left;
      let relativeY = e.clientY - relativeOffset.top;

      const mousePosition = { x: relativeX, y: relativeY };
      drawMainCanvasHoverArea(ctx, mousePosition);
    }
  };

  if (homeHoverCanvas.current !== null) {
    homeHoverCanvas.current.addEventListener(
      "mousemove",
      mainCanvasMouseHandler,
      false
    );
  }

  return (
    <canvas
      id='main-hover-canvas'
      width={800}
      height={700}
      ref={homeHoverCanvas}
      style={{
        zIndex: 2,
        zIndex: "absolute",
      }}
    />
  );
};

export default HomeHoverCanvas;
