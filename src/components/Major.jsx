import React from 'react';
import fire from "../image/fire.png";
import major from "../image/major.png";

function Major() {
  return (
    <div className="bg-white lg:h-[260px] lg:mt-10 shadow-lg rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center hover:shadow-2xl cursor-pointer transition-all duration-300">
      <div className="relative flex items-center justify-center">
        <img src={major} alt="Major" className="w-16 sm:w-20" />
        <img
          src={fire}
          alt="Fire"
          className="absolute -top-2 -right-2 w-5 sm:w-6"
        />
      </div>
      <h3 className="text-blue-900 font-semibold mt-4 text-sm sm:text-base text-center">
        Major Recommend
      </h3>
    </div>
  );
}

export default Major;