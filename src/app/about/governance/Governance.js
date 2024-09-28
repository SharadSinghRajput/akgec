"use client";

import React, { useState } from 'react';

const gbody = [
    {
        "sr_no": 1,
        "name": "John Doe",
        "designation": "The Chancellor",
        "under_section": "1 (1) (a)",
        "position": "Chairman"
    },
    {
        "sr_no": 2,
        "name": "Jane Smith",
        "designation": "Vice-Chancellor",
        "under_section": "1 (1) (b)",
        "position": "Member"
    },
    {
        "sr_no": 3,
        "name": "Alice Johnson",
        "designation": "Pro-Chancellor",
        "under_section": "1 (1) (c)",
        "position": "Member"
    },
    {
        "sr_no": 4,
        "name": "Bob Brown",
        "designation": "Eminent Educationist",
        "under_section": "1 (1) (c)",
        "position": "Member"
    },
    {
        "sr_no": 5,
        "name": "Sara White",
        "designation": "Eminent Educationist",
        "under_section": "1 (1) (c)",
        "position": "Member"
    },
    {
        "sr_no": 6,
        "name": "Michael Green",
        "designation": "Senior Vice President, Management & Technology Expert",
        "under_section": "1 (1) (d)",
        "position": "Member"
    },
    {
        "sr_no": 7,
        "name": "Emily Davis",
        "designation": "Chief Advisor, AKG University, nominated by Hon’ble Chancellor",
        "under_section": "--------",
        "position": "Special Member"
    },
    {
        "sr_no": 8,
        "name": "William Wilson",
        "designation": "Pro-Vice Chancellor",
        "under_section": "--------",
        "position": "Special Invitee"
    },
    {
        "sr_no": 9,
        "name": "David Martinez",
        "designation": "Finance Expert",
        "under_section": "1 (1) (e)",
        "position": "Member"
    },
    {
        "sr_no": 10,
        "name": "The Secretary, Higher Education Department, Punjab Government",
        "designation": "The Principal Secretary to Government of Punjab, Department of Higher Education.",
        "under_section": "1 (1) (f)",
        "position": "Member"
    },
    {
        "sr_no": 11,
        "name": "Dr. Anna Scott",
        "designation": "Eminent Educationist Nominated by the Secretary to Government of Punjab, Department of Higher Education.",
        "under_section": "1 (1) (g)",
        "position": "Member"
    },
    {
        "sr_no": 12,
        "name": "Chris Johnson",
        "designation": "Registrar",
        "under_section": "1 (1)",
        "position": "Member Secretary"
    }
];

