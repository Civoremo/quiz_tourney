/** @format */
const columns = 6;
const rows = 6;

export const populateBoard = (ctxText, quizzes, playGrid) => {
  let titleSquareWidth = ctxText.canvas.width / columns;
  let titleSquareHeight = 500 / rows;
  let pointsValue = 0;
  ctxText.clearRect(0, 0, ctxText.canvas.width, ctxText.canvas.height);
  ctxText.linewidth = 1;
  let squareCount = 0;

  for (let i = 0; i < rows; i++) {
    pointsValue = 0;
    for (let j = 0; j < columns; j++) {
      if (j === 0) {
        let linesOfText = quizzes[i].title.split(" ");
        let titleHeight = 18;

        ctxText.font = "18px Arial";
        ctxText.fillStyle = "whitesmoke";

        // TITLE text
        // if title contains multiple words; center the individual words horizontally and vertically
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
        squareCount++;
        // console.log(playGrid[squareCount]);

        if (!playGrid[squareCount - 1].selected) {
          pointsValue += 200;
          ctxText.font = "25px Arial";
          ctxText.fillStyle = "whitesmoke";
          let textHeight =
            ctxText.measureText(pointsValue).actualBoundingBoxAscent +
            ctxText.measureText(pointsValue).actualBoundingBoxDescent;
          // Center the points value text
          ctxText.fillText(
            `$${pointsValue}`,
            titleSquareWidth * i -
              5 +
              titleSquareWidth / 2 -
              ctxText.measureText(pointsValue).width / 2,
            titleSquareHeight * j + titleSquareHeight / 2 + textHeight / 2
          );
        } else {
          //   ctxText.fillText("?");
        }
      }
    }
  }
};
