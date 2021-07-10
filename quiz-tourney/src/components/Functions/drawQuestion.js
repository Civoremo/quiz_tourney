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

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.font = "14pt Arial";
  ctx.fillStyle = "#fff";

  if (filteredQuiz.length !== 0) {
    ctx.textAlign = "center";
    ctx.fillText(`${filteredQuiz[0][1][questionIndex].question}`, 400, 100);

    filteredQuiz[0][1][questionIndex].options.forEach((answer, index) => {
      if (index < 2) {
        ctx.beginPath();
        ctx.rect(answerGrid[index].xStart, answerGrid[index].yStart, 275, 50);
        ctx.fillStyle = "#0c76cc";
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.textAlign = "start";
        ctx.fillText(`${answer}`, 125, 258 + index * 70);
      } else {
        ctx.beginPath();
        ctx.rect(answerGrid[index].xStart, answerGrid[index].yStart, 275, 50);
        ctx.fillStyle = "#0c76cc";
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.textAlign = "start";
        ctx.fillText(`${answer}`, 450, 258 + (index % 2) * 70);
      }
    });
  }
};
