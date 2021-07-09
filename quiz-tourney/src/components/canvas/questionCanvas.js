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
    const cnvs = canvasQuizQuestionRef.current;
    const ctx = cnvs.getContext("2d");

    drawQuestion(ctx, answerGrid, quizId, questionId, allQuizQuestions);
  }, [allQuizQuestions, showCanvas]);

  return (
    <canvas
      id='quiz-question-canvas'
      width={800}
      height={420}
      ref={canvasQuizQuestionRef}
      style={{
        background: "#003366",
        zIndex: "20",
        visibility: showCanvas ? "visible" : "hidden",
        position: "absolute",
        top: "155px",
        // border: "1px solid whitesmoke",
      }}
    />
  );
};

export default QuestionCanvas;
