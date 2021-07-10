/** @format */

import axios from "axios";

export const GET_QUIZ_QUESTIONS_START = "GET_QUIZ_QUESTIONS_START";
export const GET_QUIZ_QUESTIONS_SUCCESS = "GET_QUIZ_QUESTIONS_SUCCESS";
export const GET_QUIZ_QUESTIONS_FAILURE = "GET_QUIZ_QUESTIONS_FAILURE";

// let urlApi = "https://lambda-study-app.herokuapp.com"; // deprecated
const urlApi = process.env.REACT_APP_QUIZ_API;

export const getAllQuizQuestions = quizId => dispatch => {
  dispatch({ type: GET_QUIZ_QUESTIONS_START });

  axios({
    method: "get",
    url: `${urlApi}/api/quizzes/${quizId}/questions`,
  })
    .then(res => {
      let tempPositionsArray = [];
      while (tempPositionsArray.length < 5) {
        let selectedPosition = Math.floor(Math.random() * res.data.length);
        if (!tempPositionsArray.includes(selectedPosition)) {
          tempPositionsArray.push(selectedPosition);
        }
      }

      let newlyOrderedQuestionsArray = [];
      for (let i = 0; i < 5; i++) {
        newlyOrderedQuestionsArray[i] = res.data[tempPositionsArray[i]];
      }

      // dispatch({ type: GET_QUIZ_QUESTIONS_SUCCESS, payload: res.data });
      dispatch({
        type: GET_QUIZ_QUESTIONS_SUCCESS,
        payload: [quizId, newlyOrderedQuestionsArray],
      });
    })
    .catch(err => {
      console.log("ACTION questions fetching error");
      dispatch({ type: GET_QUIZ_QUESTIONS_FAILURE, payload: err });
    });
};
