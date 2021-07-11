/** @format */

import React, { useRef, useState, useEffect } from "react";

import { drawPlayerText } from "../Functions";

const PlayerTextCanvas = ({ quizzes, answerChecked, questionPicked }) => {
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
    console.log(
      "update player info",
      answerChecked,
      typeof answerChecked.correct
    );
    if (answerChecked.correct === true) {
      setPlayerInfo(
        [...playerInfo].map((player, index) => {
          console.log(player);
          if (index === 0) {
            return {
              ...player,
              playerScore: (playerInfo[index].playerScore +=
                200 + questionPicked * 200),
            };
          } else {
            return player;
          }
        })
      );
    }
    if (answerChecked.correct === false) {
      setPlayerInfo(
        [...playerInfo].map((player, index) => {
          console.log(player);
          if (index === 0) {
            return {
              ...player,
              playerScore: (playerInfo[index].playerScore -=
                200 + questionPicked * 200),
            };
          } else {
            return player;
          }
        })
      );
    }
  }, [answerChecked]);

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
