  import React from 'react';
  import { useNavigate } from 'react-router-dom';

  import PersonalityTraitsList  from "../../asset/personal_style";
  import Button from "../../components/button";


  function MajorRecommand() {
    const navigate = useNavigate(); 
    const typeqcm = "your_value";

    return (
      <main className='sm573:px-8 px-3'>
        <header className="relative">
          <div className='absolute md:top-[-1rem] top-[-6rem]'>
            <Button
              label="Go Back"
              onClick={() => navigate('/')}
            >
              <svg class="w-5 h-5 mr-[5px] mb-[2px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              Go Back
            </Button>
          </div>
          
          <div className='mt-[2rem]'> 
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl md:mt-0 mt-[6rem] font-semibold text-logocolor mb-5">
              Major Recommend
            </h1>
            <p className="text-center text-sm sm:text-base md:text-lg text-gray mb-3">
              Find the major that suits you best <br/> based on your personality by do the TEST.
            </p>
          </div>
        </header>

        <section className=' mt-[2rem] flex item-center justify-center mb-[0.8rem] '>
          <PersonalityTraitsList typeqcm={typeqcm} destination="/major_test/all_question/major" />
        </section>
      </main>
    )
  }

  export default MajorRecommand;
