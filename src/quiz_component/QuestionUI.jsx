import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Import React Icon
import cloud1 from "./image/cloud-rbg.png";
import cloud2 from "./image/cloudRight_rbg.png";

function QuestionUI({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-200 overflow-hidden">
      {/* Cloud decorations */}
      <img
        src={cloud1}
        alt="Cloud Top Left"
        className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-bounce"
      />
      <img
        src={cloud2}
        alt="Cloud Top Right"
        className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-bounce"
      />
      <img
        src={cloud1}
        alt="Cloud Bottom Left"
        className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-bounce"
      />
      <img
        src={cloud2}
        alt="Cloud Bottom Right"
        className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-bounce"
      />

      {/* Quiz Card */}
      <div className="bg-white shadow-2xl rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl text-center relative z-10">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 sm:mb-6 tracking-wide drop-shadow-lg">
          MAJOR RECOMMEND
        </h1>

        {/* Question Icon */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="bg-[#d129f3] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg">
            <FaQuestionCircle className="text-white text-3xl sm:text-4xl md:text-5xl" />
          </div>
        </div>

        {/* Question Box */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-6 sm:mb-8 border-4 border-gray-300">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            {questions[currentQuestion].question}
          </p>
        </div>

        {/* Answer Buttons */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {questions[currentQuestion].answers.map((answer, i) => (
            <button
              key={i}
              className="px-4 py-2 sm:px-6 sm:py-4 bg-white text-black font-bold rounded-lg border-2 border-black shadow-md hover:bg-gray-200 transition transform hover:scale-105"
            >
              {answer}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 sm:mt-8">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition transform hover:scale-105"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionUI;