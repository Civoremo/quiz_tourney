/** @format */

const columns = 6;
const rows = 6;

export const drawPlayboard = (
  cnvs,
  ctx,
  position = undefined,
  showCanvas,
  setShowCanvas,
  quizzes,
  questionsBoardClickHandler
) => {
  // console.log("drawing");
  //   console.log("position of mouse", position.x, position.y);
  console.log("position value", position);

  let squareSizeWidth = ctx.canvas.width / columns;
  let squareSizeHeight = 500 / rows;

  let titleSquareWidth = ctx.canvas.width / columns;
  let titleSquareHeight = 500 / rows;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.linewidth = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (j === 0) {
        let x = titleSquareWidth * i;
        let y = titleSquareHeight * j;

        ctx.beginPath();
        ctx.rect(x + 2, y + 2, titleSquareWidth - 5, titleSquareHeight - 5);
        ctx.fillStyle = "darkblue";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
      } else {
        let x = squareSizeWidth * i;
        let y = squareSizeHeight * j;

        ctx.beginPath();
        ctx.rect(x + 2, y + 2, squareSizeWidth - 5, squareSizeHeight - 5);
        ctx.fillStyle = "blue";
        ctx.fill();

        /*
        if (position !== undefined) {
          if (
            position.x > x + 2 &&
            position.x < x + squareSizeWidth - 5 &&
            position.y > y + 2 &&
            position.y < y + squareSizeHeight - 5 &&
            showCanvas === false
          ) {
            // console.log('HOVERING OVER QUIZ VALUE');
            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 2;
            // console.log("arrayLocation ", i, j);
            // console.log(quizzes[i]);
            // console.log("pickedQuizID ", pickedQuizId);
            if (quizzes[i] !== undefined) {
              // document.getElementById("quiz-selection-canvas").addEventListener(
              cnvs.addEventListener(
                "click",
                event => {
                  // event.preventDefault();
                  console.log("clicked at", position.x, position.y);
                  // console.log("CLICKED QUIZ VALUE", i, j);
                  // questionsBoardClickHandler(event, i, j);
                  // console.log("visibility: ", showCanvas);
                  // event.preventDefault();
                  // setPickedQuizId(quizzes[i].id);
                  // setQuestionPicked(j - 1);
                  // setShowCanvas(true);
                  // displayQuestionAndAnswers(quizzes[i].id);
                },
                false
              );
            } else {
              console.log(`quiz ${quizzes[i]} undefined`);
            }
          } else {
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
          }
        } else {
          console.log("positions not available");
        }
	*/
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
};
