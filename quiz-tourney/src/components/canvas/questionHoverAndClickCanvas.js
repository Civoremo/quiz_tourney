/** @format */

import React, { useEffect, useRef } from "react";

import { answerHoverArea } from "../Functions";

const QuestionHoverAndClickCanvas = ({
  answerGrid,
  setPickedAnswer,
  pickedAnswer,
  allQuizQuestions,
  showCanvas,
  setShowCanvas,
  pickedQuizId,
  questionPicked,
  answerChecked,
}) => {
  const canvasAnswerHoverRef = useRef(null);

  const answerClickHandler = (event, cnvs) => {
    // const cnvs = canvasAnswerHoverRef.current;
    let relativeOffset = cnvs.getBoundingClientRect();
    let relativeX = event.clientX - relativeOffset.left;
    let relativeY = event.clientY - relativeOffset.top;

    event.stopPropagation();
    // console.log("realtive", { x: relativeX, y: relativeY });
    if (showCanvas) {
      for (let pos in answerGrid) {
        if (
          relativeX > answerGrid[pos].xStart &&
          relativeX < answerGrid[pos].xEnd &&
          relativeY > answerGrid[pos].yStart &&
          relativeY < answerGrid[pos].yEnd
        ) {
          let filteredQuiz = allQuizQuestions.filter(quiz => {
            return quiz[0] === pickedQuizId;
          });

          if (filteredQuiz.length > 0) {
            if (filteredQuiz[0][1][questionPicked] !== undefined) {
              setPickedAnswer([
                filteredQuiz[0][0],
                filteredQuiz[0][1][questionPicked].id,
                parseInt(pos),
              ]);
            } else {
              console.log("id undefined", filteredQuiz[0][1][questionPicked]);
            }
          }
        }
      }
    }
  };

  const answerMouseMoveHandler = e => {
    if (
      canvasAnswerHoverRef.current.getBoundingClientRect() !== null &&
      showCanvas
    ) {
      const cnvs = canvasAnswerHoverRef.current;
      const ctx = cnvs.getContext("2d");

      let relativeOffset = canvasAnswerHoverRef.current.getBoundingClientRect();
      let relativeX = e.clientX - relativeOffset.left;
      let relativeY = e.clientY - relativeOffset.top;

      const mousePosition = { x: relativeX, y: relativeY };

      answerHoverArea(cnvs, ctx, mousePosition, answerGrid, showCanvas);
    }
  };

  useEffect(() => {
    console.log("Answer Response", answerChecked);
    setShowCanvas(false);
  }, [answerChecked]);

  useEffect(() => {
    const cnvs = canvasAnswerHoverRef.current;

    cnvs.addEventListener("mousemove", answerMouseMoveHandler, false);

    return () => {
      console.log("removed question listener");
      cnvs.removeEventListener("mousemove", answerMouseMoveHandler, false);
    };
  }, [showCanvas, allQuizQuestions]);

  return (
    <canvas
      id='quiz-question-canvas-hover'
      ref={canvasAnswerHoverRef}
      width={800}
      height={420}
      style={{
        zIndex: "25",
        visibility: showCanvas ? "visible" : "hidden",
        position: "absolute",
        top: "108px",
        border: "2px solid green",
      }}
      onClick={event => {
        answerClickHandler(event, canvasAnswerHoverRef.current);
      }}
    />
  );
};

export default QuestionHoverAndClickCanvas;
