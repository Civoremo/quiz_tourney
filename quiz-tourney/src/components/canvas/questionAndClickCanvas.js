/** @format */

import React, { useRef, useEffect, useState } from "react";

import { drawQuestion } from "../Functions/drawQuestion";

const QuestionAndClickCanvas = ({
  quizId,
  questionId,
  allQuizQuestions,
  showCanvas,
}) => {
  const canvasQuizQuestionRef = useRef(null);
  const [answerGrid, setAnswerGrid] = useState([
    { xStart: 100, yStart: 225, xEnd: 375, yEnd: 275 },
    { xStart: 100, yStart: 295, xEnd: 375, yEnd: 350 },
    { xStart: 425, yStart: 225, xEnd: 700, yEnd: 275 },
    { xStart: 425, yStart: 295, xEnd: 700, yEnd: 350 },
  ]);

  useEffect(() => {
    const cnvs = canvasQuizQuestionRef.current;
    const ctx = cnvs.getContext("2d");

    drawQuestion(cnvs, ctx, answerGrid, quizId, questionId, allQuizQuestions);
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

export default QuestionAndClickCanvas;
