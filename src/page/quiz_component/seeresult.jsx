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
                    <svg className="w-5 h-5 mr-[5px] mb-[2px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
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