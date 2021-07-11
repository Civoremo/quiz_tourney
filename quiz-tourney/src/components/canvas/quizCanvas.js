/** @format */

import React, { useEffect, useState } from "react";

import GridCanvas from "./gridCanvas";
import QuizTextCanvas from "./quizTextCanvas";
import QuizHoverAndClickCanvas from "./quizHoverAndClickCanvas";
import QuestionCanvas from "./questionCanvas";
import QuestionHoverAndClickCanvas from "./questionHoverAndClickCanvas";
import PlayerCanvas from "./playerCanvas";
import PlayerTextCanvas from "./playerTextCanvas";

const QuizCanvas = props => {
  const {
    quizzes,
    pickedQuizId,
    setPickedQuizId,
    allQuizQuestions,
    setPickedAnswer,
    pickedAnswer,
    answerChecked,
    questionPicked,
    setQuestionPicked,
  } = props;
  // const { } = props;
  const [playerScore, setPlayerScore] = useState(0);
  const [showCanvas, setShowCanvas] = useState(false);
  const [playGrid, setPlayGrid] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [answerGrid] = useState([
    { xStart: 100, yStart: 225, xEnd: 375, yEnd: 275 },
    { xStart: 100, yStart: 295, xEnd: 375, yEnd: 350 },
    { xStart: 425, yStart: 225, xEnd: 700, yEnd: 275 },
    { xStart: 425, yStart: 295, xEnd: 700, yEnd: 350 },
  ]);

  // useEffect(() => {
  //   let animationFrameId;
  //   let interval;

  //   const render = () => {
  //     // drawPlayboard(cnvs, ctx);
  //     // if (canvasRef.current !== null)
  //     // canvasRef.current.addEventListener(
  //     //   "mousemove",
  //     //   mouseMoveHandler,
  //     //   false
  //     // );
  //     // canvasHoverRef.current.addEventListener(
  //     //   "mousemove",
  //     //   mouseMoveHandler,
  //     //   false
  //     // );
  //   };
  //   const draw = () => {
  //     interval = setInterval(() => {
  //       render();
  //     }, 1000);
  //   };
  //   animationFrameId = requestAnimationFrame(draw);

  //   return () => {
  //     cancelAnimationFrame(animationFrameId);
  //     clearInterval(interval);
  //   };
  // });

  return (
    <div>
      <div>
        <span>Player Score: </span>
        <span>{playerScore}</span>
      </div>
      <div
        style={{
          height: "750px",
          background: "#141414",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid red",
          position: "relative",
        }}
      >
        <GridCanvas
          quizzes={quizzes}
          playGrid={playGrid}
          setPlayGrid={setPlayGrid}
        />

        <QuizTextCanvas
          quizzes={quizzes}
          playGrid={playGrid}
          showCanvas={setShowCanvas}
        />

        <PlayerCanvas />

        <PlayerTextCanvas
          quizzes={quizzes}
          answerChecked={answerChecked}
          questionPicked={questionPicked}
        />

        <QuizHoverAndClickCanvas
          showCanvas={showCanvas}
          playGrid={playGrid}
          quizzes={quizzes}
          setShowCanvas={setShowCanvas}
          setPlayGrid={setPlayGrid}
          setPickedQuizId={setPickedQuizId}
          setQuestionPicked={setQuestionPicked}
        />

        <QuestionCanvas
          quizId={pickedQuizId}
          questionId={questionPicked}
          allQuizQuestions={allQuizQuestions}
          showCanvas={showCanvas}
          setShowCanvas={setShowCanvas}
          answerGrid={answerGrid}
          questionPicked={questionPicked}
        />

        <QuestionHoverAndClickCanvas
          answerGrid={answerGrid}
          setPickedAnswer={setPickedAnswer}
          allQuizQuestions={allQuizQuestions}
          showCanvas={showCanvas}
          setShowCanvas={setShowCanvas}
          pickedQuizId={pickedQuizId}
          setPickedQuizId={setPickedQuizId}
          questionPicked={questionPicked}
          setQuestionPicked={setQuestionPicked}
          answerChecked={answerChecked}
        />
      </div>
    </div>
  );
};

export default QuizCanvas;
