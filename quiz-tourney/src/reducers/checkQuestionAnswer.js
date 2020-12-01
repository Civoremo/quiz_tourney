/** @format */

import {
  GET_CHECK_ANSWER_TO_QUESTION_START,
  GET_CHECK_ANSWER_TO_QUESTION_SUCCESS,
  GET_CHECK_ANSWER_TO_QUESTION_FAILURE,
} from "../actions/index";

const initialState = {
  answerResponse: [],
  fetchingAnswerReponse: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHECK_ANSWER_TO_QUESTION_START:
      return {
        ...state,
        fetchingAnswerReponse: true,
        error: null,
      };
    case GET_CHECK_ANSWER_TO_QUESTION_SUCCESS:
      return {
        ...state,
        answerResponse: action.payload,
        fetchingAnswerReponse: false,
      };
    case GET_CHECK_ANSWER_TO_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingAnswerReponse: false,
      };
    default:
      return state;
  }
};