export const Governance = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleContent = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="px-3">
                <div>
                    <h3 className="text-4xl font-novaReg mb-2.5">Governance</h3>
                    <p className="text-sm font-novaReg mb-4">
                        The AKG University Act has conferred specific powers & functions on various bodies of AKG University. These University Bodies play a crucial and effective role in framing the policies, maintaining educational standards and character as well as financial probity and judicious use of resources. These bodies also give policy directions, monitor their implementation and take corrective measures wherever necessary. The University has the following bodies for governance:
                    </p>
                    <br />
                    <div className="mb-6">
                        <div className="border">
                            <h2 className={`${openIndex === 0 ? 'bg-indigo-900 text-white' : ''}`}>
                                <button className="flex justify-between py-4 px-5 font-novaReg w-full" onClick={() => toggleContent(0)}>
                                    Governing Body
                                    {openIndex === 0 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    )}
                                </button>
                            </h2>
                            {openIndex === 0 && (
                                <div className="content py-4 px-5">
                                    <div className='block overflow-x-auto'>
                                        <p className='text-sm font-novaReg mb-4'>The Governing Body of AKG University has been revised by the virtue of changes in senior positions for the academic session 2022-2024 and same is given below:</p>
                                        <table className="w-full ">
                                            <thead>
                                                <tr className='text-white'>
                                                    <th className="px-2.5 py-1 text-[15px] bg-indigo-900 font-novaBold text-start rounded-tl-lg">Sr. No.</th>
                                                    <th className="px-2.5 py-1 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Name</th>
                                                    <th className="px-2.5 py-1 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Designation</th>
                                                    <th className="px-2.5 py-1 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Under Section</th>
                                                    <th className="px-2.5 py-1 text-[15px] bg-indigo-900 font-novaBold text-start border-l rounded-tr-lg">Position</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {gbody.map((member) => (
                                                    <tr className='text-white' key={member.sr_no}>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.sr_no}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.name}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.designation}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.under_section}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.position}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="border">
                            <h2 className={`${openIndex === 1 ? 'bg-indigo-900 text-white' : ''}`}>
                                <button className="flex justify-between py-4 px-5 font-novaReg w-full" onClick={() => toggleContent(1)}>
                                    Board Of Management
                                    {openIndex === 1 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up ">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    )}
                                </button>
                            </h2>
                            {openIndex === 1 && (
                                <div className="content py-4 px-5">
                                    <div className='block overflow-x-auto'>
                                        <p className='text-sm font-novaReg mb-4'>The Board of Management of AKG University is constituted herewith by the virtue of changes in senior positions for academic session 2022-2024 as given below:</p>
                                        <table className="w-full ">
                                            <thead>
                                                <tr className='text-white'>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start rounded-tl-lg">Sr. No.</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Name</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Designation</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Under Section</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l rounded-tr-lg">Position</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {gbody.map((member) => (
                                                    <tr className='text-white' key={member.sr_no}>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.sr_no}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.name}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.designation}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.under_section}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.position}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="border">
                            <h2 className={`${openIndex === 2 ? 'bg-indigo-900 text-white' : ''}`}>
                                <button className="flex justify-between py-4 px-5 font-novaReg w-full" onClick={() => toggleContent(2)}>
                                    Academic Council
                                    {openIndex === 2 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    )}
                                </button>
                            </h2>
                            {openIndex === 2 && (
                                <div className="content py-4 px-5">
                                    <div className='block overflow-x-auto'>
                                        <p className='text-sm font-novaReg mb-4'>The Board of Management of AKG University is constituted herewith by the virtue of changes in senior positions for academic session 2022-2024 as given below:</p>
                                        <table className="w-full ">
                                            <thead>
                                                <tr className='text-white'>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start rounded-tl-lg">Sr. No.</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Name</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Designation</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Under Section</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l rounded-tr-lg">Position</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {gbody.map((member) => (
                                                    <tr className='text-white' key={member.sr_no}>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.sr_no}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.name}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.designation}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.under_section}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.position}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="border">
                            <h2 className={`border-n ${openIndex === 3 ? 'bg-indigo-900 text-white' : ''}`}>
                                <button className="flex justify-between py-4 px-5 font-novaReg w-full" onClick={() => toggleContent(3)}>
                                    Underpinning Corporate Patronage
                                    {openIndex === 3 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    )}
                                </button>
                            </h2>
                            {openIndex === 3 && (
                                <div className="content py-4 px-5">
                                    <div className='block overflow-x-auto'>
                                        <p className='text-sm font-novaReg mb-4'>The Board of Management of AKG University is constituted herewith by the virtue of changes in senior positions for academic session 2022-2024 as given below:</p>
                                        <table className="w-full ">
                                            <thead>
                                                <tr className='text-white'>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start rounded-tl-lg">Sr. No.</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Name</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Designation</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l">Under Section</th>
                                                    <th className="px-2.5 py-3 text-[15px] bg-indigo-900 font-novaBold text-start border-l rounded-tr-lg">Position</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {gbody.map((member) => (
                                                    <tr className='text-white' key={member.sr_no}>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.sr_no}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.name}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.designation}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.under_section}</td>
                                                        <td className="border-b border-r border-gray-300 border-opacity-50 text-start text-sm font-novaReg bg-indigo-950 p-2.5">{member.position}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
