/** @format */

export const drawPlayer = (ctx, numPlayers) => {
  const randomColor = () => {
    return `#` + Math.floor(Math.random() * 16777215).toString(16);
  };

  for (let i = 0; i < numPlayers; i++) {
    let rightShift = 95 + i * 215;

    const playerColors = {
      //   torso: "#24a4b5",
      //   head: "#bdbc9f",
      //   hair: "#bf2b11",
      //   arms: "#258794",
      torso: randomColor(),
      head: randomColor(),
      hair: randomColor(),
      arms: randomColor(),
    };

    //bottom of podium
    ctx.beginPath();
    ctx.fillStyle = "#1542ab";
    ctx.moveTo(50 + rightShift, 200);
    ctx.lineTo(35 + rightShift, 120);
    ctx.lineTo(140 + rightShift, 120);
    ctx.lineTo(125 + rightShift, 200);
    ctx.fill();
    ctx.closePath();

    //top of podium
    ctx.beginPath();
    ctx.fillStyle = "#17629c";
    ctx.moveTo(25 + rightShift, 120);
    ctx.lineTo(25 + rightShift, 120);
    ctx.lineTo(30 + rightShift, 100);
    ctx.lineTo(145 + rightShift, 100);
    ctx.lineTo(150 + rightShift, 120);
    ctx.fill();
    ctx.closePath();

    //scoreboard
    ctx.beginPath();
    ctx.fillStyle = "#b9c1c7";
    ctx.moveTo(50 + rightShift, 130);
    ctx.lineTo(125 + rightShift, 130);
    ctx.lineTo(125 + rightShift, 155);
    ctx.lineTo(50 + rightShift, 155);
    ctx.fill();
    ctx.closePath();

    //torso
    ctx.beginPath();
    ctx.fillStyle = playerColors.torso;
    ctx.moveTo(60 + rightShift, 100);
    ctx.lineTo(60 + rightShift, 60);
    ctx.lineTo(110 + rightShift, 60);
    ctx.lineTo(110 + rightShift, 100);
    ctx.fill();
    ctx.closePath();

    //head
    ctx.beginPath();
    ctx.fillStyle = "#bdbc9f";
    ctx.moveTo(85 + rightShift, 60);
    ctx.arc(85 + rightShift, 40, 20, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "#222";
    ctx.moveTo(93 + rightShift, 45);
    ctx.arc(85 + rightShift, 45, 9, 0, Math.PI, false);
    ctx.stroke();
    ctx.closePath();

    //eye left
    ctx.beginPath();
    ctx.fillStyle = "#222";
    ctx.moveTo(80 + rightShift, 40);
    ctx.arc(78 + rightShift, 35, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();

    //eye right
    ctx.beginPath();
    ctx.fillStyle = "#222";
    ctx.moveTo(98 + rightShift, 40);
    ctx.arc(90 + rightShift, 35, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();

    //hair
    ctx.beginPath();
    ctx.fillStyle = playerColors.hair;
    ctx.moveTo(65 + rightShift, 40);
    ctx.lineTo(55 + rightShift, 38);
    ctx.lineTo(68 + rightShift, 33);
    ctx.lineTo(50 + rightShift, 27);
    ctx.lineTo(70 + rightShift, 25);
    ctx.lineTo(65 + rightShift, 20);
    ctx.lineTo(75 + rightShift, 19);
    ctx.lineTo(75 + rightShift, 12);
    ctx.lineTo(80 + rightShift, 19);
    ctx.lineTo(88 + rightShift, 10);
    ctx.lineTo(92 + rightShift, 19);
    ctx.lineTo(100 + rightShift, 15);
    ctx.lineTo(102 + rightShift, 25);
    ctx.lineTo(110 + rightShift, 30);
    ctx.lineTo(105 + rightShift, 37);
    ctx.lineTo(117 + rightShift, 43);
    ctx.lineTo(104 + rightShift, 53);
    ctx.lineTo(100 + rightShift, 40);
    ctx.lineTo(94 + rightShift, 28);
    ctx.lineTo(88 + rightShift, 26);
    ctx.lineTo(77 + rightShift, 29);
    ctx.fill();
    ctx.closePath();

    //left arm
    ctx.beginPath();
    ctx.fillStyle = playerColors.arms;
    ctx.moveTo(60 + rightShift, 60);
    ctx.lineTo(50 + rightShift, 62);
    ctx.lineTo(45 + rightShift, 105);
    ctx.lineTo(55 + rightShift, 105);
    ctx.lineTo(63 + rightShift, 60);
    ctx.fill();
    ctx.closePath();

    //right arm
    ctx.beginPath();
    ctx.fillStyle = playerColors.arms;
    ctx.moveTo(110 + rightShift, 60);
    ctx.lineTo(120 + rightShift, 62);
    ctx.lineTo(125 + rightShift, 105);
    ctx.lineTo(115 + rightShift, 105);
    ctx.lineTo(107 + rightShift, 60);
    ctx.fill();
    ctx.closePath();
  }
};
