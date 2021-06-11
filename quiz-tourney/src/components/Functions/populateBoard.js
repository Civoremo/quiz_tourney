/** @format */
const columns = 6;
const rows = 6;

export const populateBoard = (ctxText, quizzes) => {
  let titleSquareWidth = ctxText.canvas.width / columns;
  let titleSquareHeight = 500 / rows;
  let pointsValue = 0;
  ctxText.clearRect(0, 0, ctxText.canvas.width, ctxText.canvas.height);
  ctxText.linewidth = 1;

  for (let i = 0; i < rows; i++) {
    // console.log(ctxText.measureText(quizzes[i].title).width);
    // console.log(ctxText.measureText(quizzes[i].title).height);
    pointsValue = 0;
    for (let j = 0; j < columns; j++) {
      if (j === 0) {
        let linesOfText = quizzes[i].title.split(" ");
        // console.log("lines ", linesOfText);
        // let titleHeight =
        //   ctxText.measureText(quizzes[i].title).actualBoundingBoxAscent +
        //   ctxText.measureText(quizzes[i].title).actualBoundingBoxDescent;
        // console.log("title height ", titleHeight);
        let titleHeight = 18;

        ctxText.font = "18px Arial";
        ctxText.fillStyle = "whitesmoke";

        if (linesOfText.length > 1) {
          for (let t = 0; t < linesOfText.length; t++) {
            ctxText.fillText(
              `${linesOfText[t]}`,
              titleSquareWidth * i +
                titleSquareWidth / 2 -
                ctxText.measureText(linesOfText[t]).width / 2,
              titleSquareHeight / linesOfText.length + titleHeight * t,
              115
            );
          }
        } else {
          ctxText.fillText(
            `${quizzes[i].title}`,
            titleSquareWidth * i +
              titleSquareWidth / 2 -
              ctxText.measureText(quizzes[i].title).width / 2,
            titleSquareHeight / 2 + titleHeight / 2,
            115
          );
        }
      } else {
        pointsValue += 200;
        ctxText.font = "25px Arial";
        ctxText.fillStyle = "whitesmoke";
        let textHeight =
          ctxText.measureText(pointsValue).actualBoundingBoxAscent +
          ctxText.measureText(pointsValue).actualBoundingBoxDescent;
        // console.log("height ", textHeight);
        ctxText.fillText(
          `$${pointsValue}`,
          titleSquareWidth * i -
            5 +
            titleSquareWidth / 2 -
            ctxText.measureText(pointsValue).width / 2,
          titleSquareHeight * j + titleSquareHeight / 2 + textHeight / 2
        );
      }
      // if (j === 0) {
      //   let x = titleSquareWidth * i;
      //   let y = titleSquareHeight * j;
      //   ctx.beginPath();
      //   ctx.rect(x + 2, y + 2, titleSquareWidth - 5, titleSquareHeight - 5);
      //   ctx.fillStyle = "darkblue";
      //   ctx.fill();
      //   ctx.strokeStyle = "black";
      //   ctx.stroke();
      //   ctx.closePath();
      // } else {
      //   let x = squareSizeWidth * i;
      //   let y = squareSizeHeight * j;
      //   ctx.beginPath();
      //   ctx.rect(x + 2, y + 2, squareSizeWidth - 5, squareSizeHeight - 5);
      //   ctx.fillStyle = "blue";
      //   ctx.fill();
      //   ctx.strokeStyle = "black";
      //   ctx.stroke();
      //   ctx.closePath();
      // }
    }
  }
};
