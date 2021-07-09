/** @format */

import React, { useRef, useEffect } from "react";

import { populateBoard } from "../Functions/populateBoard";

const QuizTextCanvas = ({ quizzes, playGrid, showCanvas }) => {
  const canvasTextRef = useRef(null);

  useEffect(() => {
    const cnvs = canvasTextRef.current;
    const ctx = cnvs.getContext("2d");

    if (quizzes.length > 0) {
      // console.log("loaded text and ready for clicks");
      if (playGrid.length > 0) populateBoard(ctx, quizzes, playGrid);
    }
  }, [quizzes]);

  useEffect(() => {
    const cnvs = canvasTextRef.current;
    const ctx = cnvs.getContext("2d");
    if (quizzes.length > 0) {
      // console.log("loaded text and ready for clicks");
      console.log("redraw text on squares");
      if (playGrid.length > 0) populateBoard(ctx, quizzes, playGrid);
    }
  }, [playGrid]);

  return (
    <canvas
      id='quiz-selection-canvas'
      width={800}
      height={700}
      ref={canvasTextRef}
      style={{
        zIndex: "10",
        position: "absolute",
        // border: "3px solid red",
      }}
    />
  );
};

export default QuizTextCanvas;
