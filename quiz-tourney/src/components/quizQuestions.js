/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuizQuestions } from "../actions/index";

const QuizQuestions = (props) => {
  const { pickedQuizId } = props;
  const [pickedAnswer, setPickedAnswer] = useState(null);

  const allQuizQuestions = useSelector(
    (state) => state.quizQuestions.quizQuestions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (pickedQuizId != null) dispatch(getAllQuizQuestions(pickedQuizId));
  }, [pickedQuizId]);

  return (
    <div>
      {console.log(pickedAnswer)}
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
