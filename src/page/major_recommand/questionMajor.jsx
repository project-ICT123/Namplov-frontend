import React from "react";

import QuestionUI from "../quiz_component/QuestionUI";


const questions = [
  { question: "What is the tallest mountain in the world?", answers: ["Mount Everest", "Mount Kilimanjaro"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "What is the tallest mountain in the world?", answers: ["Mount Everest", "Mount Kilimanjaro"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  { question: "Which is the largest ocean?", answers: ["Pacific Ocean", "Atlantic Ocean"] },
  
];

function QuestionMajor() {
  
  return(

    <QuestionUI questions={questions}/>

  );
}

export default QuestionMajor;