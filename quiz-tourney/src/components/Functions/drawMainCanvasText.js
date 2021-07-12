/** @format */

export const drawMainCanvasText = ctx => {
  console.log("draw main canvas text");
  ctx.clearRect(0, 0, 800, 700);

  ctx.font = "30px Arial";
  ctx.fillStyle = "#222";
  ctx.textAlign = "center";

  ctx.fillText("Quiz Bliss", 400, 200);

  ctx.fillStyle = "lightblue";
  ctx.beginPath();
  ctx.rect(300, 350, 200, 100);
  ctx.fill();
  ctx.closePath();
};
