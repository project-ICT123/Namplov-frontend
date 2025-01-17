import React from "react";
import { Link } from "react-router-dom";

function StartQuiz({ typeqcm }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-300">
      {/* Container */}
      <div className="w-full max-w-4xl p-6 sm:p-8 md:p-12 bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-6 sm:mb-8">
          “There are a lot of 70 questions. Please take your time and don't rush
          to answer them”
        </h1>
        {/* Subtitle */}
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10">
          As you answer the questions, DO NOT let your role and position at
          work/school or at home affect your choice. Your answer should reflect
          what you most feel is true to your personal preference and NOT what is
          expected of you.
        </p>
        {/* Button */}
        <div className="text-center">
          <Link to={`all_question/${typeqcm}`}>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-700 text-white rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-blue-800 transition">
              Continue &gt;&gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;
