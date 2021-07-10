/** @format */

import React, { useRef, useEffect } from "react";

import { drawQuestion } from "../Functions/drawQuestion";

const QuestionCanvas = ({
  quizId,
  questionId,
  allQuizQuestions,
  showCanvas,
  answerGrid,
  questionPicked,
}) => {
  const canvasQuizQuestionRef = useRef(null);

  useEffect(() => {
    // console.log("question picked and time to display");
    const cnvs = canvasQuizQuestionRef.current;
    const ctx = cnvs.getContext("2d");
    console.log("quiz questions", allQuizQuestions);

    // if (allQuizQuestions.length > 0) {
    drawQuestion(ctx, answerGrid, quizId, questionId, allQuizQuestions);
    // } else {
    //   console.log("all quiz questions not loaded");
    // }
  }, [showCanvas, allQuizQuestions]);

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
        top: "108px",
        // border: "1px solid whitesmoke",
      }}
    />
  );
};

export default QuestionCanvas;
