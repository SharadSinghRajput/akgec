'use client';

import { useState } from "react";

const libraryTabs = [
    "Knowledge Hub",
    "Library Overview",
    "Digital Resources",
    "University Publications & Research",
    "Advisory Board",
    "Meeting Records",
    "Library Guidelines",
    "Events & Initiatives",
    "Meet Our Team",
    "Scholarly Archive",
    "Digital Learning Content"
];


const libraryContent = {
    "Knowledge Hub": <>
        <div className="px-3 max-sm:px-3">
            <div>
                <h3 className="text-3xl font-novaReg mb-4 max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-sm:font-novaSemi max-sm:mb-2.5">Learning Resource Centre</h3>
                <p className="text-base font-novaReg mb-4 max-sm:text-sm max-sm:mb-2.5">Known as a beacon of knowledge, the AKG University Library, along with its specialized school libraries, houses an extensive collection of over 100,000 books and numerous print journals to support the academic and intellectual development of students. The library collection is regularly updated with the latest resources and study materials to benefit students from a wide range of disciplines.</p>
                <p className="text-base font-novaReg mb-4 max-sm:text-sm max-sm:mb-2.5">AKG University Library strives to make library management highly accessible and user-friendly for students, researchers, and faculty members. It offers access to a vast array of resources, including online databases, multimedia, and print materials. By embracing technological advancements and innovative research practices, the libraries work closely with faculty to enhance research and learning skills. AKGU libraries are committed to providing an enriching, student-focused research and learning environment.</p>
                <p className="text-2xl font-novaReg mb-4 ml-2 max-sm:text-xl max-sm:mb-2.5">Library Hours</p>
            </div>

            <ul className="text-base mb-6 list-disc list-inside font-novaReg max-sm:text-sm max-sm:mb-3 max-sm:ml-1.5">
                <li className="mb-3 pl-4 max-sm:mb-1.5 max-sm:pl-0">Monday to Friday: 9:00 AM to 9:00 PM</li>
                <li className="mb-3 pl-4 max-sm:mb-1.5 max-sm:pl-0">Saturdays (1st, 3rd, and 5th Saturday): 9:00 AM to 6:00 PM</li>
                <li className="mb-3 pl-4 max-sm:mb-1.5 max-sm:pl-0">During Examination (Monday to Friday): Up to 11:00 PM</li>
                <li className="mb-3 pl-4 max-sm:mb-1.5 max-sm:pl-0">Book Circulation Timings: 9:30 AM to 5:00 PM</li>
            </ul>

            <ul className="text-base mb-2.5 list-disc list-inside font-novaReg italic max-sm:text-sm max-sm:mb-2">
                <li className="mb-3 pl-4 max-sm:mb-1.5 max-sm:pl-2">The library is open to the general public with prior approval from the designated authority (Monday to Friday): 9:00 AM to 6:30 PM</li>
                <li className="mb-3 pl-4 max-sm:mb-1.5 max-sm:pl-2">The library extends access to the Underprivileged Section of Society upon receiving approval from the designated authority : <br />(Monday to Friday) 9:00 AM to 6:30 PM</li>
            </ul>
        </div>
    </>,
    "Library Overview": <>
        <span>Library Overview related data.</span>
    </>,
    "Digital Resources": <>
        <span>Digital Resources related data.</span>
    </>,
    "University Publications & Research": <>
        <span>University Publications & Research related data.</span>
    </>,
    "Advisory Board": <>
        <span>Advisory Board related data.</span>
    </>,
    "Meeting Records": <>
        <span>Meeting Records related data.</span>
    </>,
    "Library Guidelines": <>
        <span>Library Guidelines related data.</span>
    </>,
    "Events & Initiatives": <>
        <span>Events & Initiatives related data.</span>
    </>,
    "Meet Our Team": <>
        <span>Meet Our Team related data.</span>
    </>,
    "Scholarly Archive": <>
        <span>Scholarly Archive related data.</span>
    </>,
    "Digital Learning Content": <>
        <span>Digital Learning Content related data.</span>
    </>
}

const Library = () => {
    const [activeTab, setActiveTab] = useState("Knowledge Hub")
    return (
        <>
            <div className="grid grid-cols-8 bg-gray-100">
                <div className="col-span-2 sticky top-24 h-fit bg-white shadow-md rounded-lg">
                    <div className="p-4 border-b">
                        <h2 className="text-lg font-novaBold uppercase">Library</h2>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col space-y-2">
                            {libraryTabs.map((tab) => (
                                <ul key={tab}>
                                    <li className={`px-4 py-2 rounded font-novaReg cursor-pointer ${activeTab === tab ? "bg-black text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"} 
                            justify-start`} onClick={() => setActiveTab(tab)}>{tab}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-6 flex-grow ml-2 overflow-auto bg-white shadow-md rounded-lg">
                    <div className="p-4 border-b">
                        <h2 className="text-lg font-novaBold uppercase">{activeTab}</h2>
                    </div>
                    <div className="p-4">
                        <span className="whitespace-pre-wrap text-justify">{libraryContent[activeTab]}</span>
                    </div>
                </div>
            </div>
            {/* <JournalData tabs={libraryTabs} content={libraryContent} /> */}
        </>
    );
};

export default Library;
