/** @format */

export const answerHoverArea = (cnvs, ctx, mousePosition, answerGrid) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.lineWidth = 3;
  //   console.log(mousePosition);

  for (let pos in answerGrid) {
    if (
      mousePosition.x > answerGrid[pos].xStart &&
      mousePosition.x < answerGrid[pos].xEnd &&
      mousePosition.y > answerGrid[pos].yStart &&
      mousePosition.y < answerGrid[pos].yEnd
    ) {
      ctx.beginPath();
      ctx.rect(answerGrid[pos].xStart, answerGrid[pos].yStart, 275, 50);
      ctx.strokeStyle = "yellow";
      ctx.stroke();
    }
  }
  ctx.closePath();
};
