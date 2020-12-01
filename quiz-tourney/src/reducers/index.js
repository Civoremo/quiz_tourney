/** @format */

import { combineReducers } from "redux";

import quizzes from "./quizzes";
import quizQuestions from "./quizQuestions";

export default combineReducers({
  quizzes,
  quizQuestions,
});
