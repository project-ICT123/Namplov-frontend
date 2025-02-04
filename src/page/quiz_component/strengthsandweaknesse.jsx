import React from "react";
import s from "../../image/1.png"
import w from "../../image/2.png"

function Strengthsandweaknesses({ typeqcm, destination = "/all_question"  }) {


  const items = [
    "Good listener",
    "Communication",
    "Insightful"
  ];

  return (
    <main className=" flex justify-center items-center ">
      {/* Container */}
      <nav className="w-full max-w-4xl p-5 md:p-12 bg-white rounded-2xl shadow">
        {/* Title */}
        <div> 
            <h1 className="text-center text-lg sm375:text-xl sm:text-2xl md:text-3xl font-semibold font-bold text-logocolor sm375:mb-3 mb-1">
              Strengths and Weaknesses
            </h1>
            <p className="text-center text-sm sm:text-base md:text-lg text-gray mb-3">
              Base on your Personality Type , <br/> This is your Strengths (S) and Weaknesses (W)
            </p>
        </div>
        <div className="max-w-md mx-auto p-3 bg-bgcolor border-2 border-pink rounded-lg shadow relative text-left ">
          <h2 className="text-xl font-bold text-pink text-center">INFJ</h2>

          {/* Positive Traits */}
          <div className="mt-4">
            <ul className="text-gray space-y-1">
              {items.map((item, index) => (
                <li key={index} className="flex">
                  <img src={s} alt="Checkmark" className="w-5 h-5 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-logocolor my-3"></div>

          {/* Negative Traits */}
          <div>
            <ul className="text-gray space-y-1">
              {items.map((item, index) => (
                <li key={index} className="flex">
                  <img src={w} alt="Checkmark" className="w-5 h-5 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </main>

  );
}

export default Strengthsandweaknesses;
