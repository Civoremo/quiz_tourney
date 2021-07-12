/** @format */

import React, { useRef, useEffect } from "react";

import { drawMainCanvasText } from "../Functions";

const MainCanvas = () => {
  const mainCanvasRef = useRef(null);

  useEffect(() => {
    const cnvs = mainCanvasRef.current;
    const ctx = cnvs.getContext("2d");

    drawMainCanvasText(ctx);
  }, []);

  return (
    <canvas
      id='main-canvas'
      width={800}
      height={700}
      ref={mainCanvasRef}
      style={{
        background: "salmon",
      }}
    />
  );
};

export default MainCanvas;
