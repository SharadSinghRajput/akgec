"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

const results = [
    {
        title: "List of selected candidates in M.Tech entrance examination of Jan, 2024 batch",
        date: "25 Jan 2024",
        link: "#",
    },
    {
        title: "Final Result of M.Tech entrance examination-July 2023 Batch",
        date: "15 July 2023",
        link: "#",
    },
    {
        title: "Result for M.Tech Entrance Exam July Batch 2023",
        date: "10 July 2023",
        link: "#",
    },
    {
        title: "List of Selected Candidates in B.Tech Entrance Examination_Jan 2023 Batch",
        date: "20 Jan 2023",
        link: "#",
    },
    {
        title: "Final Result of B.Tech entrance examination-July 2022 Batch",
        date: "15 July 2022",
        link: "#",
    },
    {
        title: "List of selected candidates in MCA entrance examination of Jan, 2024 batch",
        date: "25 Jan 2024",
        link: "#",
    },
    {
        title: "Final Result of MCA entrance examination-July 2023 Batch",
        date: "15 July 2023",
        link: "#",
    },
    {
        title: "Result for MCA Entrance Exam July Batch 2023",
        date: "10 July 2023",
        link: "#",
    },
    {
        title: "List of Selected Candidates in BCA Entrance Examination_Jan 2023 Batch",
        date: "20 Jan 2023",
        link: "#",
    }
];

const ExamResults = () => {
    const [openIndices, setOpenIndices] = useState([0]);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleDomain = (index) => {
        if (openIndices.includes(index)) {
            setActiveIndex(null);
            setOpenIndices((prev) => prev.filter((i) => i !== index));
        } else {
            setActiveIndex(index);
            setOpenIndices((prev) => [...prev, index]);
        }
    };

    return (
        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg mr-10">
            <h1 className="text-4xl font-novaReg p-5 mb-4">Examination Results</h1>
            <div className="w-full text-black">
                {results.map((result, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300">
                        <a
                            onClick={() => toggleDomain(index)}
                            className={`flex justify-between items-center w-full px-5 py-4 cursor-pointer rounded-lg transition-colors duration-200`}
                        >
                            <span className={`font-semibold ${activeIndex === index ? 'text-[#00BFE7]' : 'text-black'}`}>
                                {result.title}
                            </span>
                            {openIndices.includes(index) ? (
                                <ChevronUp className="w-6 h-6" />
                            ) : (
                                <ChevronDown className="w-6 h-6" />
                            )}
                        </a>
                        {openIndices.includes(index) && (
                            <div className="ml-5 pl-5">
                                <a
                                    href={result.link}
                                    className="text-[#00BFE7] text-sm flex items-center"
                                >
                                    <FileText className="w-4 h-4 mr-2" />
                                    {result.title}
                                </a>
                                <p className="text-xs font-novaReg mb-4">{result.date}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamResults;
