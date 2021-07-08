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
      populateBoard(ctx, quizzes);
    }
  }, [quizzes, playGrid, showCanvas]);

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
