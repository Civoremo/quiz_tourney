/** @format */

import { combineReducers } from "redux";

import quizzes from "./quizzes";
import quizQuestions from "./quizQuestions";
import answerResponse from "./checkQuestionAnswer";

export default combineReducers({
  quizzes,
  quizQuestions,
  answerResponse,
});
