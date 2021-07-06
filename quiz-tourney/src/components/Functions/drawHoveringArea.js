/** @format */

const columns = 6;
const rows = 6;

export const drawHoveringArea = (cnvs, ctx, mousePosition, playGrid) => {
  let sqrSizeWidth = ctx.canvas.width / columns;
  let sqrSizeHeight = 500 / rows;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.lineWidth = 3;

  if (
    mousePosition.x > -10 &&
    mousePosition.x < 810 &&
    mousePosition.y > 85 &&
    mousePosition.y < 500
  ) {
    // console.log("position", mousePosition);
    // console.log(playGrid);
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const x = sqrSizeWidth * i;
        const y = sqrSizeHeight * j;

        // console.log("grip position", { x, y });
        if (mousePosition.x > x && mousePosition.x < x + sqrSizeWidth - 5) {
          if (mousePosition.y > y && mousePosition.y < y + sqrSizeHeight - 5) {
            // console.log(i * j, j);
            ctx.beginPath();
            ctx.rect(x + 2, y + 2, sqrSizeWidth - 5, sqrSizeHeight - 5);
            ctx.strokeStyle = "yellow";
            ctx.stroke();
          }
        }
      }
    }
    // ctx.stroke();
    ctx.closePath();
  }
};
