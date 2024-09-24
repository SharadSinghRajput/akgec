import React, { useState } from "react";
import Calendar from "./Components/Calendar";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { calendarOdd, calendarEven } from "@/Json/CalendarData";

const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]



const AcademicCalendar = () => {
    const [currentSemester, setCurrentSemester] = useState('even');
    
    const calendarData = currentSemester === 'even' ? calendarEven : calendarOdd;

    return (
        <>
            <div className="bg-gray-100">
                <Header title={<h2 className="leading-10">Academic <br /> Calendar 2024-25</h2>} Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 pt-10 gap-3 px-6 max-sm:px-0">
                    <div className="col-span-9 max-lg:col-span-12 max-sm:px-2">
                        <div className="container mx-auto">
                            <h1 className="text-[40px] max-2xl:text-3xl leading-none font-novaReg mb-2.5 ">
                                {currentSemester === 'even' ? 'Even Semester' : 'Odd Semester'}
                            </h1>
                            <div className="mb-6 mt-4 rounded-lg">
                                <table className="min-w-full my-4 bg-white rounded-lg">
                                    <thead className="bg-blue-800 text-white h-[44px] rounded-t-lg text-xs font-novaBold lg:text-base lg:font-novaReg">
                                        <tr className="border-b">
                                            <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                                Date
                                            </th>
                                            <th className="px-4 py-2 border-r border-white border-opacity-10 text-left">
                                                Day
                                            </th>
                                            <th className="px-4 py-2 text-left rounded-tr-lg">
                                                Activity
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-t-2 rounded-lg text-xs lg:text-sm font-novaSemi">
                                        {calendarData?.map((entry, index) => (
                                            <tr
                                                key={index}
                                                className={`bg-indigo-950 text-white ${index === calendarData.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                            >
                                                <td className={`p-4  max-sm:p-3 border-b border-white border-opacity-20 ${index === calendarData.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                    {entry.StartDate || entry.Date}
                                                </td>
                                                <td className="p-4 text-center max-sm:p-3 border-b border-l border-white border-opacity-20">
                                                    {entry.Days ? entry.Days.split('-')[0] : entry.Day}
                                                </td>
                                                <td className={`p-4 max-sm:p-3 border-b border-l border-white border-opacity-20 ${index === calendarData.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                    {entry.Activity} {entry.EndDate ? `-till ${entry.EndDate}` : ''}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 max-lg:col-span-12 pt-5 px-2">
                        <Calendar currentSemester={currentSemester} setCurrentSemester={setCurrentSemester} />
                        <SideBar title={"About Us"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>
                
            
    );
}

export default AcademicCalendar;