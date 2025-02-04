import { useNavigate } from "react-router-dom";
import React, { useRef , useState } from "react";
import Draggable from "react-draggable";
import Button from "../../components/button";
import StartQuiz from "../quiz_component/strengthsandweaknesse";


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
      handleOpenModal();
    }
  };


const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
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
                    Your Personality Type : <span className="text-pink font-bold"> ENTJ </span> <span className="text-gray font-normal "> &quot;Insightful Expeditors&quot;</span> 
                </p>

                <p className="sm573:hidden block text-sm font-bold sm:text-base md:text-lg text-logocolor mb-2">
                    Your Personality Type : 
                </p>

                <p className="sm573:hidden block text-sm font-bold sm:text-base md:text-lg text-black ">
                    <span className="text-pink font-bold"> ENTJ </span> <span className='text-gray font-normal' > &quot;Insightful Expeditors&quot;</span> 
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
          <nav className="flex justify-end lgm:mt-[13.5rem] h-[5rem] fixed bottom-[2rem] right-[2rem] item-center justify-center">
            <Button label="See More Major" onClick={handleOpenModal}>
              <div className="flex flex-col items-center justify-center sm879:w-[10rem]">
                <p>Strengths</p>
                <div className="flex">
                  and Weaknesses
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4 mt-[2px] sm573:mt-[4px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </Button>
          </nav>
        </Draggable>
        {/* Modal - StartQuiz */}
      {isModalOpen && (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" p-[1rem] max-w-4xl flex relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" size-12 text-gray hover:text-pink absolute top-[-1.5rem] right-[-1rem] m-4 cursor-pointer"
                onClick={() => setIsModalOpen(false)} // Handle click to close modal
              >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
            <StartQuiz />
          </div>
        </div>
      )}
      </div>
    </main>
  );
}

export default Moremajor;