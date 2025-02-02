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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>
          </Button>
        </div>
      </nav>
    </main>

  );
}

export default StartQuiz;
