"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

const schedules = {
    "2024-25": [
        { "title": "Schedule of (AKG) MTech III Sem", "link": "#", "date": "2024-01-15" },
        { "title": "Schedule of (AKG) MTech V Sem", "link": "#", "date": "2024-01-20" },
        { "title": "Schedule of (AKG) BTech I Sem", "link": "#", "date": "2024-01-25" },
        { "title": "Schedule of (AKG) BTech III Sem", "link": "#", "date": "2024-02-01" },
        { "title": "Schedule of (AKG) BTech V Sem", "link": "#", "date": "2024-02-05" },
        { "title": "Schedule of (AKG) MCA I Sem", "link": "#", "date": "2024-02-10" },
        { "title": "Schedule of (AKG) MCA III Sem", "link": "#", "date": "2024-02-15" },
        { "title": "Schedule of (AKG) MCA V Sem", "link": "#", "date": "2024-02-20" },
        { "title": "Schedule of (AKG) BCA I Sem", "link": "#", "date": "2024-02-25" },
        { "title": "Schedule of (AKG) BCA III Sem", "link": "#", "date": "2024-03-01" },
    ],

    "2023-24": [
        { "title": "Schedule of (AKG) MTech III Sem", "link": "#", "date": "2023-01-15" },
        { "title": "Schedule of (AKG) MTech V Sem", "link": "#", "date": "2023-01-20" },
        { "title": "Schedule of (AKG) BTech I Sem", "link": "#", "date": "2023-01-25" },
        { "title": "Schedule of (AKG) BTech III Sem", "link": "#", "date": "2023-02-01" },
        { "title": "Schedule of (AKG) BTech V Sem", "link": "#", "date": "2023-02-05" },
        { "title": "Schedule of (AKG) MCA I Sem", "link": "#", "date": "2023-02-10" },
        { "title": "Schedule of (AKG) MCA III Sem", "link": "#", "date": "2023-02-15" },
        { "title": "Schedule of (AKG) MCA V Sem", "link": "#", "date": "2023-02-20" },
        { "title": "Schedule of (AKG) BCA I Sem", "link": "#", "date": "2023-02-25" },
        { "title": "Schedule of (AKG) BCA III Sem", "link": "#", "date": "2023-03-01" },
    ],

    "2022-23": [
        { "title": "Schedule of (AKG) MTech III Sem", "link": "#", "date": "2022-01-15" },
        { "title": "Schedule of (AKG) MTech V Sem", "link": "#", "date": "2022-01-20" },
        { "title": "Schedule of (AKG) BTech I Sem", "link": "#", "date": "2022-01-25" },
        { "title": "Schedule of (AKG) BTech III Sem", "link": "#", "date": "2022-02-01" },
        { "title": "Schedule of (AKG) BTech V Sem", "link": "#", "date": "2022-02-05" },
        { "title": "Schedule of (AKG) MCA I Sem", "link": "#", "date": "2022-02-10" },
        { "title": "Schedule of (AKG) MCA III Sem", "link": "#", "date": "2022-02-15" },
        { "title": "Schedule of (AKG) MCA V Sem", "link": "#", "date": "2022-02-20" },
        { "title": "Schedule of (AKG) BCA I Sem", "link": "#", "date": "2022-02-25" },
        { "title": "Schedule of (AKG) BCA III Sem", "link": "#", "date": "2022-03-01" },
    ],
};

const ExaminationSchedule = () => {
    const [openIndices, setOpenIndices] = useState([0]);
    const [activeTab, setActiveTab] = useState("2024-25");

    const toggleSchedule = (index) => {
        setOpenIndices((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="bg-[#eaf1ff] shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg mr-5 p-5">
            <h1 className="text-4xl font-novaReg mb-4 ">Examination Schedule</h1>
            <div className="flex space-x-2 mb-6 w-6/12">
                {Object.keys(schedules).map((year) => (
                    <button
                        key={year}
                        onClick={() => setActiveTab(year)}
                        className={`px-4 w-full py-2 transition-colors duration-200 ${activeTab === year
                            ? "bg-primary text-white rounded-br-lg rounded-tl-lg"
                            : "bg-secondary text-black border border-gray-300 rounded-bl-lg rounded-tr-lg"
                            }`}
                    >
                        {year}
                    </button>
                ))}
            </div>

            <div>
                {schedules[activeTab].map((schedule, index) => (
                    <div key={index} className="mb-2 border-b border-gray-300">
                        <a
                            onClick={() => toggleSchedule(index)}
                            className="flex justify-between items-center w-full cursor-pointer py-4"
                            aria-expanded={openIndices.includes(index)}
                        >
                            <span className={`font-semibold ${openIndices.includes(index) ? 'text-primary' : 'text-black'}`}>
                                {schedule.title}
                            </span>
                            {openIndices.includes(index) ? (
                                <ChevronUp className="w-6 h-6" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </a>
                        {openIndices.includes(index) && (
                            <div className="ml-4 pl-4 py-2 text-gray-600">
                                <a
                                    href={schedule.link}
                                    className="text-primary text-sm flex items-center"
                                >
                                    <FileText className="w-4 h-4 mr-2" />
                                    {schedule.title}
                                </a>
                                <p className="text-xs font-novaReg mb-4">{schedule.date}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExaminationSchedule;
