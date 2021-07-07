/** @format */

import React, { useRef, useEffect } from "react";

import { drawHoveringArea } from "../Functions/drawHoveringArea";

const QuizHoverCanvas = ({ showCanvas, playGrid }) => {
  const canvasHoverRef = useRef(null);

  const mouseMoveHandler = e => {
    // console.log("canvas", canvasHoverRef.current);
    const cnvs = canvasHoverRef.current;
    const ctx = cnvs.getContext("2d");
    if (cnvs.getBoundingClientRect() !== null) {
      let relativeOffset = cnvs.getBoundingClientRect();
      let relativeX = e.clientX - relativeOffset.left;
      let relativeY = e.clientY - relativeOffset.top;

      const mousePosition = { x: relativeX, y: relativeY };
      if (!showCanvas) {
        // console.log("quiz selection shown");
        // drawSelectedArea(mousePosition);
        drawHoveringArea(cnvs, ctx, mousePosition, playGrid);
      }
    } else {
      console.log("canvas has not finished loading");
    }
  };

  useEffect(() => {
    const cnvs = canvasHoverRef.current;
    const ctx = cnvs.getContext("2d");

    if (playGrid.length > 0) {
      cnvs.addEventListener("mousemove", mouseMoveHandler, false);
    }
  }, [showCanvas, playGrid]);

  return (
    <canvas
      id='canvas-hover-area'
      width={800}
      height={500}
      ref={canvasHoverRef}
      style={{
        zIndex: "15",
        position: "absolute",
        top: "75px",
        // border: "2px solid orange",
      }}
    />
  );
};

export default QuizHoverCanvas;
