/** @format */

import React, { useRef, useEffect, useState } from 'react';
import { drawPlayboard, populateBoard } from './Functions/index';

const columns = 6;
const rows = 6;
// const playboard = null;

const QuizCanvas = (props) => {
	const { quizzes, pickedQuizId, setPickedQuizId, allQuizQuestions } = props;
	const { questionPicked, setQuestionPicked } = props;
	const [ showCanvas, setShowCanvas ] = useState(false);
	// const [questionPicked, setQuestionPicked] = useState(null);
	const canvasRef = useRef(null);
	const canvasTextRef = useRef(null);
	const canvasQuizQuestion = useRef(null);

	// const cnvs = canvasRef.current;
	// const ctx = cnvs.getContext("2d");

	const questionsBoardClickHandler = (event, i, j) => {
		event.preventDefault();
		if (!showCanvas) {
			console.log('visibility: ', showCanvas);
			setPickedQuizId(quizzes[i].id);
			setQuestionPicked(j - 1);
			setShowCanvas(true);
			// setShowCanvas(!showCanvas);
		} else {
			console.log('STOPPED EVENT');
		}
	};

	// const drawPlayboard = (cnvs, ctx, position) => {
	//   // console.log("drawing");

	//   let squareSizeWidth = ctx.canvas.width / columns;
	//   let squareSizeHeight = 500 / rows;

	//   let titleSquareWidth = ctx.canvas.width / columns;
	//   let titleSquareHeight = 500 / rows;
	//   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	//   ctx.linewidth = 1;

	//   for (let i = 0; i < rows; i++) {
	//     for (let j = 0; j < columns; j++) {
	//       if (j === 0) {
	//         let x = titleSquareWidth * i;
	//         let y = titleSquareHeight * j;

	//         ctx.beginPath();
	//         ctx.rect(x + 2, y + 2, titleSquareWidth - 5, titleSquareHeight - 5);
	//         ctx.fillStyle = "darkblue";
	//         ctx.fill();
	//         ctx.strokeStyle = "black";
	//         ctx.stroke();
	//         ctx.closePath();
	//       } else {
	//         let x = squareSizeWidth * i;
	//         let y = squareSizeHeight * j;

	//         ctx.beginPath();
	//         ctx.rect(x + 2, y + 2, squareSizeWidth - 5, squareSizeHeight - 5);
	//         ctx.fillStyle = "blue";
	//         ctx.fill();

	//         if (
	//           position.x > x + 2 &&
	//           position.x < x + squareSizeWidth - 5 &&
	//           position.y > y + 2 &&
	//           position.y < y + squareSizeHeight - 5 &&
	//           showCanvas === false
	//         ) {
	//           ctx.strokeStyle = "yellow";
	//           ctx.lineWidth = 2;
	//           // console.log("arrayLocation ", i, j);
	//           // console.log(quizzes[i]);
	//           // console.log("pickedQuizID ", pickedQuizId);
	//           if (quizzes[i] !== undefined && showCanvas === false) {
	//             document.addEventListener(
	//               "click",
	//               (event) => {
	//                 questionsBoardClickEvent(i, j);
	//                 // console.log("visibility: ", showCanvas);
	//                 // event.preventDefault();
	//                 // setPickedQuizId(quizzes[i].id);
	//                 // setQuestionPicked(j - 1);
	//                 // setShowCanvas(true);
	//                 // displayQuestionAndAnswers(quizzes[i].id);
	//               },
	//               false
	//             );
	//           }
	//         } else {
	//           ctx.strokeStyle = "black";
	//           ctx.lineWidth = 2;
	//         }
	//         ctx.stroke();
	//         ctx.closePath();
	//       }
	//     }
	//   }
	// };

	// const populateBoard = (ctxText) => {
	//   let titleSquareWidth = ctxText.canvas.width / columns;
	//   let titleSquareHeight = 500 / rows;
	//   let pointsValue = 0;
	//   ctxText.clearRect(0, 0, ctxText.canvas.width, ctxText.canvas.height);
	//   ctxText.linewidth = 1;

	//   for (let i = 0; i < rows; i++) {
	//     // console.log(ctxText.measureText(quizzes[i].title).width);
	//     // console.log(ctxText.measureText(quizzes[i].title).height);
	//     pointsValue = 0;
	//     for (let j = 0; j < columns; j++) {
	//       if (j === 0) {
	//         let linesOfText = quizzes[i].title.split(" ");
	//         // console.log("lines ", linesOfText);
	//         // let titleHeight =
	//         //   ctxText.measureText(quizzes[i].title).actualBoundingBoxAscent +
	//         //   ctxText.measureText(quizzes[i].title).actualBoundingBoxDescent;
	//         // console.log("title height ", titleHeight);
	//         let titleHeight = 18;

	//         ctxText.font = "18px Arial";
	//         ctxText.fillStyle = "whitesmoke";

	//         if (linesOfText.length > 1) {
	//           for (let t = 0; t < linesOfText.length; t++) {
	//             ctxText.fillText(
	//               `${linesOfText[t]}`,
	//               titleSquareWidth * i +
	//                 titleSquareWidth / 2 -
	//                 ctxText.measureText(linesOfText[t]).width / 2,
	//               titleSquareHeight / linesOfText.length + titleHeight * t,
	//               115
	//             );
	//           }
	//         } else {
	//           ctxText.fillText(
	//             `${quizzes[i].title}`,
	//             titleSquareWidth * i +
	//               titleSquareWidth / 2 -
	//               ctxText.measureText(quizzes[i].title).width / 2,
	//             titleSquareHeight / 2 + titleHeight / 2,
	//             115
	//           );
	//         }
	//       } else {
	//         pointsValue += 200;
	//         ctxText.font = "25px Arial";
	//         ctxText.fillStyle = "whitesmoke";
	//         let textHeight =
	//           ctxText.measureText(pointsValue).actualBoundingBoxAscent +
	//           ctxText.measureText(pointsValue).actualBoundingBoxDescent;
	//         // console.log("height ", textHeight);
	//         ctxText.fillText(
	//           `$${pointsValue}`,
	//           titleSquareWidth * i -
	//             5 +
	//             titleSquareWidth / 2 -
	//             ctxText.measureText(pointsValue).width / 2,
	//           titleSquareHeight * j + titleSquareHeight / 2 + textHeight / 2
	//         );
	//       }
	//       // if (j === 0) {
	//       //   let x = titleSquareWidth * i;
	//       //   let y = titleSquareHeight * j;
	//       //   ctx.beginPath();
	//       //   ctx.rect(x + 2, y + 2, titleSquareWidth - 5, titleSquareHeight - 5);
	//       //   ctx.fillStyle = "darkblue";
	//       //   ctx.fill();
	//       //   ctx.strokeStyle = "black";
	//       //   ctx.stroke();
	//       //   ctx.closePath();
	//       // } else {
	//       //   let x = squareSizeWidth * i;
	//       //   let y = squareSizeHeight * j;
	//       //   ctx.beginPath();
	//       //   ctx.rect(x + 2, y + 2, squareSizeWidth - 5, squareSizeHeight - 5);
	//       //   ctx.fillStyle = "blue";
	//       //   ctx.fill();
	//       //   ctx.strokeStyle = "black";
	//       //   ctx.stroke();
	//       //   ctx.closePath();
	//       // }
	//     }
	//   }
	// };

	const mouseMoveHandler = (e) => {
		let relativeOffset = canvasRef.current.getBoundingClientRect();
		let relativeX = e.clientX - relativeOffset.left;
		let relativeY = e.clientY - relativeOffset.top;

		// console.log(relativeX, relativeY);

		const cnvs = canvasRef.current;
		const ctx = cnvs.getContext('2d');

		if (!showCanvas) {
			console.log('CANVAS', showCanvas);
			drawPlayboard(cnvs, ctx, { x: relativeX, y: relativeY }, showCanvas, quizzes, questionsBoardClickHandler);
		}
	};

	// initial drawing of the board, not populating any of the text
	// useEffect(() => {
	//   const cnvs = canvasRef.current;
	//   const ctx = cnvs.getContext("2d");

	//   drawPlayboard(
	//     cnvs,
	//     ctx,
	//     { x: 0, y: 0 },
	//     showCanvas,
	//     quizzes,
	//     questionsBoardClickHandler
	//   );
	//   return () => {};
	// });

	useEffect(() => {
		// const cnvs = canvasRef.current;
		// const ctx = cnvs.getContext("2d");
		let animationFrameId;
		let interval;

		const render = () => {
			// drawPlayboard(cnvs, ctx);
			if (canvasRef.current !== null) document.addEventListener('mousemove', mouseMoveHandler, false);
		};
		const draw = () => {
			interval = setInterval(() => {
				render();
			}, 10);
		};
		animationFrameId = requestAnimationFrame(draw);

		return () => {
			cancelAnimationFrame(animationFrameId);
			clearInterval(interval);
		};
	});

	const populateBoardText = () => {
		const cnvsText = canvasTextRef.current;
		const ctxText = cnvsText.getContext('2d');
		// console.log("topics " + quizzes[0].topic);
		if (quizzes.length !== 0) populateBoard(ctxText, quizzes);
	};

	useEffect(
		() => {
			populateBoardText();
			// return () => {};
		},
		[ quizzes ]
	);

	const displayQuestionAndAnswers = (quizId, questionId) => {
		// console.log("FILTERING");
		// console.log("QQ ID ", questionId);
		// console.log("picked ", pickedQuizId);
		// console.log("QQ ", allQuizQuestions);
		const cnvsQuestion = canvasQuizQuestion.current;
		const ctxQuestion = cnvsQuestion.getContext('2d');

		let filteredQuiz = allQuizQuestions.filter((quiz) => {
			return quiz[0] === quizId;
		});
		console.log('QUIZ ', filteredQuiz);

		ctxQuestion.clearRect(0, 0, ctxQuestion.canvas.width, ctxQuestion.canvas.height);

		ctxQuestion.font = '20px Ariel';
		ctxQuestion.fillStyle = 'red';

		if (filteredQuiz.length !== 0) {
			console.log('filtered ', filteredQuiz);
			console.log('selected question ', filteredQuiz[0][1][questionId].question);
			console.log('Answers', filteredQuiz[0][1][questionId].options);
			ctxQuestion.fillText(`${filteredQuiz[0][1][questionId].question}`, 100, 100);
			filteredQuiz[0][1][questionId].options.forEach((answer, index) => {
				ctxQuestion.fillText(`${answer}`, 125, 125 + index * 25);
			});
		}
	};

	useEffect(
		() => {
			if (pickedQuizId !== null) {
				displayQuestionAndAnswers(pickedQuizId, questionPicked);
			} else {
				console.log('not going to display question text');
			}

			// return () => {
			//   cleanup
			// }
		},
		[ pickedQuizId ]
	);

	return (
		<div>
			{/* {console.log(window.innerWidth)} */}
			<div
				style={{
					height: '750px',
					background: 'grey',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<canvas
					width={800}
					height={700}
					ref={canvasRef}
					style={{
						background: '#222',
						zIndex: '1',
						position: 'absolute'
					}}
				/>
				<canvas width={800} height={700} ref={canvasTextRef} style={{ zIndex: '10', position: 'absolute' }} />
				<canvas
					width={796}
					height={420}
					ref={canvasQuizQuestion}
					style={{
						background: 'lightblue',
						zIndex: '20',
						visibility: showCanvas ? 'visible' : 'hidden',
						position: 'relative',
						top: '-60px'
					}}
				/>
			</div>
		</div>
	);
};

export default QuizCanvas;
