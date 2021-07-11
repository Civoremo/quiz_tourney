/** @format */

import React, { useRef, useState, useEffect } from "react";

import { drawPlayerText } from "../Functions";

const PlayerTextCanvas = ({ quizzes }) => {
  const playerTextCanvasRef = useRef(null);
  const [playerInfo, setPlayerInfo] = useState([
    {
      playerName: "Player 1",
      playerScore: 0,
    },
    {
      playerName: "Player 2",
      playerScore: 0,
    },
    {
      playerName: "Player 3",
      playerScore: 0,
    },
  ]);

  useEffect(() => {
    const cnvs = playerTextCanvasRef.current;
    const ctx = cnvs.getContext("2d");

    drawPlayerText(ctx, playerInfo);
  }, [quizzes, playerInfo]);

  return (
    <canvas
      id='player-text-canvas'
      width={800}
      height={195}
      ref={playerTextCanvasRef}
      style={{
        zIndex: 7,
        position: "absolute",
        top: "530px",
      }}
    />
  );
};

export default PlayerTextCanvas;
