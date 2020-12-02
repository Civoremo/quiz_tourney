/** @format */

import {
  GET_QUIZ_QUESTIONS_START,
  GET_QUIZ_QUESTIONS_SUCCESS,
  GET_QUIZ_QUESTIONS_FAILURE,
} from "../actions/index";

const initialState = {
  quizQuestions: [],
  fetchingQuizQuestions: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZ_QUESTIONS_START:
      return {
        ...state,
        fetchingQuizQuestions: true,
        error: null,
      };
    case GET_QUIZ_QUESTIONS_SUCCESS:
      let newQuizQuestions = {
        quizId: action.payload[0],
        questions: action.payload[1],
      };

      return {
        ...state,
        quizQuestions: [
          ...state.quizQuestions,
          [action.payload[0], action.payload[1]],
        ],
        fetchingQuizQuestions: false,
      };
    case GET_QUIZ_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingQuizQuestions: false,
      };
    default:
      return state;
  }
};
