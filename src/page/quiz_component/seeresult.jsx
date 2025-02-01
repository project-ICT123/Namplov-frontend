import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/button";
import Congratulations from "../../asset/Congratulations";


const SeeResult = () => {
    const navigate = useNavigate(); 
    
    return (
        <main className='sm573:px-8 px-5 relative'>
            <Congratulations/>
            <header className="relative z-10">
                <Button
                    label="Go Back"
                    onClick={() => navigate('/major_test')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mr-[5px] mt-[-1px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Go Back
                </Button>
            </header>
            <section className="flex flex-col items-center justify-center h-[35rem] relative z-10">
                <div> 
                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-logocolor mb-5">
                        Great Job !
                    </h1>
                    <p className="text-center text-sm sm:text-base md:text-lg text-gray mb-3">
                        You have completed it
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Button
                        label="Go Back"
                        onClick={() => navigate('/major_test/result')}
                    >
                        See your result
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-[-1rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default SeeResult;