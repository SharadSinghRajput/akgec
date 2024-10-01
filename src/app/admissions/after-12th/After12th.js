"use client";

import React, { useState } from 'react';
import Breadcrumb from '@/Components/Breadcrumb';

const BreadCrumb = [
    {
      name: "Admissions",
      Link: "#",
    },
    {
      name: "after 12th",
      Link: "#",
    }
  ]

  const icon = () =>(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>) 
  

export default () => {
    const [openIndexOnline, setOpenIndexOnline] = useState(0);
    const [openIndexOffline, setOpenIndexOffline] = useState(0);

    const toggleOnlineContent = (index) => {
        setOpenIndexOnline(openIndexOnline === index ? null : index);
    };

    const toggleOfflineContent = (index) => {
        setOpenIndexOffline(openIndexOffline === index ? null : index);
    };

    return (
        <div className="">
            <div className='min-h-96 bg-BG20 pt-40'>
                <div className="max-w-[1400px] w-full mx-auto ">
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-1'>
                        <div className='col-span-1'>
                            {/* <div className='bg-gradient-to-b from-white/40 to-black/0 p-10 h-full pt-60'> */}
                            <div className='bg-yellow-400 p-10 h-full '>
                                <h1 className="text-4xl max-xl:text-2xl text-gray-700">Job Oriented</h1>
                                <h2 className="text-4xl max-xl:text-2xl text-gray-700 font-novaBold uppercase">Professional Programs</h2>
                                <h3 className="text-9xl max-xl:text-5xl text-gray-900 font-novaBold lett tracking-tight">after 12th</h3>
                                <p className="text-lg leading-5 font-novaLight mt-5 text-gray-700">AKGEC fosters a balanced environment that integrates academic excellence with opportunities for sports and extracurricular activities. By promoting both intellectual and personal growth, the institute ensures students excel in their studies while actively engaging in physical fitness, teamwork, and creative pursuits. This holistic approach equips students with diverse skills, preparing them for successful careers and well-rounded lives.</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='bg-BG22 w-full h-full bg-cover bg-right max-md:min-h-[250px]'>
                                <div className='bg-red-500 w-full h-full mix-blend-multiply opacity-30' />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] w-full mx-auto pt-16 p-5">
                <Breadcrumb data={BreadCrumb} />
                <div className='mx-auto gap-5'>
                    <div>
                        <h4 className="text-4xl text-yellow-400 font-novaBold my-5 tracking-tight text-primary">Career-Focused Professional Programs after 12th</h4>
                        <p className='text-base font-novaLight mb-5'>Students today seek to explore their academic potential to the fullest. AKG offers a wide range of undergraduate and postgraduate programs in Engineering, Management, Computing, Hospitality, Legal Studies, Journalism & Mass Communication, and more. With experienced faculty, state-of-the-art facilities, advanced labs, and a research-oriented learning process, AKG is a top choice for students pursuing their dreams.</p>
                        <p className='text-base font-novaLight mb-5'>At AKG, students' aspirations are nurtured through a student-centric approach and supportive management, ensuring a bright and successful professional career ahead.</p>
                    </div>
                    <div className='grid grid-cols-3 max-md:grid-cols-1 gap-10 mt-16'>
                        <div className='bg-BG21 w-full col-span-2 min-h-[350px] relative bg-no-repeat bg-cover rounded-2xl flex justify-center items-center overflow-hidden'>
                            <div className='w-full h-full bg-primary absolute mix-blend-multiply' />
                            <button className='w-14 h-14 rounded-full relative z-10 flex justify-center items-center bg-white/40 text-white'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg></button>
                        </div>
                        <div className='col-span-1'>
                            <div className=''>
                                <p className='text-lg font-novaBold text-gray-700'>Call us to Apply now</p>
                                <p className='text-lg font-novaLight text-gray-700'>For any information please contact the below mentioned helpline no:</p>
                                <ul className='mt-10'>
                                    <li className='text-sm font-novaLight'>General Inquiries:+91-1800-200-0777</li>
                                    <li className='text-sm font-novaLight'>Mobile: +91-7290034978</li>
                                    <li className='text-sm font-novaLight'>Toll Free: 8744052891-93</li>
                                    <li className='text-sm font-novaLight'>Email: info@akgec.ac.in</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 mt-10 max-lg:grid-cols-2 max-md:grid-cols-1'>
                    <div className='shadow-xl rounded-lg p-5'>
                        <span className='text-blue-600 mb-4 block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <p className='text-lg font-novaBold mb-3'>Engineering</p>
                        <ul>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Aerospace Engineering</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Automobile Engineering</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}BioTechnology Engineering*</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Chemical Engineering</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Civil Engineering</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Computer Science Engineering</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Electrical Engineering</li>
                        </ul>
                    </div>
                    <div className='shadow-xl rounded-lg p-5'>
                        <span className='text-blue-600 mb-4 block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-luggage"><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M10 20h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
                        </span>
                        <p className='text-lg font-novaBold mb-3'>Management</p>
                        <ul>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Business Administration </li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Marketing Management </li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Financial Management </li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Human Resources Management </li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Operations Management </li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Information Technology Management </li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}International Business </li>
                        </ul>
                    </div>
                    <div className='shadow-xl rounded-lg p-5'>
                        <span className='text-blue-600 mb-4 block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>
                        </span>
                        <p className='text-lg font-novaBold mb-3'>Applied Sciences</p>
                        <ul>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Mathematics</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Physics</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Chemistry</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Environmental Science</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Material Science</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Biotechnology</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Nanotechnology</li>
                        </ul>
                    </div>
                    <div className='shadow-xl rounded-lg p-5'>
                        <span className='text-blue-600 mb-4 block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
                        </span>
                        <p className='text-lg font-novaBold mb-3'>Computer Applications</p>
                        <ul>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Software Development</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Data Science</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Artificial Intelligence</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Cybersecurity</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Web Development</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Mobile Application Development</li>
                            <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Database Management Systems</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};



// Engineering






