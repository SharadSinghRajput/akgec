"use client";
import React, { useState, useEffect } from 'react';

export const AcademicCalendar = () => {

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
            <h2 className="mb-6 text-3xl font-novaReg">Academic Calendar</h2>
            <div className="flex flex-col space-y-4">
                <div onClick={()=>{setCurrentSemester('odd')}} className={`py-3 mb-4 cursor-pointer text-center rounded-lg ${currentSemester === 'odd' ? 'bg-secondary' : 'bg-primary'} hover:bg-[#fecc00]`}>
                    <a
                        href="/academics/academic-calendar/academic-calendar-odd"
                        className="py-3 text-white px-6 text-center"
                    >
                        Odd Semester
                    </a>
                </div>
                <div onClick={()=>{setCurrentSemester('even')}} className={`py-3 text-center cursor-pointer rounded-lg ${currentSemester === 'even' ? 'bg-secondary' : 'bg-primary'} hover:bg-[#3c5686]`}>
                    <a
                        href="/academics/academic-calendar/academic-calendar-even"
                        className="text-white py-3 px-6 text-center"
                    >
                        Even Semester
                    </a>
                </div>
            </div>
        </div>
    );
};
