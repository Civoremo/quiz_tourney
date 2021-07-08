/** @format */

import React, { useRef, useEffect } from "react";

import { drawPlayboard } from "../Functions/drawPlayboard";

const GridCanvas = ({ quizzes, setPlayGrid }) => {
  const canvasRef = useRef(null);

  const storePlayGrid = quizzes => {
    let tempArray = [];
    const columns = 6;
    const rows = 6;

    let sqrSizeWidth = 800 / columns;
    let sqrSizeHeight = 500 / rows;

    // console.log("QUIZZES", quizzes);
    // console.log("storing playgrid");
    if (quizzes.length !== 0) {
      for (let i = 1; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const x = sqrSizeWidth * j;
          const y = sqrSizeHeight * i;
          // console.log({ quiz: quizzes[j].title, Q: i, x, y });

          let square = {
            row: i - 1, // question index
            column: j, // quiz index
            selected: false, // already clicked
            xTop: parseInt(x + 2),
            xEnd: parseInt(x + 2 + sqrSizeWidth),
            yTop: parseInt(y + 2),
            yEnd: parseInt(y + 2 + sqrSizeHeight),
            quiz: quizzes[j],
          };
          tempArray.push(square);
        }
      }
      setPlayGrid(tempArray);
    }
  };

  useEffect(() => {
    const cnvs = canvasRef.current;
    const ctx = cnvs.getContext("2d");

    drawPlayboard(cnvs, ctx);
    storePlayGrid(quizzes);
  }, [quizzes]);

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
