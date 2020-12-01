/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuizQuestions } from "../actions/index";
import { checkAnswerToQuestion } from "../actions/checkQuestionAnswer";

const QuizQuestions = (props) => {
  const { pickedQuizId } = props;
  const [pickedAnswer, setPickedAnswer] = useState(null);

  const allQuizQuestions = useSelector(
    (state) => state.quizQuestions.quizQuestions
  );
  const answerChecked = useSelector(
    (state) => state.answerResponse.answerResponse
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (pickedQuizId != null) dispatch(getAllQuizQuestions(pickedQuizId));
  }, [pickedQuizId]);

  useEffect(() => {
    if (pickedAnswer != null)
      dispatch(
        checkAnswerToQuestion(pickedAnswer[0], pickedAnswer[1], pickedAnswer[2])
      );
    // console.log("answer response" + answerChecked);
  }, [pickedAnswer]);

  return (
    <div>
      {console.log(pickedAnswer)}
      {console.log("returned answer " + answerChecked)}
      {allQuizQuestions.map((question) => {
        return (
          <div key={question.id}>
            <div>Q: {question.question}</div>
            {question.options.map((answer, index) => {
              return (
                <div key={index}>
                  <div>
                    A: {answer}{" "}
                    <button
                      onClick={() =>
                        setPickedAnswer([pickedQuizId, question.id, index])
                      }
                    >
                      Pick
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default QuizQuestions;
