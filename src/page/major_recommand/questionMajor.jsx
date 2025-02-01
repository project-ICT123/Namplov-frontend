import React from "react";
import { useNavigate } from 'react-router-dom';

import QuestionUI from "../quiz_component/QuestionUI";
import Button from "../../components/button";


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
    const navigate = useNavigate(); 
  
  return(
    <main className='sm573:px-8 px-3 min-h-screen flex flex-col items-center justify-center'>
      <section className=' absolute top-[6rem] left-[2rem]'>
        <Button
          label="Go Back"
          onClick={() => navigate('/major_test')}
        >
          <svg className="w-5 h-5 mr-[5px] mb-[2px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          Go Back
        </Button>
      </section>
      <section className="flex flex-col items-center justify-center">
        <QuestionUI questions={questions}/>
      </section>
    </main>
  );
}

export default QuestionMajor;