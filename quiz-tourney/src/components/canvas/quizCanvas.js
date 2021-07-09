/** @format */

import React, { useEffect, useState } from "react";

import GridCanvas from "./gridCanvas";
import QuizTextCanvas from "./quizTextCanvas";
import QuizHoverAndClickCanvas from "./quizHoverAndClickCanvas";
import QuestionCanvas from "./questionCanvas";
import QuestionHoverAndClickCanvas from "./questionHoverAndClickCanvas";

const QuizCanvas = props => {
  const {
    quizzes,
    pickedQuizId,
    setPickedQuizId,
    allQuizQuestions,
    setPickedAnswer,
    answerChecked,
  } = props;
  const { questionPicked, setQuestionPicked } = props;
  const [showCanvas, setShowCanvas] = useState(false);
  const [playGrid, setPlayGrid] = useState([]);
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

  useEffect(() => {
    console.log(
      "setting new quizID and question Index",
      pickedQuizId,
      questionPicked
    );
    if (
      pickedQuizId !== null &&
      questionPicked !== null &&
      allQuizQuestions !== undefined
    ) {
      console.log(
        "quiz selected",
        quizzes.filter(quiz => quiz.id === pickedQuizId)
      );
      if (allQuizQuestions.length > 0)
        console.log(
          "question selected",
          allQuizQuestions[0][1][questionPicked]
        );
    }
  }, [pickedQuizId, questionPicked, allQuizQuestions, quizzes]);

  return (
    <div>
      <div
        style={{
          height: "750px",
          background: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GridCanvas quizzes={quizzes} setPlayGrid={setPlayGrid} />

        <QuizTextCanvas
          quizzes={quizzes}
          playGrid={playGrid}
          showCanvas={setShowCanvas}
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
          answerGrid={answerGrid}
        />

        <QuestionHoverAndClickCanvas
          answerGrid={answerGrid}
          setPickedAnswer={setPickedAnswer}
          allQuizQuestions={allQuizQuestions}
          showCanvas={showCanvas}
          setShowCanvas={setShowCanvas}
          pickedQuizId={pickedQuizId}
          questionPicked={questionPicked}
          answerChecked={answerChecked}
        />
      </div>
    </div>
  );
};

export default QuizCanvas;
