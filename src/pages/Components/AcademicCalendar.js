"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const AcademicCalendar = () => {

    const [currentSemester, setCurrentSemester] = useState('even');

    useEffect(() => {
        const today = new Date();
        if (today.getMonth() < 6) {
            setCurrentSemester('odd');
        } else {
            setCurrentSemester('even');
        }
    }, []);

    return (
        <div className="mb-12 max-w-80">
            <h2 className="mb-6 text-[42px] leading-none font-novaReg">Academic <br /> Calendar</h2>
            <div className="flex flex-col">
                <div onClick={()=>{setCurrentSemester('odd')}} className={`py-3 mb-4 cursor-pointer text-center rounded-lg ${currentSemester === 'odd' ? 'bg-secondary' : 'bg-primary'} hover:bg-[#fecc00]`}>
                    <Link
                        href="/academics/academic-calendar-odd"
                        className="py-3 uppercase text-[15px] font-novaSemi text-white px-6 text-center"
                    >
                        Odd Semester
                    </Link>
                </div>
                <div onClick={()=>{setCurrentSemester('even')}} className={`py-3 text-center cursor-pointer rounded-lg ${currentSemester === 'even' ? 'bg-secondary' : 'bg-primary'} hover:bg-[#3c5686]`}>
                    <Link
                        href="/academics/academic-calendar-even"
                        className="text-white uppercase text-[15px] font-novaSemi py-3 px-6 text-center"
                    >
                        Even Semester
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AcademicCalendar;