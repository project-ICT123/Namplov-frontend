import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Draggable from "react-draggable";
import Button from "../../components/button";

const listData = [
  "Accountant",
  "Actor",
  "Administrator",
  "Advertising Account Manager",
  "Architect",
  "Attorney",
  "Auditor",
  "Banker",
  "Biologist",
  "Biomedical Engineer",
  "Business Consultant",
  "Business Executive",
  "Chemical Engineer",
  "Chemist",
  "College Professor",
  "Community Health Worker",
  "Computer Analyst",
  "Construction Worker",
  "Cook",
  "Corporate Finance Attorney",
  "Corporate Trainer",
  "Corrections Officer",
  "Crafts Worker",
  "Credit Investigator",
  "Data Analyst",
  "Dentist",
  "Designer",
  "Detective",
  "Economics Analyst",
  "Economist",
  "Education Consultant",
  "Electronics Expert",
  "Employment Specialist",
  "Engineer",
  "English Teacher",
  "Environmental Engineer",
  "Farmer",
  "Financial Advisor",
  "Financial Planner",
  "Fine Artist",
  "Franchise Owner",
  "Funeral Director",
  "General Contractor",
  "Government Employee",
  "Guard",
  "Human Resources Professional",
  "Insurance Agent",
  "International Sales and Marketing",
  "Investigator",
  "Judge",
  "Labor Relations Officer",
  "Law Enforcement Officer",
  "Legal Assistant",
  "Logistics Consultant",
  "Management Consultant",
  "Marketing Manager",
  "Media Planner/Buyer",
  "Medical Assistant",
  "Medical Technician",
  "Military Officer",
  "Mortgage Broker",
  "Network Integration Specialist",
  "Nurse",
  "Office Manager",
  "Park Ranger",
  "Personnel Manager",
  "Pharmaceutical Sales Manager",
  "Pharmacist",
  "Photographer",
  "Physician",
  "Probation Officer",
  "Program Designer",
  "Project Manager",
  "Psychiatrist",
  "Psychologist",
  "Public Official",
  "Public Relations Specialist",
  "Purchasing Agent",
  "Real Estate Agent",
  "Researcher",
  "Sales Manager",
  "Salesperson",
  "School Principal",
  "Science Teacher",
  "Scientist",
  "Security Guard",
  "Social Science Teacher",
  "Social Scientist",
  "Social Worker",
  "Steelworker",
  "Stockbroker",
  "Supervisor",
  "Technical Trainer",
  "Telecommunications Worker",
  "Trades Teacher - High School",
];

function Moremajor() {
  const navigate = useNavigate();
  const dragStartPosition = useRef({ x: 0, y: 0 });

  const handleDragStart = (e, data) => {
    dragStartPosition.current = { x: data.x, y: data.y };
  };

  const handleDragStop = (e, data) => {
    const { x, y } = dragStartPosition.current;
    const distanceMoved = Math.sqrt((data.x - x) ** 2 + (data.y - y) ** 2);

    if (distanceMoved < 5) {
      navigate("/major_test/view_result/result/more_major_that_fit_you");
    }
  };

  return (
    <main className="sm573:px-8 px-3 ">
      <header className="relative">
        <div className="absolute md:top-[-1rem] top-[-6rem] left-[4px] md:left-0">
          <Button label="Go Back" onClick={() => navigate("/major_test/view_result/result")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-4 mr-[5px] mt-[-1px]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Go Back
          </Button>
        </div>

        <div className="mt-[2rem]">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl md:mt-0 mt-[6rem] font-semibold text-logocolor md:mb-5 sm:mb-3">
            More Major That Fit You
          </h1>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray ">
            based on your Personality Types
          </p>
        </div>
      </header>

      <div className="flex">
        <section className=" mx-auto container ">
            <nav className="p-5 bg-white rounded-2xl mt-[2rem] lgm:mt-[2.5rem] text-left">
                <p className="hidden sm573:block text-sm font-bold sm:text-base md:text-lg text-logocolor ">
                    Your Personality Type : <span className="text-pink font-bold"> ENTJ </span> <span className="text-gray font-normal "> &quot; Insightful Expeditors &quot;</span> 
                </p>

                <p className="sm573:hidden block text-sm font-bold sm:text-base md:text-lg text-logocolor mb-2">
                    Your Personality Type : 
                </p>

                <p className="sm573:hidden block text-sm font-bold sm:text-base md:text-lg text-black ">
                    <span className="text-pink font-bold"> ENTJ </span> <span className='text-gray font-normal' > &quot; Insightful Expeditors &quot;</span> 
                </p>
            </nav>

          <nav className="mb-[2rem] p-5 bg-white rounded-2xl mt-[1rem] text-left">

            <p className="text-sm font-bold sm:text-base md:text-lg text-logocolor mb-3">Careers to Consider :</p>
            <div className="sm375:mb-0 mb-2 item-start">
              <ul className="list-disc list-inside text-gray text-sm sm:text-base md:text-lg sm425:grid grid-cols-2 lgm:grid-cols-3 lgs:grid-cols-4 lgl:grid-cols-5 gap-[8px]">
                {listData.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </ul>
            </div>
          </nav>
        </section>

        <Draggable onStart={handleDragStart} onStop={handleDragStop}>
          <nav className="flex justify-end lgm:mt-[13.5rem] h-[5rem] fixed bottom-[2rem] right-[2rem] items-center justify-center z-50">
            <Button label="See More Major">
              <div className="flex flex-row items-center justify-center sm879:w-[10rem]">
               
                    Strengths and Weaknesses
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>

                
              </div>
            </Button>
          </nav>
        </Draggable>
      </div>
    </main>
  );
}

export default Moremajor;