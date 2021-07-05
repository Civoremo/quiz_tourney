/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuizQuestions } from "../actions/index";
import { checkAnswerToQuestion } from "../actions/checkQuestionAnswer";

import QuizCanvas from "./quizCanvas";

const QuizQuestions = props => {
  const { pickedQuizId, quizzes, setPickedQuizId } = props;
  const [pickedAnswer, setPickedAnswer] = useState(null);
  const [viewedQuizQuestions, setViewedQuizQuestions] = useState([]);
  const [questionPicked, setQuestionPicked] = useState(null);

  const allQuizQuestions = useSelector(
    state => state.quizQuestions.quizQuestions
  );
  const answerChecked = useSelector(
    state => state.answerResponse.answerResponse
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("initial viewed " + viewedQuizQuestions.length);
    if (!viewedQuizQuestions.includes(pickedQuizId)) {
      if (viewedQuizQuestions[0] === null) {
        setViewedQuizQuestions([pickedQuizId]);
      } else {
        setViewedQuizQuestions([...viewedQuizQuestions, pickedQuizId]);
      }
    }

    if (pickedQuizId != null && !viewedQuizQuestions.includes(pickedQuizId)) {
      dispatch(getAllQuizQuestions(pickedQuizId));
      console.log("fetching questions");
    }
  }, [pickedQuizId]);

  // useEffect(() => {
  //   if (pickedQuizId != null && !viewedQuizQuestions.includes(pickedQuizId))
  //     dispatch(getAllQuizQuestions(pickedQuizId));
  // }, [pickedQuizId]);

  useEffect(() => {
    if (pickedAnswer != null) {
      // params: (quizId, questionsId, answerId)
      dispatch(
        checkAnswerToQuestion(pickedAnswer[0], pickedAnswer[1], pickedAnswer[2])
      );
      console.log("fetching answer response");
    }
  }, [pickedAnswer]);

  return (
    <div>
      <div>
        {/* {console.log("stored quiz questions")} */}
        {/* {console.log("allQuizzesQuestions ", allQuizQuestions)} */}
        {/* {allQuizQuestions.map((questions) => {
          if (questions[0] === pickedQuizId) {
            return (
              <div key={pickedQuizId}>
                {questions[1].map((question) => {
                  return (
                    <div key={question.id}>
                      <div>Q: {question.question}</div>
                      <div>
                        {question.options.map((answer, index) => {
                          return (
                            <div key={index}>
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
        })} */}
      </div>
      <div
      // style={{
      //   border: "2px solid red",
      //   margin: "auto",
      //   width: "800",
      //   height: "700",
      // }}
      >
        <QuizCanvas
          quizzes={quizzes}
          setPickedQuizId={setPickedQuizId}
          pickedQuizId={pickedQuizId}
          allQuizQuestions={allQuizQuestions}
          questionPicked={questionPicked}
          setQuestionPicked={setQuestionPicked}
          setPickedAnswer={setPickedAnswer}
          answerChecked={answerChecked}
        />
      </div>
    </div>
  );
};

export default QuizQuestions;
