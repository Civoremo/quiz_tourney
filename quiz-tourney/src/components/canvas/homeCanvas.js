/** @format */

import React, { useRef, useEffect } from "react";
import HomeHoverCanvas from "./homeHoverCanvas";

import { drawMainCanvasText, drawMainCanvasHoverArea } from "../Functions";

const MainCanvas = () => {
  const mainCanvasRef = useRef(null);

  useEffect(() => {
    const cnvs = mainCanvasRef.current;
    const ctx = cnvs.getContext("2d");

    drawMainCanvasText(ctx);

    // return () => {
    //   cnvs.removeEventListener("mousemove", mainCanvasMouseHandler, false);
    // };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        id='main-canvas'
        width={800}
        height={700}
        ref={mainCanvasRef}
        style={{
          background: "darkblue",
          positon: "absolute",
        }}
      />

      <HomeHoverCanvas />
    </div>
  );
};

export default MainCanvas;
