import { useState } from "react";
import StartQuiz from "../page/quiz_component/startQuiz";
import TraitsList from "./TraitsList";


const traitsData = [
  { initial: 'I', name: 'Introversion', bgColor: 'bg-blue' },
  { initial: 'E', name: 'Extroversion', bgColor: 'bg-orange-500' },
  { initial: 'N', name: 'Intuition', bgColor: 'bg-purple-500' },
  { initial: 'S', name: 'Sensing', bgColor: 'bg-green-500' },
  { initial: 'T', name: 'Thinking', bgColor: 'bg-gray' },
  { initial: 'F', name: 'Feeling', bgColor: 'bg-pink' },
  { initial: 'P', name: 'Perceiving', bgColor: 'bg-yellow-400' },
  { initial: 'J', name: 'Judging', bgColor: 'bg-black' },
];

const personalityTypes = [
  { initial: 'ENFP' },
  { initial: 'ESFJ' },
  { initial: 'ENTP' },
  { initial: 'ESTJ' },
  { initial: 'ESFP' },
  { initial: 'ENFJ' },
  { initial: 'ESTP' },
  { initial: 'ENTJ' },
  { initial: 'INFP' },
  { initial: 'ISFJ' },
  { initial: 'INTP' },
  { initial: 'ISTJ' },
  { initial: 'ISFP' },
  { initial: 'INFJ' },
  { initial: 'ISTP' },
  { initial: 'INTJ' },
  
  // Add more types as needed
];



const PersonalityTraitsList = ({ typeqcm, destination }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  return (
    <main className='  flex flex-col lgm:flex-row sm:gap-[2rem] lgl:gap-[15rem] mt-0 lgl:mt-[5rem]'>
      <div className="lgm:w-[30rem] lgl:w-[40rem] lgm:h-[23rem] sm879:h-[15rem] bg-white py-[1.5rem] rounded-2xl">
        <header>
            <h1 className="text-center text-base sm:text-xl font-semibold text-logocolor sm:mb-5 mb-2">
            Personal Style Inventory Profiles
            </h1>

            <p className="text-center text-sm sm:text-base md:text-lg text-gray sm:mb-3">
            Key Letters
            </p>
        </header>
        <section className="flex items-center justify-center mt-[1rem] lgl:mt-[3rem]">
            <TraitsList traitsData={traitsData} />
        </section>
      </div>

      <div className=" py-[1.5rem] rounded-2xl">
        <header>
            <h1 className="text-center text-base sm:text-xl font-semibold text-logocolor sm:mb-5 mb-2 ">
              16 types of personal style
            </h1>

            <p className="text-center text-sm sm:text-base md:text-lg text-gray sm:mb-3">
              by combine with 4 keys letter 
            </p>
        </header>
        <section className="flex items-center justify-center w-full">
          <nav className="flex justify-center items-start my-[1rem] mb-[2.5rem] w-full">
            <div className="grid grid-cols-2 sm375:grid-cols-3 sm573:grid-cols-4 sm879:grid-cols-6 lgm:grid-cols-3 lgd:grid-cols-5 gap-4">
              {personalityTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <div className="flex items-center justify-center w-[7rem] h-[3rem] bg-white rounded-lg text-logocolor font-bold text-sm">
                    {type.initial}
                  </div>
                </div>
              ))}
              
            </div>
            
          </nav>
        </section>
        {/* Other content */}
        <section className="fixed bottom-[3.5rem] right-[2rem] lgl:bottom-[18rem] ">
          <div
            onClick={handleOpenModal}
            className="h-[4rem] w-[4rem] bg-logocolor text-white shadow rounded-full flex items-center justify-center relative hover:bg-pink cursor-pointer transition-all duration-300"
          >
            <h3 className="font-semibold text-sm sm:text-base text-center">Test</h3>
          </div>
        </section>
      </div>

      {/* Modal - StartQuiz */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="p-[1rem] max-w-4xl flex relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12 text-gray hover:text-pink absolute top-[-1.5rem] right-[-1rem] m-4 cursor-pointer"
              onClick={() => setIsModalOpen(false)} // Handle click to close modal
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
            <StartQuiz typeqcm={typeqcm} destination={destination} />
          </div>
        </div>
      )}
    </main>
  )
};

export default PersonalityTraitsList;