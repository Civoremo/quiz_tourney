/** @format */

export const drawQuestion = (
  cnvs,
  ctx,
  answerGrid,
  quizId,
  questionIndex,
  allQuizQuestions
) => {
  //   console.log("canvas", cnvs);
  //   const cnvs = questionCanvas;
  //   const ctx = cnvs.getContext("2d");

  let filteredQuiz = allQuizQuestions.filter(quiz => {
    return quiz[0] === quizId;
  });

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.font = "14pt Arial";
  ctx.fillStyle = "#fff";

  if (filteredQuiz.length !== 0) {
    console.log("answer GRID", answerGrid);
    // console.log("filtered ", filteredQuiz);
    // console.log(
    //   "selected question ",
    //   filteredQuiz[0][1][questionIndex].question
    // );
    // console.log("Answers", filteredQuiz[0][1][questionIndex].options);
    // console.log(
    //   "questionLength",
    //   ctx.measureText(filteredQuiz[0][1][questionIndex].question).width
    // );
    // console.log("Quiz selected", filteredQuiz);
    ctx.textAlign = "center";
    ctx.fillText(`${filteredQuiz[0][1][questionIndex].question}`, 400, 100);

    filteredQuiz[0][1][questionIndex].options.forEach((answer, index) => {
      // ctx.fillText(`${answer}`, 125, 125 + index * 25);
      //   console.log("Quiz Answers", answer);

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
