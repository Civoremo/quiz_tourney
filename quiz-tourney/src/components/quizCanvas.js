/** @format */

import React, { useRef, useEffect, useState } from "react";

const columns = 6;
const rows = 6;
const playboard = null;

const QuizCanvas = (props) => {
  const { quizTopic } = props;
  const canvasRef = useRef(null);
  const canvasTextRef = useRef(null);

  // const cnvs = canvasRef.current;
  // const ctx = cnvs.getContext("2d");

  const drawPlayboard = (cnvx, ctx, position) => {
    // console.log("drawing");

    let squareSizeWidth = ctx.canvas.width / columns;
    let squareSizeHeight = 500 / rows;

    let titleSquareWidth = ctx.canvas.width / columns;
    let titleSquareHeight = 500 / rows;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.linewidth = 1;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (j === 0) {
          let x = titleSquareWidth * i;
          let y = titleSquareHeight * j;

          ctx.beginPath();
          ctx.rect(x + 2, y + 2, titleSquareWidth - 5, titleSquareHeight - 5);
          ctx.fillStyle = "darkblue";
          ctx.fill();
          ctx.strokeStyle = "black";
          ctx.stroke();
          ctx.closePath();
        } else {
          let x = squareSizeWidth * i;
          let y = squareSizeHeight * j;

          ctx.beginPath();
          ctx.rect(x + 2, y + 2, squareSizeWidth - 5, squareSizeHeight - 5);
          ctx.fillStyle = "blue";
          ctx.fill();

          if (
            position.x > x + 2 &&
            position.x < x + squareSizeWidth - 5 &&
            position.y > y + 2 &&
            position.y < y + squareSizeHeight - 5
          ) {
            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 2;
          } else {
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
          }
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  };

  const populateBoard = (cnvxText, ctxText) => {
    let titleSquareWidth = ctxText.canvas.width / columns;
    let titleSquareHeight = 500 / rows;
    let pointsValue = 0;
    ctxText.clearRect(0, 0, ctxText.canvas.width, ctxText.canvas.height);
    ctxText.linewidth = 1;

    for (let i = 0; i < rows; i++) {
      pointsValue = 0;
      for (let j = 0; j < columns; j++) {
        if (j === 0) {
          ctxText.font = "20px Arial";
          ctxText.fillStyle = "whitesmoke";
          ctxText.fillText(
            `${quizTopic[i].title}`,
            titleSquareWidth * i + 35,
            titleSquareHeight / 2 + 10
          );
        } else {
          pointsValue += 200;
          ctxText.font = "30px Arial";
          ctxText.fillStyle = "whitesmoke";
          ctxText.fillText(
            `$${pointsValue}`,
            titleSquareWidth * i + 45,
            titleSquareHeight * j + 60
          );
        }
        // if (j === 0) {
        //   let x = titleSquareWidth * i;
        //   let y = titleSquareHeight * j;
        //   ctx.beginPath();
        //   ctx.rect(x + 2, y + 2, titleSquareWidth - 5, titleSquareHeight - 5);
        //   ctx.fillStyle = "darkblue";
        //   ctx.fill();
        //   ctx.strokeStyle = "black";
        //   ctx.stroke();
        //   ctx.closePath();
        // } else {
        //   let x = squareSizeWidth * i;
        //   let y = squareSizeHeight * j;
        //   ctx.beginPath();
        //   ctx.rect(x + 2, y + 2, squareSizeWidth - 5, squareSizeHeight - 5);
        //   ctx.fillStyle = "blue";
        //   ctx.fill();
        //   ctx.strokeStyle = "black";
        //   ctx.stroke();
        //   ctx.closePath();
        // }
      }
    }
  };

  const mouseMoveHandler = (e) => {
    let relativeOffset = canvasRef.current.getBoundingClientRect();
    let relativeX = e.clientX - relativeOffset.left;
    let relativeY = e.clientY - relativeOffset.top;

    // console.log(relativeX, relativeY);

    const cnvs = canvasRef.current;
    const ctx = cnvs.getContext("2d");

    drawPlayboard(cnvs, ctx, { x: relativeX, y: relativeY });
  };

  useEffect(() => {
    const cnvs = canvasRef.current;
    const ctx = cnvs.getContext("2d");
    let animationFrameId;
    let interval;

    const render = () => {
      // drawPlayboard(cnvs, ctx);
      if (canvasRef.current !== null)
        document.addEventListener("mousemove", mouseMoveHandler, false);
    };

    const draw = () => {
      interval = setInterval(() => {
        render();
      }, 10);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const cnvsText = canvasTextRef.current;
    const ctxText = cnvsText.getContext("2d");
    // console.log("topics " + quizTopic[0].topic);
    if (quizTopic.length !== 0) populateBoard(cnvsText, ctxText);
    // console.log("quiz topic " + quizTopic[0].title);
    // return () => {};
  }, [quizTopic]);

  return (
    <div>
      {/* {console.log(window.innerWidth)} */}
      <div
        style={{
          height: "750px",
          background: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <canvas
          width={800}
          height={700}
          ref={canvasRef}
          style={{ background: "#222", zIndex: "1", position: "absolute" }}
        />
        <canvas
          width={800}
          height={700}
          ref={canvasTextRef}
          style={{ zIndex: "10", position: "absolute" }}
        />
      </div>
    </div>
  );
};

export default QuizCanvas;
