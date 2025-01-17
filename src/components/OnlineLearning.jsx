import React from 'react'
import online from "../image/online_learn.png";

function OnlineLearning() {
  return (
    <div className="bg-white  shadow-lg lg:h-[260px] rounded-xl p-5 sm:p-6 flex flex-col items-center hover:shadow-2xl cursor-pointer transition-all duration-300">
          <img src={online} alt="Online Learning" className="w-16 sm:w-20 lg:mt-16" />
          <h3 className="text-blue-900 font-semibold mt-4 text-sm sm:text-base">
            Online Learning
          </h3>
    </div>
  )
}

export default OnlineLearning
