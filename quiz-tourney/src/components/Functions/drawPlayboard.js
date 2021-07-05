/** @format */

const columns = 6;
const rows = 6;

export const drawPlayboard = (cnvs, ctx) => {
  // console.log("drawing");
  //   console.log("position of mouse", position.x, position.y);

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

        ctx.stroke();
        ctx.closePath();
      }
    }
  }
};
