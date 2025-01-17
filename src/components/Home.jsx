import React from "react";
import Major from "./Major";
import Scholarship from "./Scholarship";
import University from "./University";
import OnlineLearning from "./OnlineLearning";
import PersonalTest from "./PersonalTest";
import IQTest from "./IQTest";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="bg-blue-50 p-4 sm:p-6 h-full">
      {/* Row 1: Four Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[40px]">
        {/* Hello dev */}
        <div className="bg-gradient-to-r lg:h-[260px] p-6 sm:p-8 rounded-lg lg:mt-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
            Hello!
          </h1>
          <p className="text-lg sm:text-xl text-blue-800 mt-4">
            Find the Major  <br/> That Fits You Best.
          </p>
        </div>
        
        {/* Major */}
        <Link to="/major_test"><Major/></Link>
        

        {/* Scholarship */}
        <Scholarship/>

        {/* Universities */}
        <University/>
      </div>

      {/* Row 2: Three Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px]">
        {/* Online Learning */}
        <OnlineLearning/>

        {/* Personality Test */}
        <Link to="/personal_test"><PersonalTest/></Link>

        {/* IQ Test */}
        <IQTest/>
      </div>
    </div>
  );
};

export default HomePage;