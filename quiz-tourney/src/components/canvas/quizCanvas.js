/** @format */

import React, { useRef, useEffect, useState } from "react";
import {
  drawPlayboard,
  populateBoard,
  drawHoveringArea,
  answerHoverArea,
} from "../Functions/index";

import GridCanvas from "./gridCanvas";
import QuizTextCanvas from "./quizTextCanvas";
import QuizHoverAndClickCanvas from "./quizHoverAndClickCanvas";

// const columns = 6;
// const rows = 6;
// const playboard = null;

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
  // const [clickedQuiz, setClickedQuiz] = useState(false);
  // const [questionPicked, setQuestionPicked] = useState(null);
  const canvasRef = useRef(null);
  const canvasTextRef = useRef(null);
  const canvasQuizQuestion = useRef(null);
  const canvasHoverRef = useRef(null);
  const canvasAnswerHoverRef = useRef(null);
  const [playGrid, setPlayGrid] = useState([]);
  const [answerGrid, setAnswerGrid] = useState([
    { xStart: 100, yStart: 225, xEnd: 375, yEnd: 275 },
    { xStart: 100, yStart: 295, xEnd: 375, yEnd: 350 },
    { xStart: 425, yStart: 225, xEnd: 700, yEnd: 275 },
    { xStart: 425, yStart: 295, xEnd: 700, yEnd: 350 },
  ]);

  // const cnvs = canvasRef.current;
  // const ctx = cnvs.getContext("2d");
  // useEffect(() => {
  //   console.log("answered checked complete", answerChecked);
  //   console.log("updated playgrid", playGrid);
  //   setShowCanvas(false);
  // }, [answerChecked]);

  // // store quiz question sqaure info
  // useEffect(() => {
  //   let tempArray = [];
  //   const columns = 6;
  //   const rows = 6;

  //   let sqrSizeWidth = canvasHoverRef.current.width / columns;
  //   let sqrSizeHeight = 500 / rows;

  //   // console.log("QUIZZES", quizzes);
  //   if (quizzes.length !== 0) {
  //     for (let i = 1; i < rows; i++) {
  //       for (let j = 0; j < columns; j++) {
  //         const x = sqrSizeWidth * j;
  //         const y = sqrSizeHeight * i;
  //         // console.log({ quiz: quizzes[j].title, Q: i, x, y });

  //         let square = {
  //           row: i - 1, // question index
  //           column: j, // quiz index
  //           selected: false, // already clicked
  //           xTop: parseInt(x + 2),
  //           xEnd: parseInt(x + 2 + sqrSizeWidth),
  //           yTop: parseInt(y + 2),
  //           yEnd: parseInt(y + 2 + sqrSizeHeight),
  //           quiz: quizzes[j],
  //         };
  //         tempArray.push(square);
  //       }
  //     }
  //     setPlayGrid(tempArray);
  //   }
  // }, [quizzes]);

  // quiz board click event listener and setter
  // useEffect(() => {
  //   const cnvs = canvasHoverRef.current;
  //   // const ctx = cnvs.getContext("2d");
  //   let relativeOffset = canvasHoverRef.current.getBoundingClientRect();
  //   let relativeX;
  //   let relativeY;

  //   cnvs.addEventListener(
  //     "click",
  //     event => {
  //       event.stopPropagation();
  //       relativeX = event.clientX - relativeOffset.left;
  //       relativeY = event.clientY - relativeOffset.top;

  //       for (let pos in playGrid) {
  //         if (
  //           relativeX > playGrid[pos].xTop &&
  //           relativeX < playGrid[pos].xEnd &&
  //           relativeY > playGrid[pos].yTop &&
  //           relativeY < playGrid[pos].yEnd &&
  //           relativeY > 85 &&
  //           relativeY < 490 &&
  //           playGrid[pos].quiz !== undefined &&
  //           !showCanvas &&
  //           !playGrid[pos].selected
  //         ) {
  //           console.log("POS", pos);
  //           // playGrid[pos].selected = true;
  //           questionsBoardClickHandler(
  //             event,
  //             playGrid[pos].column,
  //             playGrid[pos].row
  //           );

  //           setPlayGrid(
  //             [...playGrid].map((object, index) => {
  //               // console.log(index === parseInt(pos));
  //               if (index === parseInt(pos)) {
  //                 // console.log(object);
  //                 return {
  //                   ...object,
  //                   selected: true,
  //                 };
  //               } else {
  //                 return object;
  //               }
  //             })
  //           );
  //         }
  //       }
  //     },
  //     false
  //   );

  //   // console.log(playGrid);
  // }, [playGrid]);

  // event listener on answer selection board
  ////////////
  ////////////
  //need to refactor this to work on answers
  // useEffect(() => {
  //   const cnvs = canvasAnswerHoverRef.current;
  //   let relativeOffset = canvasHoverRef.current.getBoundingClientRect();
  //   let relativeX;
  //   let relativeY;

  //   cnvs.addEventListener(
  //     "click",
  //     event => {
  //       event.stopPropagation();
  //       relativeX = event.clientX - relativeOffset.left;
  //       relativeY = event.clientY - relativeOffset.top;
  //       // console.log("realtive", { x: relativeX, y: relativeY });

  //       if (showCanvas) {
  //         for (let pos in answerGrid) {
  //           if (
  //             relativeX > answerGrid[pos].xStart &&
  //             relativeX < answerGrid[pos].xEnd &&
  //             relativeY > answerGrid[pos].yStart + 80 &&
  //             relativeY < answerGrid[pos].yEnd + 80
  //           ) {
  //             let filteredQuiz = allQuizQuestions.filter(quiz => {
  //               return quiz[0] === pickedQuizId;
  //             });
  //             if (filteredQuiz.length > 0) {
  //               if (filteredQuiz[0][1][questionPicked] !== undefined) {
  //                 setPickedAnswer([
  //                   filteredQuiz[0][0],
  //                   filteredQuiz[0][1][questionPicked].id,
  //                   parseInt(pos),
  //                 ]);
  //               } else {
  //                 console.log(
  //                   "id undefined",
  //                   filteredQuiz[0][1][questionPicked]
  //                 );
  //               }
  //             }
  //           }
  //         }
  //       }
  //     },
  //     false
  //   );
  // }, [showCanvas, allQuizQuestions, questionPicked, quizzes]);

  const mouseMoveHandler = e => {
    // console.log("canvas", canvasHoverRef.current);
    if (canvasHoverRef.current.getBoundingClientRect() !== null) {
      let relativeOffset = canvasHoverRef.current.getBoundingClientRect();
      let relativeX = e.clientX - relativeOffset.left;
      let relativeY = e.clientY - relativeOffset.top;

      const mousePosition = { x: relativeX, y: relativeY };
      if (!showCanvas) {
        // console.log("quiz selection shown");
        drawSelectedArea(mousePosition);
      }
    } else {
      console.log("canvas has not finished loading");
    }
  };

  const answerMouseHandler = e => {
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

      // if (showCanvas) {
      // console.log("answer show", mousePosition);
      answerHoverArea(cnvs, ctx, mousePosition, answerGrid, showCanvas);
      // }
    }
  };

  // highlight sqaure at mouse position
  const drawSelectedArea = mousePosition => {
    const cnvs = canvasHoverRef.current;
    const ctx = cnvs.getContext("2d");

    drawHoveringArea(cnvs, ctx, mousePosition, playGrid);
  };

  // initial drawing of the board, not populating any of the text, event listener mousemove
  useEffect(() => {
    // const cnvs = canvasRef.current;
    // const ctx = cnvs.getContext("2d");
    // drawPlayboard(
    //   cnvs,
    //   ctx
    //   { x: 0, y: 0 },
    //   showCanvas,
    //   quizzes,
    //   questionsBoardClickHandler
    // );
    // if (canvasHoverRef.current !== null)
    //   canvasHoverRef.current.addEventListener(
    //     "mousemove",
    //     mouseMoveHandler,
    //     false
    //   );
    // if (canvasAnswerHoverRef.current !== null) {
    //   canvasAnswerHoverRef.current.addEventListener(
    //     "mousemove",
    //     answerMouseHandler,
    //     false
    //   );
    // }
    // return () => {
    //   canvasHoverRef.current.removeEventListener(
    //     "mousemove",
    //     mouseMoveHandler,
    //     false
    //   );
    //   canvasAnswerHoverRef.current.removeEventListener(
    //     "mousemove",
    //     answerMouseHandler,
    //     false
    //   );
    // };
  }, [showCanvas, playGrid]);

  useEffect(() => {
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

  // useEffect(() => {
  //   populateBoardText();
  //   // return () => {};
  // }, [quizzes]);

  const displayQuestionAndAnswers = (quizId, questionId) => {
    const cnvsQuestion = canvasQuizQuestion.current;
    const ctxQuestion = cnvsQuestion.getContext("2d");

    let filteredQuiz = allQuizQuestions.filter(quiz => {
      return quiz[0] === quizId;
    });

    ctxQuestion.clearRect(
      0,
      0,
      ctxQuestion.canvas.width,
      ctxQuestion.canvas.height
    );

    ctxQuestion.font = "14pt Arial";
    ctxQuestion.fillStyle = "#fff";

    if (filteredQuiz.length !== 0) {
      // console.log("filtered ", filteredQuiz);
      // console.log(
      //   "selected question ",
      //   filteredQuiz[0][1][questionId].question
      // );
      // console.log("Answers", filteredQuiz[0][1][questionId].options);
      // console.log(
      //   "questionLength",
      //   ctxQuestion.measureText(filteredQuiz[0][1][questionId].question).width
      // );
      ctxQuestion.textAlign = "center";
      ctxQuestion.fillText(
        `${filteredQuiz[0][1][questionId].question}`,
        400,
        100
      );

      filteredQuiz[0][1][questionId].options.forEach((answer, index) => {
        // ctxQuestion.fillText(`${answer}`, 125, 125 + index * 25);

        if (index < 2) {
          ctxQuestion.beginPath();
          ctxQuestion.rect(
            answerGrid[index].xStart,
            answerGrid[index].yStart,
            275,
            50
          );
          ctxQuestion.fillStyle = "#0c76cc";
          ctxQuestion.fill();
          ctxQuestion.closePath();
          ctxQuestion.fillStyle = "#fff";
          ctxQuestion.textAlign = "start";
          ctxQuestion.fillText(`${answer}`, 125, 258 + index * 70);
        } else {
          ctxQuestion.beginPath();
          ctxQuestion.rect(
            answerGrid[index].xStart,
            answerGrid[index].yStart,
            275,
            50
          );
          ctxQuestion.fillStyle = "#0c76cc";
          ctxQuestion.fill();
          ctxQuestion.closePath();
          ctxQuestion.fillStyle = "#fff";
          ctxQuestion.textAlign = "start";
          ctxQuestion.fillText(`${answer}`, 450, 258 + (index % 2) * 70);
        }
      });
    }
  };

  // show question canvas and set quiz and question index
  const questionsBoardClickHandler = (event, quizIndex, questionIndex) => {
    event.preventDefault();
    // console.log("selected changed", playGrid, quizIndex, questionIndex);
    // console.log("visibility: ", showCanvas);
    setPickedQuizId(quizzes[quizIndex].id);
    setQuestionPicked(questionIndex);
    setShowCanvas(true);
  };

  useEffect(() => {
    // console.log("picked new question ID", pickedQuizId);
    if (pickedQuizId !== null) {
      displayQuestionAndAnswers(pickedQuizId, questionPicked);
    } else {
      console.log("not going to display question text");
    }

    // return () => {
    //   cleanup
    // }
  }, [allQuizQuestions]);

  useEffect(() => {
    // console.log(pickedQuizId, questionPicked);
    // console.log(allQuizQuestions, allQuizQuestions.length);
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
  }, [pickedQuizId, questionPicked, allQuizQuestions]);

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
        {/* canvas used to draw the board grid layout */}
        {/* <canvas
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
        /> */}
        <GridCanvas quizzes={quizzes} setPlayGrid={setPlayGrid} />

        {/* canvas used to write text on the board grid layout */}
        {/* <canvas
          id='quiz-selection-canvas'
          width={800}
          height={700}
          ref={canvasTextRef}
          style={{
            zIndex: "10",
            position: "absolute",
            // border: "3px solid red",
          }}
        /> */}
        <QuizTextCanvas
          quizzes={quizzes}
          playGrid={playGrid}
          showCanvas={setShowCanvas}
        />

        {/* canvas used to show the grid square the mouse is hovering over */}
        {/* <canvas
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
        /> */}
        <QuizHoverAndClickCanvas
          showCanvas={showCanvas}
          playGrid={playGrid}
          quizzes={quizzes}
          setShowCanvas={setShowCanvas}
          setPlayGrid={setPlayGrid}
          setPickedQuizId={setPickedQuizId}
          setQuestionPicked={setQuestionPicked}
        />

        {/* canvas used to display the selected question with the possible answers */}
        <canvas
          id='quiz-question-canvas'
          width={800}
          height={420}
          ref={canvasQuizQuestion}
          style={{
            background: "#003366",
            zIndex: "20",
            visibility: showCanvas ? "visible" : "hidden",
            position: "absolute",
            top: "155px",
            // border: "1px solid whitesmoke",
          }}
        />

        {/* canvas used to highlight the answer the mouse is hovering over */}
        <canvas
          id='quiz-question-canvas-hover'
          ref={canvasAnswerHoverRef}
          width={800}
          height={420}
          style={{
            zIndex: "25",
            visibility: showCanvas ? "visible" : "hidden",
            position: "absolute",
            top: "155px",
            // border: "2px solid green",
          }}
        />
      </div>
    </div>
  );
};

export default QuizCanvas;
