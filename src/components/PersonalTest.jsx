import React from 'react';
import profile from "../image/profile.png";

function PersonalTest() {
  return (
    <div className="bg-white shadow-lg lg:h-[260px] rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center hover:shadow-2xl cursor-pointer transition-all duration-300">
      <img src={profile} alt="Personality Test" className="w-16 sm:w-20" />
      <h3 className="text-blue-900 font-semibold text-sm sm:text-base mt-4 text-center">
        Personality Test
      </h3>
    </div>
  );
}

export default PersonalTest;