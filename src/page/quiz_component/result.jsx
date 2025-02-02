import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

import Button from "../../components/button";
import TraitsList from "../../asset/TraitsList";

const Result = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isDragging, setIsDragging] = useState(false); // eslint-disable-line no-unused-vars
    const navigate = useNavigate();
    const dragStartPosition = useRef({ x: 0, y: 0 }); // Store the initial drag position

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1500); // Adjust the breakpoint as needed
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDragStart = (e, data) => {
        dragStartPosition.current = { x: data.x, y: data.y }; // Store the initial drag position
        setIsDragging(true); // User started dragging
    };

    const handleDragStop = (e, data) => {
        const { x, y } = dragStartPosition.current;
        const distanceMoved = Math.sqrt((data.x - x) ** 2 + (data.y - y) ** 2);

        // If the user moved less than 5 pixels, consider it a click
        if (distanceMoved < 5) {
            navigate('/'); // Navigate only if the user didn't drag
        }

        setIsDragging(false); // User stopped dragging
    };

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

    const listData = [
        "Skilled Trades",
        "Agriculture",
        "Agriculture",
        "Agriculture",
        "Law Enforcement",
    ];

    return (
        <main className='sm573:px-8 px-3 py-5 mb-[2rem]'>
            <header>
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
            <section className="mt-[2rem] text-left flex lgm:flex-row flex-col item-center justify-center lgm:gap-[2.5rem] gap-[2rem]">
                <nav>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink mb-3">
                        RESULT
                    </h1>
                    <h1 className="sm425:block hidden text-xl sm:text-2xl md:text-3xl font-semibold text-logocolor mb-5">
                        Personality type + Major Recommend
                    </h1>
                    <h1 className="sm425:hidden block text-xl sm:text-2xl md:text-3xl font-semibold text-logocolor mb-5">
                        Personality type <br/> + Major Recommend
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray mb-3">
                        Discover your personality type and the majors that suit you best.
                    </p>

                    <div className="mt-[2rem] lgl:py-[4.5rem] py-[1.9rem] lgm:w-[30rem] lgl:w-[40rem] bg-white rounded-2xl">
                        <TraitsList traitsData={traitsData} />
                    </div>
                </nav>

                <nav className="flex flex-col">
                    <div className="p-5 bg-white rounded-2xl lgm:mt-[2rem] max-w-7xl">
                        <p className="text-sm sm:text-base md:text-lg text-logocolor mb-3">
                            Your Personality Type : <span className="text-pink font-bold"> ENTJ </span>
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray mb-3">
                            Hearty, frank, able in studies, leader in activities. Usually good in anything that requires reasoning and intelligent talk, such as public speaking. Are usually well informed and enjoy adding to their fund of knowledge. May sometimes be more positive and confident than their experience in an area warrants.
                        </p>
                    </div>
                    <div className="flex flex-col lgm:flex-row gap-[2rem]">
                        <nav className="p-5 bg-white rounded-2xl mt-[2.5rem] max-w-5xl">
                            <p className="text-sm font-bold sm:text-base md:text-lg text-logocolor mb-2">
                                Occupation/Major Trend :
                            </p>
                            <div className="sm375:h-[5rem] md:h-[6rem] sm375:mb-0 mb-2 item-start">
                                <ul
                                    className={`list-disc list-inside text-gray text-sm sm:text-base md:text-lg ${
                                        listData.length === 3 || listData.length === 4
                                            ? "sm375:grid grid-cols-2"
                                            : listData.length >= 5
                                            ? "sm375:grid grid-cols-2 sm573:grid-cols-3 lgm:grid-cols-2 lgd:grid-cols-3"
                                            : ""
                                    } items-start`}
                                >
                                    {listData.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-sm font-bold sm:text-base md:text-lg text-logocolor">
                                Focus : <span className="text-gray font-normal">Use analytic, strategic, Planning, and organisation to get tesk complete and organisation to get tesk complete</span>
                            </p>
                        </nav>

                        <Draggable
                            disabled={!isSmallScreen}
                            onStart={handleDragStart}
                            onStop={handleDragStop}
                        >
                            <nav
                                className="flex justify-end lgm:mt-[11rem] h-[5rem] fixed lgs:static bottom-[2rem] right-[2rem] item-center justify-center "
                            >
                                <Button label="Go Back">
                                    <div className="flex flex-col items-center justify-center w-[10rem]">
                                        <p>See more majors</p>
                                        <div className="flex">
                                            that fit you
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-[-15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Button>
                            </nav>
                        </Draggable>
                    </div>
                </nav>
            </section>
        </main>
    );
};

export default Result;