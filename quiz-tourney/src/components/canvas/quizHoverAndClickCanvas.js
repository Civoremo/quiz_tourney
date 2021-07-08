/** @format */

import React, { useRef, useEffect } from "react";

import { drawHoveringArea } from "../Functions/drawHoveringArea";

const QuizHoverAndClickCanvas = ({
  quizzes,
  showCanvas,
  setShowCanvas,
  playGrid,
  setPlayGrid,
  setPickedQuizId,
  setQuestionPicked,
}) => {
  const canvasHoverRef = useRef(null);

  const mouseMoveHandler = e => {
    // console.log("canvas", canvasHoverRef.current);
    const cnvs = canvasHoverRef.current;
    const ctx = cnvs.getContext("2d");
    if (cnvs.getBoundingClientRect() !== null) {
      let relativeOffset = cnvs.getBoundingClientRect();
      let relativeX = e.clientX - relativeOffset.left;
      let relativeY = e.clientY - relativeOffset.top;

      const mousePosition = { x: relativeX, y: relativeY };
      if (!showCanvas) {
        // console.log("quiz selection shown");
        // drawSelectedArea(mousePosition);
        drawHoveringArea(cnvs, ctx, mousePosition, playGrid);
      }
    } else {
      console.log("canvas has not finished loading");
    }
  };

  const questionsBoardClickHandler = (event, quizIndex, questionIndex) => {
    event.preventDefault();
    if (quizIndex !== null && questionIndex !== null) {
      // console.log("type", typeof quizIndex);
      // console.log("selected changed", playGrid, quizIndex, questionIndex);
      // console.log("quiz selected", quizzes[quizIndex]);
      // console.log("visibility: ", showCanvas);
      setPickedQuizId(quizzes[quizIndex].id);
      setQuestionPicked(questionIndex);
      setShowCanvas(true);
    }
  };

  const clickHandler = (cnvs, playGrid) => {
    if (cnvs.getBoundingClientRect !== null) {
      let relativeOffset = cnvs.getBoundingClientRect();
      let relativeX;
      let relativeY;

      cnvs.addEventListener(
        "click",
        event => {
          event.stopPropagation();
          relativeX = event.clientX - relativeOffset.left;
          relativeY = event.clientY - relativeOffset.top;
          // console.log("clicked on square");

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
              // console.log("POS of playGrid", pos);
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
            } else {
              console.log("not clicked withing bounds");
            }
          }
        },
        false
      );
    }
  };

  useEffect(() => {
    const cnvs = canvasHoverRef.current;
    // const ctx = cnvs.getContext("2d");

    if (playGrid.length > 0) {
      cnvs.addEventListener("mousemove", mouseMoveHandler, false);
      clickHandler(cnvs, playGrid);
    }
  }, [showCanvas, playGrid, quizzes]);

  return (
    <canvas
      id='canvas-hover-area'
      width={800}
      height={500}
      ref={canvasHoverRef}
      style={{
        zIndex: "15",
        position: "absolute",
        top: "75px",
        // border: "2px solid orange",
      }}
    />
  );
};

export default QuizHoverAndClickCanvas;
