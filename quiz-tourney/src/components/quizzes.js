/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuizzes } from "../actions/index";

const Quizzes = (props) => {
  const allQuizzes = useSelector((state) => state.quizzes.quizzes);
  const dispatch = useDispatch();

  const [picks, setPicks] = useState([]);

  function randomPicks() {
    let tempNumArray = [];
    if (allQuizzes.length > 0) {
      while (tempNumArray.length < 5) {
        let num = Math.floor(Math.random() * (allQuizzes.length - 1) + 1);

        if (!tempNumArray.includes(num)) {
          tempNumArray.push(num);
        }
      }

      setPicks(tempNumArray);
    }
  }

  useEffect(() => {
    dispatch(getAllQuizzes());
    console.log("quizzes");
  }, [dispatch]);

  useEffect(() => {
    randomPicks();
    console.log("random");
  }, [allQuizzes]);

  return (
    <div>
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
        {picks.map((pick) => {
          return (
            <div key={pick}>
              <div>Pick Number: {pick}</div>
              <div>Quiz ID: {allQuizzes[pick].id}</div>
              <div>Title: {allQuizzes[pick].title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quizzes;
