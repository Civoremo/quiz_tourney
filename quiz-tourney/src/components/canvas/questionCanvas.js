/** @format */

import React, { useRef, useEffect, useState } from "react";

import { drawQuestion } from "../Functions/drawQuestion";

const QuestionCanvas = ({
  quizId,
  questionId,
  allQuizQuestions,
  showCanvas,
  answerGrid,
}) => {
  const canvasQuizQuestionRef = useRef(null);

  useEffect(() => {
    console.log("question picked and time to display");
    const cnvs = canvasQuizQuestionRef.current;
    const ctx = cnvs.getContext("2d");

    drawQuestion(ctx, answerGrid, quizId, questionId, allQuizQuestions);
  }, [allQuizQuestions]);

  return (
    <canvas
      id='quiz-question-canvas'
      width={800}
      height={700}
      ref={canvasQuizQuestionRef}
      style={{
        background: "#003366",
        zIndex: "20",
        visibility: showCanvas ? "visible" : "hidden",
        position: "absolute",
        // top: "205px",
        // border: "1px solid whitesmoke",
      }}
    />
  );
};

export default QuestionCanvas;
