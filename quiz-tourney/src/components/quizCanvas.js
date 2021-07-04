/** @format */

import React, { useRef, useEffect, useState } from "react";
import {
  drawPlayboard,
  populateBoard,
  drawHoveringArea,
} from "./Functions/index";

const columns = 6;
const rows = 6;
// const playboard = null;

const QuizCanvas = props => {
  const { quizzes, pickedQuizId, setPickedQuizId, allQuizQuestions } = props;
  const { questionPicked, setQuestionPicked } = props;
  const [showCanvas, setShowCanvas] = useState(false);
  const [clickedQuiz, setClickedQuiz] = useState(false);
  // const [questionPicked, setQuestionPicked] = useState(null);
  const canvasRef = useRef(null);
  const canvasTextRef = useRef(null);
  const canvasQuizQuestion = useRef(null);
  const cavnasHoverRef = useRef(null);
  const [playGrid, setPlayGrid] = useState([]);

  // const cnvs = canvasRef.current;
  // const ctx = cnvs.getContext("2d");

  useEffect(() => {
    let tempArray = [];
    const columns = 6;
    const rows = 6;

    let sqrSizeWidth = cavnasHoverRef.current.width / columns;
    let sqrSizeHeight = 500 / rows;

    console.log("QUIZZES", quizzes);
    if (quizzes.length !== 0) {
      for (let i = 1; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const x = sqrSizeWidth * j;
          const y = sqrSizeHeight * (i + 1);
          // console.log("row", i, "at".x, "column", j, "at", y);
          console.log({ quiz: quizzes[j].title, Q: i, x, y });

          let square = {
            row: i - 1,
            column: j,
            selected: false,
            i,
            j,
            // xTop: y + 2,
            // xEnd: y + 2 + (sqrSizeHeight - 5),
            // yTop: x + 2,
            // yEnd: x + 2 + (sqrSizeWidth - 5),
            xTop: x + 2,
            xEnd: x + 2 + sqrSizeWidth,
            yTop: y + 2,
            yEnd: y + 2 + sqrSizeHeight,
            quiz: quizzes[j],
          };
          tempArray.push(square);
        }
      }
      setPlayGrid(tempArray);
    }
  }, [quizzes]);

  useEffect(() => {
    const cnvs = cavnasHoverRef.current;
    const ctx = cnvs.getContext("2d");
    let relativeOffset = cavnasHoverRef.current.getBoundingClientRect();
    let relativeX;
    let relativeY;

    cnvs.addEventListener(
      "click",
      event => {
        event.stopPropagation();
        relativeX = event.clientX - relativeOffset.left;
        relativeY = event.clientY - relativeOffset.top;
        // console.log(playGrid);
        // console.log("relative", relativeX, { relativeY, y: event.clientY });
        // console.log("clicked", mousePosition);
        // console.log("x pos", event.clientX);
        // console.log("Y pos", event.clientY);
        // if (playGrid.length > 0) {
        for (let pos in playGrid) {
          if (
            relativeX > playGrid[pos].xTop &&
            relativeX < playGrid[pos].xEnd &&
            event.clientY > playGrid[pos].yTop &&
            event.clientY < playGrid[pos].yEnd &&
            // pos !== 0 &&
            playGrid[pos].quiz !== undefined
          ) {
            console.log({
              xM: relativeX,
              yM: relativeY,
              xT: parseInt(playGrid[pos].xTop),
              xE: parseInt(playGrid[pos].xEnd),
              yT: parseInt(playGrid[pos].yTop),
              yE: parseInt(playGrid[pos].yEnd),
              quiz: playGrid[pos].quiz.title,
              question: playGrid[pos].row,
            });
            console.log(
              "square clicked",
              "\nQuiz index",
              playGrid[pos].column,
              playGrid[pos].quiz.title,
              "question",
              playGrid[pos].row
            );
            console.log(playGrid[pos]);
          }
        }
        // } else {
        //   console.log("no data");
        // }
      },
      false
    );
  }, [playGrid]);

  const questionsBoardClickHandler = (event, i, j) => {
    event.preventDefault();
    if (!showCanvas) {
      console.log("visibility: ", showCanvas);
      setPickedQuizId(quizzes[i].id);
      setQuestionPicked(j - 1);
      setShowCanvas(true);
      // setShowCanvas(!showCanvas);
    } else {
      console.log("STOPPED EVENT");
    }
  };

  const mouseMoveHandler = e => {
    // console.log("canvas", cavnasHoverRef.current);
    if (cavnasHoverRef.current.getBoundingClientRect() !== null) {
      let relativeOffset = cavnasHoverRef.current.getBoundingClientRect();
      let relativeX = e.clientX - relativeOffset.left;
      let relativeY = e.clientY - relativeOffset.top;

      // console.log(relativeX, relativeY);

      const cnvs = canvasRef.current;
      const ctx = cnvs.getContext("2d");

      const mousePosition = { x: relativeX, y: relativeY };
      //   console.log("M-position", mousePosition);
      drawSelectedArea(mousePosition);
    } else {
      console.log("canvas has not finished loading");
    }
  };
  const pullUpClickedQuiz = () => {
    console.log("button clicked");
  };

  const drawSelectedArea = mousePosition => {
    const cnvs = cavnasHoverRef.current;
    const ctx = cnvs.getContext("2d");

    drawHoveringArea(cnvs, ctx, mousePosition);
  };

  // initial drawing of the board, not populating any of the text
  useEffect(() => {
    const cnvs = canvasRef.current;
    const ctx = cnvs.getContext("2d");

    drawPlayboard(
      cnvs,
      ctx
      //   { x: 0, y: 0 },
      //   showCanvas,
      //   quizzes,
      //   questionsBoardClickHandler
    );

    if (cavnasHoverRef.current !== null)
      cavnasHoverRef.current.addEventListener(
        "mousemove",
        mouseMoveHandler,
        false
      );
    return () => {};
  }, []);

  useEffect(() => {
    // const cnvs = canvasRef.current;
    // const ctx = cnvs.getContext("2d");
    console.log("drawing");
    let animationFrameId;
    let interval;

    const render = () => {
      // drawPlayboard(cnvs, ctx);
      // if (canvasRef.current !== null)
      // canvasRef.current.addEventListener(
      //   "mousemove",
      //   mouseMoveHandler,
      //   false
      // );
      // cavnasHoverRef.current.addEventListener(
      //   "mousemove",
      //   mouseMoveHandler,
      //   false
      // );
    };
    const draw = () => {
      interval = setInterval(() => {
        render();
      }, 1000);
    };
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
      //   canvasRef.current.removeEventListener("mouse", mouseMoveHandler, false);
    };
  });

  const populateBoardText = () => {
    const cnvsText = canvasTextRef.current;
    const ctxText = cnvsText.getContext("2d");
    // console.log("topics " + quizzes[0].topic);
    if (quizzes.length !== 0) populateBoard(ctxText, quizzes);
  };

  useEffect(() => {
    populateBoardText();
    // return () => {};
  }, [quizzes]);

  const displayQuestionAndAnswers = (quizId, questionId) => {
    // console.log("FILTERING");
    // console.log("QQ ID ", questionId);
    // console.log("picked ", pickedQuizId);
    // console.log("QQ ", allQuizQuestions);
    const cnvsQuestion = canvasQuizQuestion.current;
    const ctxQuestion = cnvsQuestion.getContext("2d");

    let filteredQuiz = allQuizQuestions.filter(quiz => {
      return quiz[0] === quizId;
    });
    console.log("QUIZ ", filteredQuiz);

    ctxQuestion.clearRect(
      0,
      0,
      ctxQuestion.canvas.width,
      ctxQuestion.canvas.height
    );

    ctxQuestion.font = "20px Ariel";
    ctxQuestion.fillStyle = "red";

    if (filteredQuiz.length !== 0) {
      console.log("filtered ", filteredQuiz);
      console.log(
        "selected question ",
        filteredQuiz[0][1][questionId].question
      );
      console.log("Answers", filteredQuiz[0][1][questionId].options);
      ctxQuestion.fillText(
        `${filteredQuiz[0][1][questionId].question}`,
        100,
        100
      );
      filteredQuiz[0][1][questionId].options.forEach((answer, index) => {
        ctxQuestion.fillText(`${answer}`, 125, 125 + index * 25);
      });
    }
  };

  useEffect(() => {
    if (pickedQuizId !== null) {
      console.log("showing wuiz question");
      displayQuestionAndAnswers(pickedQuizId, questionPicked);
    } else {
      console.log("not going to display question text");
    }

    // return () => {
    //   cleanup
    // }
  }, [pickedQuizId]);

  return (
    <div>
      {/* {console.log(window.innerWidth)} */}
      <div
        style={{
          height: "750px",
          background: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <canvas
          id='canvasRef'
          width={800}
          height={700}
          ref={canvasRef}
          style={{
            background: "#222",
            zIndex: "1",
            position: "absolute",
          }}
        />
        <canvas
          id='quiz-selection-canvas'
          width={800}
          height={700}
          ref={canvasTextRef}
          style={{ zIndex: "10", position: "absolute" }}
        />
        <canvas
          id='canvas-hover-area'
          width={800}
          height={700}
          ref={cavnasHoverRef}
          style={{
            zIndex: "15",
            position: "absolute",
          }}
        />
        <canvas
          id='quiz-question-canvas'
          width={796}
          height={420}
          ref={canvasQuizQuestion}
          style={{
            background: "lightblue",
            zIndex: "20",
            visibility: showCanvas ? "visible" : "hidden",
            position: "relative",
            top: "-60px",
          }}
        />
      </div>
    </div>
  );
};

export default QuizCanvas;
