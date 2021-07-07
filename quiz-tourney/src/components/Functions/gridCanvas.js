/** @format */

import React, { useRef, useEffect } from "react";

import { drawPlayboard } from "../Functions/drawPlayboard";

const GridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cnvs = canvasRef.current;
    const ctx = cnvs.getContext("2d");

    drawPlayboard(cnvs, ctx);
  }, []);

  return (
    <canvas
      id='canvasRef'
      width={800}
      height={700}
      ref={canvasRef}
      style={{
        background: "#222",
        zIndex: "1",
        position: "absolute",
        // border: "1px solid red",
      }}
    />
  );
};

export default GridCanvas;
