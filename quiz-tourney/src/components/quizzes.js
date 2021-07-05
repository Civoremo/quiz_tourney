/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuizzes } from "../actions/index";

import QuizQuestions from "./quizQuestions";

const Quizzes = props => {
  const allQuizzes = useSelector(state => state.quizzes.quizzes);
  const dispatch = useDispatch();

  const [picks, setPicks] = useState([]);
  const [pickedArrayOrder, setPickedArrayOrder] = useState([]);
  const [pickedQuizId, setPickedQuizId] = useState(null);

  function randomPicks() {
    let tempNumArray = [];
    if (allQuizzes.length > 0) {
      while (tempNumArray.length < 6) {
        let num = Math.floor(Math.random() * allQuizzes.length);
        if (!tempNumArray.includes(num)) {
          tempNumArray.push(num);
        }
      }
      setPicks(tempNumArray);
    }
  }

  function newlySortedQuizArray() {
    let tempArray = [];
    if (picks.length > 0 && allQuizzes.length > 0) {
      for (let i = 0; i < picks.length; i++) {
        tempArray.push(allQuizzes[picks[i]]);
      }
      setPickedArrayOrder(tempArray);
    }
  }

  useEffect(() => {
    dispatch(getAllQuizzes());
  }, [dispatch]);

  useEffect(() => {
    randomPicks();
  }, [allQuizzes]);

  useEffect(() => {
    newlySortedQuizArray();
  }, [picks]);

  return (
    <div>
      {/* <div style={{ float: "left", width: "50%", border: "1px solid green" }}>
        {allQuizzes.map((quiz, index) => {
          return (
            // <div key={quiz.id}>
            <div key={index}>
              <div>Index: {index}</div>
              <div>Quiz ID: {quiz.id}</div>
              <div>Title: {quiz.title}</div>
              <div>^v^v^v^v^v^v^v^</div>
            </div>
          );
        })}
        <div>
          <div>
            <div>------------------------</div>
            <div>
              Pick order: {picks[0]}, {picks[1]}, {picks[2]}, {picks[3]},
              {picks[4]}
            </div>
            <div>------------------------</div>
          </div>
          {pickedArrayOrder.map((quiz, index) => {
            return (
              <div key={quiz.id}>
                <div>Pick Number: {picks[index]}</div>
                <div>Quiz ID: {quiz.id}</div>
                <div>Title: {quiz.title}</div>
                <button onClick={() => setPickedQuizId(quiz.id)}>
                  Show Questions
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ float: "right", width: "50%", border: "1px solid orange" }}>
        questions displayed here
      </div> */}
      <QuizQuestions
        pickedQuizId={pickedQuizId}
        quizzes={pickedArrayOrder}
        setPickedQuizId={setPickedQuizId}
      />
    </div>
  );
};

export default Quizzes;
