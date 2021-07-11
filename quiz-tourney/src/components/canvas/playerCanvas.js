/** @format */

import React, { useEffect, useRef } from "react";

import { drawPlayer } from "../Functions";

const PlayerCanvas = ({ quizzes }) => {
  const playerCanvasRef = useRef(null);

  useEffect(() => {
    const cnvs = playerCanvasRef.current;
    const ctx = cnvs.getContext("2d");

    if (ctx) {
      drawPlayer(ctx, 3);
    }
  }, [quizzes]);

  return (
    <canvas
      id='player-canvas'
      width={800}
      height={195}
      ref={playerCanvasRef}
      style={{
        background: "#020b26",
        zIndex: 5,
        position: "absolute",
        top: "530px",
        // border: "1px solid red",
      }}
    />
  );
};

export default PlayerCanvas;
