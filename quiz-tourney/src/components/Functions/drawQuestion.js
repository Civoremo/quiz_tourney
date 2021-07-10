/** @format */

export const drawQuestion = (
  ctx,
  answerGrid,
  quizId,
  questionIndex,
  allQuizQuestions
) => {
  let filteredQuiz = allQuizQuestions.filter(quiz => {
    return quiz[0] === quizId;
  });
  // console.log("QUESTION DRAW", filteredQuiz, quizId, questionIndex);
  // console.log("QUIZ ID", filteredQuiz[0][0]);
  // console.log("QUIZ Qs", filteredQuiz[0][1][questionIndex]);
  const lineLengthMax = 600;
  const answerLengthMax = 250;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.font = "14pt Arial";
  ctx.fillStyle = "#fff";

  if (filteredQuiz.length !== 0) {
    let question = filteredQuiz[0][1][questionIndex].question;
    ctx.textAlign = "center";

    if (ctx.measureText(question).width > lineLengthMax) {
      let difference = ctx.measureText(question).width - lineLengthMax;
      let diffCharCount = Math.ceil(difference / 9);

      let startSplitIndex = question.length - diffCharCount;

      while (question.charAt(startSplitIndex) !== " ") {
        // console.log(question.charAt(startSplitIndex), startSplitIndex);
        startSplitIndex--;
      }

      let splitQuestion = [];
      splitQuestion.push(question.slice(0, startSplitIndex));
      splitQuestion.push(question.slice(-(question.length - startSplitIndex)));

      for (let part in splitQuestion) {
        ctx.fillText(`${splitQuestion[part]}`, 400, 100 + part * 25);
      }
    } else {
      ctx.fillText(`${question}`, 400, 100);
    }

    filteredQuiz[0][1][questionIndex].options.forEach((answer, index) => {
      // console.log(answer);
      if (index < 2) {
        ctx.beginPath();
        ctx.rect(answerGrid[index].xStart, answerGrid[index].yStart, 275, 50);
        ctx.fillStyle = "#0c76cc";
        ctx.fill();
        ctx.closePath();
      } else {
        ctx.beginPath();
        ctx.rect(answerGrid[index].xStart, answerGrid[index].yStart, 275, 50);
        ctx.fillStyle = "#0c76cc";
        ctx.fill();
        ctx.closePath();
      }

      if (ctx.measureText(answer).width > answerLengthMax) {
        console.log("ANSWER", answer, ctx.measureText(answer).width);
        let difference = ctx.measureText(answer).width - answerLengthMax;
        let diffCharCount = Math.ceil(difference / 9);

        let startSplitIndex = answer.length - diffCharCount;

        while (answer.charAt(startSplitIndex) !== " ") {
          startSplitIndex--;
          if (startSplitIndex === 0 && answer.charAt(startSplitIndex) !== " ") {
            console.log("split not found in answer");
            return;
          }
        }

        let splitAnswer = [];
        splitAnswer.push(answer.slice(0, startSplitIndex));
        splitAnswer.push(answer.slice(-(answer.length - startSplitIndex - 1)));

        if (index < 2) {
          for (let part in splitAnswer) {
            ctx.font = "12pt Arial";
            ctx.fillStyle = "#fff";
            ctx.textAlign = "start";
            ctx.fillText(
              `${splitAnswer[part]}`,
              125,
              246 + index * 70 + 20 * part
            );
          }
        } else {
          for (let part in splitAnswer) {
            ctx.font = "12pt Arial";
            ctx.fillStyle = "#fff";
            ctx.textAlign = "start";
            ctx.fillText(
              `${splitAnswer[part]}`,
              450,
              246 + (index % 2) * 70 + 20 * part
            );
          }
        }
      } else {
        if (index < 2) {
          ctx.font = "14pt Arial";
          ctx.fillStyle = "#fff";
          ctx.textAlign = "start";
          ctx.fillText(`${answer}`, 125, 258 + index * 70);
        } else {
          ctx.font = "14pt Arial";
          ctx.fillStyle = "#fff";
          ctx.textAlign = "start";
          ctx.fillText(`${answer}`, 450, 258 + (index % 2) * 70);
        }
      }

      // if (index < 2) {
      //   ctx.beginPath();
      //   ctx.rect(answerGrid[index].xStart, answerGrid[index].yStart, 275, 50);
      //   ctx.fillStyle = "#0c76cc";
      //   ctx.fill();
      //   ctx.closePath();
      //   ctx.fillStyle = "#fff";
      //   ctx.textAlign = "start";
      //   ctx.fillText(`${answer}`, 125, 258 + index * 70);
      // } else {
      //   ctx.beginPath();
      //   ctx.rect(answerGrid[index].xStart, answerGrid[index].yStart, 275, 50);
      //   ctx.fillStyle = "#0c76cc";
      //   ctx.fill();
      //   ctx.closePath();
      //   ctx.fillStyle = "#fff";
      //   ctx.textAlign = "start";
      //   ctx.fillText(`${answer}`, 450, 258 + (index % 2) * 70);
      // }
    });
  }
};
