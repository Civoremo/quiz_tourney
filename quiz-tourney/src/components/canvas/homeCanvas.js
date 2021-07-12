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
    <div
      style={{
        height: "750px",
        background: "#141414",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
        position: "relative",
      }}
    >
      <canvas
        id='main-canvas'
        width={800}
        height={700}
        ref={mainCanvasRef}
        style={{
          background: "darkblue",
          positon: "absolute",
          //   border: "1px solid red",
          zIndex: 1,
        }}
      />

      <HomeHoverCanvas />
    </div>
  );
};

export default MainCanvas;
