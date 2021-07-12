/** @format */

export const drawMainCanvasText = ctx => {
  console.log("draw main canvas text");
  ctx.clearRect(0, 0, 800, 700);

  ctx.font = "bold 30px Arial";
  ctx.fillStyle = "salmon";
  ctx.textAlign = "center";

  ctx.fillText("Quiz Bliss Tournament", 400, 200);

  ctx.font = "bold 24px Arial";
  ctx.fillStyle = "lightblue";
  ctx.beginPath();
  ctx.rect(300, 350, 200, 75);
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "darkblue";
  ctx.fillText("Single Player", 400, 400);

  //   ctx.fillStyle = "lightblue";
  //   ctx.beginPath();
  //   ctx.rect(300, 450, 200, 75);
  //   ctx.fill();
  //   ctx.closePath();

  //   ctx.fillStyle = "darkblue";
  //   ctx.fillText("Multi Player", 400, 500);
};
