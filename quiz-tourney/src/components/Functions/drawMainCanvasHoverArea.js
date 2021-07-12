/** @format */

export const drawMainCanvasHoverArea = (ctx, mousePosition) => {
  console.log(mousePosition);
  ctx.clearRect(0, 0, 800, 700);
  if (
    mousePosition.x > 300 &&
    mousePosition.x < 500 &&
    mousePosition.y > 350 &&
    mousePosition.y < 425
  ) {
    ctx.beginPath();
    ctx.rect(300, 350, 200, 75);
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
  }
};
