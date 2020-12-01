/** @format */

import {
  GET_QUIZZES_START,
  GET_QUIZZES_SUCCESS,
  GET_QUIZZES_FAILURE,
} from "../actions/index";

const initialState = {
  quizzes: [],
  fetchingQuizzes: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZZES_START:
      return {
        ...state,
        fetchingQuizzes: true,
        error: null,
      };
    case GET_QUIZZES_SUCCESS:
      return {
        ...state,
        quizzes: action.payload,
        fetchingQuizzes: false,
      };
    case GET_QUIZZES_FAILURE:
      return {
        ...state,
        fetchingQuizzes: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
