"use client";

import Link from 'next/link';

const Calendar = ({ currentSemester, setCurrentSemester }) => {

    return (
        <div className="my-8 lg:max-w-80">
            <h2 className="mb-6 text-[42px] max-2xl:text-3xl max-lg:text-2xl leading-none font-novaReg">Academic Calendar</h2>
            <div className="flex max-[500px]:flex-col lg:flex-col gap-4">
                <div
                    onClick={() => setCurrentSemester('odd')}
                    className={`py-3 max-sm:py-2 flex-1 cursor-pointer text-center rounded-lg ${currentSemester === 'odd' ? 'bg-secondary' : 'bg-secondary'} hover:bg-[#3c5686]`}
                >
                    <Link href="/academics/academic-calendar"
                        
                        className="py-3 text-white uppercase text-[15px] font-novaSemi px-6 text-center"
                    >
                        Odd Semester
                    </Link>
                </div>
                <div
                    onClick={() => setCurrentSemester('even')}
                    className={`py-3 max-sm:py-2 flex-1 text-center cursor-pointer rounded-lg ${currentSemester === 'even' ? 'bg-zinc-900' : 'bg-primary'} hover:bg-[#3c5686]`}
                >
                    <Link href="/academics/academic-calendar"
                        className="text-white uppercase text-[15px] font-novaSemi py-3 px-6 text-center"
                    >
                        Even Semester
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Calendar;