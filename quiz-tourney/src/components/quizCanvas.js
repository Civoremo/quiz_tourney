/** @format */

import React, { useRef, useEffect, useState } from "react";
import {
  drawPlayboard,
  populateBoard,
  drawHoveringArea,
} from "./Functions/index";

// const columns = 6;
// const rows = 6;
// const playboard = null;

const QuizCanvas = props => {
  const { quizzes, pickedQuizId, setPickedQuizId, allQuizQuestions } = props;
  const { questionPicked, setQuestionPicked } = props;
  const [showCanvas, setShowCanvas] = useState(false);
  // const [clickedQuiz, setClickedQuiz] = useState(false);
  // const [questionPicked, setQuestionPicked] = useState(null);
  const canvasRef = useRef(null);
  const canvasTextRef = useRef(null);
  const canvasQuizQuestion = useRef(null);
  const canvasHoverRef = useRef(null);
  const [playGrid, setPlayGrid] = useState([]);

  // const cnvs = canvasRef.current;
  // const ctx = cnvs.getContext("2d");

  // store quiz question sqaure info
  useEffect(() => {
    let tempArray = [];
    const columns = 6;
    const rows = 6;

    let sqrSizeWidth = canvasHoverRef.current.width / columns;
    let sqrSizeHeight = 500 / rows;

    console.log("QUIZZES", quizzes);
    if (quizzes.length !== 0) {
      for (let i = 1; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const x = sqrSizeWidth * j;
          const y = sqrSizeHeight * i;
          // console.log({ quiz: quizzes[j].title, Q: i, x, y });

          let square = {
            row: i - 1, // question index
            column: j, // quiz index
            selected: false, // already clicked
            xTop: parseInt(x + 2),
            xEnd: parseInt(x + 2 + sqrSizeWidth),
            yTop: parseInt(y + 2),
            yEnd: parseInt(y + 2 + sqrSizeHeight),
            quiz: quizzes[j],
          };
          tempArray.push(square);
        }
      }
      setPlayGrid(tempArray);
    }
  }, [quizzes]);

  // quiz board click event listener and setter
  useEffect(() => {
    const cnvs = canvasHoverRef.current;
    // const ctx = cnvs.getContext("2d");
    let relativeOffset = canvasHoverRef.current.getBoundingClientRect();
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
            relativeY > 2 &&
            relativeY < 490 &&
            playGrid[pos].quiz !== undefined &&
            !showCanvas &&
            !playGrid[pos].selected
          ) {
            // console.log({
            //   xM: relativeX,
            //   yM: relativeY,
            //   xT: parseInt(playGrid[pos].xTop),
            //   xE: parseInt(playGrid[pos].xEnd),
            //   yT: parseInt(playGrid[pos].yTop),
            //   yE: parseInt(playGrid[pos].yEnd),
            //   quiz: playGrid[pos].quiz.title,
            //   question: playGrid[pos].row,
            // });
            console.log(
              "square clicked",
              "\nQuiz index",
              playGrid[pos].column,
              playGrid[pos].quiz.title,
              "question",
              playGrid[pos].row
              //   "playgrid",
              //   { yTop: playGrid[pos].yTop, yEnd: playGrid[pos].yEnd },
              //   playGrid[pos]
            );
            playGrid[pos].selected = true;
            questionsBoardClickHandler(
              event,
              playGrid[pos].column,
              playGrid[pos].row
            );
          }
        }
      },
      false
    );
    // console.log(playGrid);
  }, [playGrid]);

  const mouseMoveHandler = e => {
    // console.log("canvas", canvasHoverRef.current);
    if (canvasHoverRef.current.getBoundingClientRect() !== null) {
      let relativeOffset = canvasHoverRef.current.getBoundingClientRect();
      let relativeX = e.clientX - relativeOffset.left;
      let relativeY = e.clientY - relativeOffset.top;

      // console.log(relativeX, relativeY);

      // const cnvs = canvasRef.current;
      // const ctx = cnvs.getContext("2d");

      const mousePosition = { x: relativeX, y: relativeY };
      //   console.log("M-position", mousePosition);
      drawSelectedArea(mousePosition);
    } else {
      console.log("canvas has not finished loading");
    }
  };

  // highlight sqaure at mouse position
  const drawSelectedArea = mousePosition => {
    const cnvs = canvasHoverRef.current;
    const ctx = cnvs.getContext("2d");

    drawHoveringArea(cnvs, ctx, mousePosition);
  };

  // initial drawing of the board, not populating any of the text, event listener mousemove
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

    if (canvasHoverRef.current !== null)
      canvasHoverRef.current.addEventListener(
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
      // canvasHoverRef.current.addEventListener(
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

  // show question canvas and set quiz and question index
  const questionsBoardClickHandler = (event, quizIndex, questionIndex) => {
    event.preventDefault();
    console.log("selected changed", playGrid, quizIndex, questionIndex);
    console.log("visibility: ", showCanvas);
    setPickedQuizId(quizzes[quizIndex].id);
    setQuestionPicked(questionIndex);
    setShowCanvas(true);
  };

  useEffect(() => {
    console.log("picked new question ID", pickedQuizId);
    if (pickedQuizId !== null) {
      displayQuestionAndAnswers(pickedQuizId, questionPicked);
    } else {
      console.log("not going to display question text");
    }

    // return () => {
    //   cleanup
    // }
  }, [allQuizQuestions]);

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
            // border: "1px solid red",
          }}
        />
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
        <canvas
          id='canvas-hover-area'
          width={800}
          height={500}
          ref={canvasHoverRef}
          style={{
            zIndex: "15",
            position: "absolute",
            top: "75px",
            border: "2px solid orange",
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
            position: "absolute",
            top: "155px",
            border: "1px solid whitesmoke",
          }}
        />
      </div>
    </div>
  );
};

export default QuizCanvas;
