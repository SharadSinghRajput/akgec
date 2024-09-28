"use client";

import React, { useState } from "react";
import AcademicCalendar from "./AcademicCalendar";
import { calendarEven, calendarOdd } from "@/Json/CalendarData";
import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Calendar from "@/Components/Calendar";


const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]

const Home = () => {
    const [currentSemester, setCurrentSemester] = useState('even');
    
    const calendarData = currentSemester === 'even' ? calendarEven : calendarOdd;

    return (
        <>
        <div className="bg-gray-100">
        <Header title={<>Academic <br /> Calendar 2024-25</>} Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-10 px-6 max-sm:px-0">
                <div className="col-span-9 max-lg:col-span-12 max-sm:px-2">
                  <AcademicCalendar calendarData={calendarData} currentSemester={currentSemester}/>
                </div>
                <div className="col-span-3 max-lg:col-span-12 pt-5 px-2">
                    <Calendar currentSemester={currentSemester} setCurrentSemester={setCurrentSemester} />
                    <SideBar title={"About Us"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
        </>
    )
}


export default Home;