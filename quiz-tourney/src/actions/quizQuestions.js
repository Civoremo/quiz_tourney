/** @format */

import axios from "axios";

export const GET_QUIZ_QUESTIONS_START = "GET_QUIZ_QUESTIONS_START";
export const GET_QUIZ_QUESTIONS_SUCCESS = "GET_QUIZ_QUESTIONS_SUCCESS";
export const GET_QUIZ_QUESTIONS_FAILURE = "GET_QUIZ_QUESTIONS_FAILURE";

let urlApi = "https://lambda-study-app.herokuapp.com";

export const getAllQuizQuestions = (quizId) => (dispatch) => {
  dispatch({ type: GET_QUIZ_QUESTIONS_START });

  axios({
    method: "get",
    url: `${urlApi}/api/quizzes/${quizId}/questions`,
  })
    .then((res) => {
      dispatch({ type: GET_QUIZ_QUESTIONS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_QUIZ_QUESTIONS_FAILURE, payload: err });
    });
};
