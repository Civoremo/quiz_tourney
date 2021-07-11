/** @format */

export const drawPlayerText = (ctx, playerInfo) => {
  console.log("player info and text is drawn here");

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.textAlign = "center";

  for (let index in playerInfo) {
    ctx.font = "14px Arial";
    ctx.fillStyle = "whitesmoke";
    // player name
    ctx.fillText(`${playerInfo[index].playerName}`, 185 + index * 215, 180);

    ctx.font = "bold 18px Trebuchet MS";
    ctx.fillStyle = "black";
    //player score
    ctx.fillText(`${playerInfo[index].playerScore}`, 183 + index * 215, 150);
  }
};
