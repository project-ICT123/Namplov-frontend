import React from 'react';
import scholar from "../image/scholar.png";

function Scholarship() {
  return (
    <div className="bg-white shadow-lg lg:mt-10 lg:h-[260px] rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center hover:shadow-2xl cursor-pointer transition-all duration-300">
      <img src={scholar} alt="Scholarship" className="w-16 sm:w-20" />
      <h3 className="text-blue-900 font-semibold mt-4 text-sm sm:text-base text-center">
        Scholarship
      </h3>
    </div>
  );
}

export default Scholarship;