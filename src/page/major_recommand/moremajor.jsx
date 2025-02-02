import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonalityTraitsList  from "../../asset/personal_style";
import Button from "../../components/button";


function Moremajor() {
  const navigate = useNavigate(); 

  return (
    <main className='sm573:px-8 px-3'>
      <header className="relative">
        <div className='absolute md:top-[-1rem] top-[-6rem] left-[4px] md:left-0'>
          <Button
            label="Go Back"
            onClick={() => navigate('/')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mr-[5px] mt-[-1px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
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
      </section>
    </main>
  )
}

export default Moremajor;
