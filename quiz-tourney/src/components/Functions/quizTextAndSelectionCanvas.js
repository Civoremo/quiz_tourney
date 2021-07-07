/** @format */

import React, { useRef, useEffect } from "react";

import { populateBoard } from "../Functions/populateBoard";

const QuizTextAndSelectionCanvas = ({
  quizzes,
  playGrid,
  setPlayGrid,
  showCanvas,
  setShowCanvas,
  setPickedQuizId,
  setQuestionPicked,
}) => {
  const canvasTextRef = useRef(null);

  const questionsBoardClickHandler = (event, quizIndex, questionIndex) => {
    event.preventDefault();
    // console.log("selected changed", playGrid, quizIndex, questionIndex);
    // console.log("visibility: ", showCanvas);
    setPickedQuizId(quizzes[quizIndex].id);
    setQuestionPicked(questionIndex);
    setShowCanvas(true);
  };

  const clickHandler = (cnvs, playGrid) => {
    let relativeOffset = cnvs.getBoundingClientRect();
    let relativeX;
    let relativeY;

    cnvs.addEventListener(
      "click",
      event => {
        event.stopPropagation();
        relativeX = event.clientX - relativeOffset.left;
        relativeY = event.clientY - relativeOffset.top;

        for (let pos in playGrid) {
          if (
            relativeX > playGrid[pos].xTop &&
            relativeX < playGrid[pos].xEnd &&
            relativeY > playGrid[pos].yTop &&
            relativeY < playGrid[pos].yEnd &&
            relativeY > 85 &&
            relativeY < 490 &&
            playGrid[pos].quiz !== undefined &&
            !showCanvas &&
            !playGrid[pos].selected
          ) {
            console.log("POS", pos);
            // playGrid[pos].selected = true;
            questionsBoardClickHandler(
              event,
              playGrid[pos].column,
              playGrid[pos].row
            );

            setPlayGrid(
              [...playGrid].map((object, index) => {
                // console.log(index === parseInt(pos));
                if (index === parseInt(pos)) {
                  // console.log(object);
                  return {
                    ...object,
                    selected: true,
                  };
                } else {
                  return object;
                }
              })
            );
          }
        }
      },
      false
    );
  };

  useEffect(() => {
    const cnvs = canvasTextRef.current;
    const ctx = cnvs.getContext("2d");

    if (quizzes.length > 0) {
      populateBoard(ctx, quizzes);
      clickHandler(cnvs, playGrid);
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

export default QuizTextAndSelectionCanvas;
