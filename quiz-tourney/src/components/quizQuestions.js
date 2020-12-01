/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuizQuestions } from "../actions/index";

const QuizQuestions = (props) => {
  const { pickedQuizId } = props;

  const allQuizQuestions = useSelector(
    (state) => state.quizQuestions.quizQuestions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (pickedQuizId != null) dispatch(getAllQuizQuestions(pickedQuizId));
  }, [pickedQuizId]);

  return (
    <div>
      {allQuizQuestions.map((question) => {
        return (
          <div key={question.id}>
            <div>Q: {question.question}</div>
            {question.options.map((answer, index) => {
              return (
                <div key={index}>
                  <div>A: {answer}</div>
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
