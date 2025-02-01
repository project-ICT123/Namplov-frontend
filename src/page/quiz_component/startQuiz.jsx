import React from "react";
import Button from "../../components/button"
import { useNavigate } from 'react-router-dom';

function StartQuiz({ typeqcm, destination = "/all_question"  }) {
  const navigate = useNavigate(); 

  return (
    <main className=" flex justify-center items-center p-6">
      {/* Container */}
      <nav className="w-full max-w-4xl p-8 md:p-12 bg-white rounded-2xl shadow">
        {/* Title */}
        <h1 className="text-center text-xl text-center text-base sm:text-xl font-semibold text-logocolor mb-6 sm:mb-8">
          &quot; There are a lot of 70 questions. Please take your time and don't rush
          to answer them &quot;
        </h1>
        {/* Subtitle */}
        <p className="text-center text-sm sm:text-base md:text-lg text-gray mb-3">
          As you answer the questions, DO NOT let your role and position at
          work/school or at home affect your choice. Your answer should reflect
          what you most feel is true to your personal preference and NOT what is
          expected of you.
        </p>
        {/* Button */}
        <div className=" flex justify-center items-center">
          <Button label="Continue" onClick={() => navigate(destination, { state: { typeqcm } })}>
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-[-1rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </nav>
    </main>

  );
}

export default StartQuiz;
