/** @format */

import axios from "axios";

export const GET_QUIZZES_START = "GET_QUIZZES_START";
export const GET_QUIZZES_SUCCESS = "GET_QUIZZES_SUCCESS";
export const GET_QUIZZES_FAILURE = "GET_QUIZZESz_FAILURE";

let urlAPI = "https://lambda-study-app.herokuapp.com";

export const getAllQuizzes = () => (dispatch) => {
  dispatch({ type: GET_QUIZZES_START });

  axios({
    method: "get",
    // url: `${process.env.REACT_APP_QUIZZ_API_URL}/api/quizzes`,
    url: `${urlAPI}/api/quizzes`,
  })
    .then((res) => {
      const sortedRes = res.data.filter((quiz) => {
        if (quiz.topic === "Jeopardy") {
          return quiz;
        } else {
          return null;
        }
      });
      dispatch({ type: GET_QUIZZES_SUCCESS, payload: sortedRes });
    })
    .catch((err) => {
      dispatch({ type: GET_QUIZZES_FAILURE, payload: err });
    });
};
