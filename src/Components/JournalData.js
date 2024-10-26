"use client"

import React, { useState } from "react"

export default function JournalData({tabs, content}) {
    const [activeTab, setActiveTab] = useState("About")

    return (
        <div className="grid grid-cols-5 bg-gray-100">
            <div className="col-span-1 h-full bg-white shadow-md rounded-lg">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-novaBold uppercase">Navigation</h2>
                </div>
                <div className="p-4">
                    <div className="flex flex-col space-y-2">
                        {tabs.map((tab) => (
                            <ul>
                                <li key={tab} className={`px-4 py-2 rounded cursor-pointer ${activeTab === tab ? "bg-black text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"} 
                            justify-start`} onClick={() => setActiveTab(tab)}>{tab}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-4 flex-grow ml-2 overflow-auto bg-white shadow-md rounded-lg">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-novaBold uppercase">{activeTab}</h2>
                </div>
                <div className="p-4">
                    <p className="whitespace-pre-wrap">{content[activeTab]}</p>
                </div>
            </div>
        </div>
    )
}