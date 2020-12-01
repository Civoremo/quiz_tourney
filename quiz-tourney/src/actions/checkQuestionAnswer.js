/** @format */

import axios from "axios";

export const GET_CHECK_ANSWER_TO_QUESTION_START =
  "GET_CHECK_ANSWER_TO_QUESTION_START";
export const GET_CHECK_ANSWER_TO_QUESTION_SUCCESS =
  "GET_CHECK_ANSWER_TO_QUESTION_SUCCESS";
export const GET_CHECK_ANSWER_TO_QUESTION_FAILURE =
  "GET_CHECK_ANSWER_TO_QUESTION_FAILURE";

let urlApi = "https://lambda-study-app.herokuapp.com";

export const checkAnswerToQuestion = (quizId, questionId, responseId) => (
  dispatch
) => {
  dispatch({ type: GET_CHECK_ANSWER_TO_QUESTION_START });
  console.log(quizId + " " + questionId + " " + responseId);

  axios({
    method: "get",
    url: `${urlApi}/api/quizzes/${quizId}/questions/${questionId}/response`,
    params: { option: responseId + 1 },
  })
    .then((res) => {
      console.log("after request " + res.data.correct);
      dispatch({
        type: GET_CHECK_ANSWER_TO_QUESTION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_CHECK_ANSWER_TO_QUESTION_FAILURE, payload: err });
    });
};
