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
      playerName: "CPU 1",
      playerScore: 0,
    },
    {
      playerName: "CPU 2",
      playerScore: 0,
    },
  ]);

  const scoreCPUplayers = () => {
    for (let i = 1; i < 3; i++) {
      const randCpuGuess = Math.floor(Math.random() * 10);
      console.log("GUESS", randCpuGuess);

      if (randCpuGuess > 3) {
        setPlayerInfo(
          [...playerInfo].map((player, index) => {
            // console.log(player);
            if (index === i) {
              console.log(player.playerName, player.playerScore);
              return {
                ...player,
                playerScore: (player.playerScore += 200 + questionPicked * 200),
              };
            } else {
              return player;
            }
          })
        );
      } else {
        setPlayerInfo(
          [...playerInfo].map((player, index) => {
            // console.log(player);
            if (index === i) {
              console.log(player.playerName, player.playerScore);
              return {
                ...player,
                playerScore: (player.playerScore -= 200 + questionPicked * 200),
              };
            } else {
              return player;
            }
          })
        );
      }
    }
  };

  useEffect(() => {
    console.log(
      "update player info",
      answerChecked,
      typeof answerChecked.correct
    );

    if (answerChecked.correct === true) {
      scoreCPUplayers();
      setPlayerInfo(
        [...playerInfo].map((player, index) => {
          //   console.log(player);
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
      scoreCPUplayers();
      setPlayerInfo(
        [...playerInfo].map((player, index) => {
          //   console.log(player);
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
