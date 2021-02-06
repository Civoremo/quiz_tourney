/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuizQuestions } from "../actions/index";
import { checkAnswerToQuestion } from "../actions/checkQuestionAnswer";

import QuizCanvas from "./quizCanvas";

const QuizQuestions = (props) => {
  const { pickedQuizId, quizzes } = props;
  const [pickedAnswer, setPickedAnswer] = useState(null);
  const [viewedQuizQuestions, setViewedQuizQuestions] = useState([]);

  const allQuizQuestions = useSelector(
    (state) => state.quizQuestions.quizQuestions
  );
  const answerChecked = useSelector(
    (state) => state.answerResponse.answerResponse
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!viewedQuizQuestions.includes(pickedQuizId)) {
      setViewedQuizQuestions([...viewedQuizQuestions, pickedQuizId]);
    }
  }, [pickedQuizId]);

  useEffect(() => {
    if (pickedQuizId != null && !viewedQuizQuestions.includes(pickedQuizId))
      dispatch(getAllQuizQuestions(pickedQuizId));
  }, [pickedQuizId]);

  useEffect(() => {
    if (pickedAnswer != null)
      dispatch(
        checkAnswerToQuestion(pickedAnswer[0], pickedAnswer[1], pickedAnswer[2])
      );
  }, [pickedAnswer]);

  return (
    <div>
      <div>
        {console.log("stored quiz questions")}
        {console.log(allQuizQuestions)}
        {allQuizQuestions.map((questions) => {
          if (questions[0] === pickedQuizId) {
            console.log(questions);
            return (
              <div key={pickedQuizId}>
                {/* {console.log("quiz key " + pickedQuizId)} */}
                {questions[1].map((question) => {
                  return (
                    <div key={question.id}>
                      {/* {console.log("question key " + question.id)} */}
                      <div>Q: {question.question}</div>
                      <div>
                        {question.options.map((answer, index) => {
                          return (
                            <div key={index}>
                              {/* {console.log("answer key " + index)} */}
                              <div>A: {answer}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
      <div
      // style={{
      //   border: "2px solid red",
      //   margin: "auto",
      //   width: "800",
      //   height: "700",
      // }}
      >
        <QuizCanvas quizTopic={quizzes} />
      </div>
    </div>
  );
};

export default QuizQuestions;
