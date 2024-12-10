"use client";

import React, { useState } from "react";
import JournalTable from "./JournalTable";
import { Journal_January_June_2024 } from "@/Json/JournalTableData";
import { ChevronDown, ChevronUp } from "lucide-react";

const journalYears = [
    { id: 1, title: "Journal January - June 2024" },
    { id: 2, title: "Journal July - December 2023" },
    { id: 3, title: "Journal January - June 2023" },
    { id: 4, title: "Journal July - December 2022" },
    { id: 5, title: "Journal January - June 2022" },
    { id: 6, title: "Journal July - December 2021" },
    { id: 7, title: "Journal January - June 2021" },
    { id: 8, title: "Journal July - December 2020" },
    { id: 9, title: "Journal January - June 2020" },
    { id: 10, title: "Journal July - December 2019" },
    { id: 11, title: "Journal January - June 2019" },
    { id: 12, title: "Journal July - December 2018" },
    { id: 13, title: "Journal January - June 2018" },
    { id: 14, title: "Journal July - Dec 2017" },
    { id: 15, title: "Journal Jan - June 2017" },
    { id: 16, title: "Journal July - Dec 2016" },
    { id: 17, title: "Journal Jan - Jun 2016" },
    { id: 18, title: "Journal July - Dec 2015" },
    { id: 19, title: "Journal Jan - Jun 2015" },
    { id: 20, title: "Journal July - Dec 2014" },
    { id: 21, title: "Journal Jan - June 2014" },
    { id: 22, title: "Journal July - Dec 2013" },
    { id: 23, title: "Journal Jan - Jun 2013" },
    { id: 24, title: "Journal July - Dec 2012" },
    { id: 25, title: "Journal Jan - June 2012" },
    { id: 26, title: "Journal July - Dec 2011" },
    { id: 27, title: "Journal Jan - Jun 2011" },
    { id: 28, title: "Journal Jan - Jun 2010" },
    { id: 29, title: "Journal July - Dec 2010" },
  ];
  

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id); // Toggle the active ID
  };

  return (
    <div className="accordion">
      {journalYears.map((journal) => (
        <div key={journal.id} className="border rounded-lg mb-2 overflow-hidden text-black hover:text-white border-gray-300">
          <button
            onClick={() => handleToggle(journal.id)}
            className={`flex justify-between items-center w-full text-left p-4 hover:bg-indigo-950 ${activeId === journal.id && "bg-indigo-950 text-white"}`}
          >
            <span className="">{journal.title}</span>
            <span>{activeId === journal.id ? <ChevronUp /> : <ChevronDown />}</span>
          </button>
          {activeId === journal.id && (
            <div className="p-4 text-black bg-gray-50">
              <JournalTable journalData={Journal_January_June_2024}/>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;