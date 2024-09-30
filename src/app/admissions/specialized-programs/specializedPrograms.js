"use client";

import React, { useState } from 'react';
import Breadcrumb from '@/Components/Breadcrumb';

const BreadCrumb = [
    {
      name: "Admissions",
      Link: "#",
    },
    {
      name: "Specialized Programs",
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
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-1 '>
                        <div className='col-span-2 mt-10'>
                            {/* <div className='bg-gradient-to-b from-white/40 to-black/0 p-10 h-full pt-60'> */}
                            <div className='bg-yellow-400 p-10 h-full pb-20'>
                                <h1 className="text-4xl max-xl:text-2xl text-gray-700">Join AKG’s</h1>
                                <h3 className="text-7xl max-xl:text-5xl text-gray-900 font-novaBold lett tracking-tight">Specialized Programs</h3>
                                <p className="text-lg leading-5 font-novaLight mt-5 text-gray-700">and gain the expertise to navigate your career path successfully. Explore our offerings today and take the first step toward a brighter future!</p>
                            </div>
                        </div>
                        {/* <div className='col-span-1'>
                            <div className='bg-BG22 w-full h-full bg-cover bg-right max-md:min-h-[250px]'>
                                <div className='bg-red-500 w-full h-full mix-blend-multiply opacity-30' />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="relative 
            after:content-[''] after:w-[50%] after:h-full after:absolute after:bg-BG24 after:bg-cover after:bg-no-repeat after:bg-center after:top-0 after:z-0 after:right-0
            before:content-[''] before:w-[50%] before:h-full before:absolute before:bg-blue-800 before:top-0 before:z-[1] before:right-0 before:mix-blend-multiply before:max-lg:hidden after:max-lg:hidden">
                <div className="max-w-[1400px] relative z-10 w-full mx-auto pt-16 p-5 ">
                    <Breadcrumb data={BreadCrumb} />
                    <div className='mx-auto gap-5'>
                        <div className='grid grid-cols-2 max-lg:grid-cols-1'>
                            <div className='col-span-1 pr-10'>
                                <h4 className="text-4xl text-yellow-400 font-novaBold my-5 tracking-tight text-primary">Specialized Programs at AKG</h4>
                                <p className='text-base font-novaLight mb-5'>At AKG, we are committed to providing tailored educational experiences that equip students with the skills and knowledge necessary to excel in their chosen fields. Our Specialized Programs are designed to address the evolving demands of the job market and prepare graduates for successful careers.</p>
                                <div className=''>
                                    <div className='bg-BG21 w-full min-h-[350px] relative bg-no-repeat bg-cover rounded-2xl flex justify-center items-center overflow-hidden'>
                                        <div className='w-full h-full bg-primary absolute mix-blend-multiply' />
                                        <button className='w-14 h-14 rounded-full relative z-10 flex justify-center items-center bg-white/40 text-white'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg></button>
                                    </div>
                                    <div className='mt-5'>
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
                                <h4 className="text-4xl text-yellow-400 font-novaBold my-5 tracking-tight text-primary">Why Choose Our Specialized Programs?</h4>
                                {/* <p className='text-base font-novaLight mb-5'>At AKG, we are committed to providing tailored educational experiences that equip students with the skills and knowledge necessary to excel in their chosen fields. Our Specialized Programs are designed to address the evolving demands of the job market and prepare graduates for successful careers.</p> */}
                                <ul>
                                    <li className='font-novaLight text-sm'>- Industry-Relevant Curriculum: Courses designed with input from industry experts to ensure alignment with market needs.</li>
                                    <li className='font-novaLight text-sm'>- Hands-On Experience: Practical training through internships, workshops, and real-world projects.</li>
                                    <li className='font-novaLight text-sm'>- Global Exposure: Opportunities for international exchange programs and collaborations with institutions worldwide.</li>
                                    <li className='font-novaLight text-sm'>- Expert Faculty: Learn from seasoned professionals and academics with extensive industry experience.</li>
                                </ul>
                            </div>
                            <div className='col-span-1 lg:pl-10 max-lg:pt-10'>
                                <div className='grid grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4'>
                                    <div className="shadow-inner shadow-black overflow-hidden relative rounded-lg p-5 bg-white/80 after:content-[''] after:w-full after:h-full after:absolute after:bg-BG25 after:bg-cover after:bg-no-repeat after:bg-right after:top-0 after:z-0 after:right-0 after:opacity-40 ">
                                        <div className='relative z-10'>
                                            <span className='text-blue-600 mb-4 block'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                                            </span>
                                            <p className='text-lg font-novaBold mb-3'>Engineering & Technology</p>
                                            <ul>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Advanced Robotics: Explore cutting-edge technologies in automation and robotics engineering. </li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Data Science & Big Data: Learn to analyze complex data sets and derive actionable insights. </li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Cybersecurity & Information Assurance: Gain expertise in protecting digital assets and ensuring data privacy. </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shadow-inner shadow-black overflow-hidden relative rounded-lg p-5 bg-white/80 after:content-[''] after:w-full after:h-full after:absolute after:bg-BG25 after:bg-cover after:bg-no-repeat after:bg-right after:top-0 after:z-0 after:right-0 after:opacity-40">
                                        <div className='relative z-10'>
                                            <span className='text-blue-600 mb-4 block'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-luggage"><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M10 20h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
                                            </span>
                                            <p className='text-lg font-novaBold mb-3'>Business & Management</p>
                                            <ul>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Digital Marketing: Master online marketing strategies and tools to boost brand visibility. </li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Entrepreneurship & Innovation: Develop entrepreneurial skills to launch and manage successful ventures. </li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Financial Analysis & Management: Equip yourself with the knowledge to make informed financial decisions. </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shadow-inner shadow-black overflow-hidden relative rounded-lg p-5 bg-white/80 after:content-[''] after:w-full after:h-full after:absolute after:bg-BG25 after:bg-cover after:bg-no-repeat after:bg-right after:top-0 after:z-0 after:right-0 after:opacity-40">
                                        <div className='relative z-10'>
                                            <span className='text-blue-600 mb-4 block'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>
                                            </span>
                                            <p className='text-lg font-novaBold mb-3'>Health & Life Sciences</p>
                                            <ul>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Clinical Research & Data Management: Prepare for a career in managing clinical trials and research data. </li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Nutrition & Dietetics: Understand the science of nutrition and its application in health and wellness. </li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Pharmaceutical Sciences: Dive into drug development and the science behind pharmaceuticals. </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shadow-inner shadow-black overflow-hidden relative rounded-lg p-5 bg-white/80 after:content-[''] after:w-full after:h-full after:absolute after:bg-BG25 after:bg-cover after:bg-no-repeat after:bg-right after:top-0 after:z-0 after:right-0 after:opacity-40">
                                        <div className='relative z-10'>
                                            <span className='text-blue-600 mb-4 block'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
                                            </span>
                                            <p className='text-lg font-novaBold mb-3'>Media & Communication</p>
                                            <ul>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Journalism & Investigative Reporting: Hone your skills in storytelling and uncovering the truth. </li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Film Production & Direction: Learn the art of filmmaking from conception to final cut. </li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Public Relations & Corporate Communication: Develop strategies for effective communication in the corporate world. </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="shadow-inner shadow-black overflow-hidden relative rounded-lg p-5 bg-white/80 after:content-[''] after:w-full after:h-full after:absolute after:bg-BG25 after:bg-cover after:bg-no-repeat after:bg-right after:top-0 after:z-0 after:right-0 after:opacity-40">
                                        <div className='relative z-10'>
                                            <span className='text-blue-600 mb-4 block'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            </span>
                                            <p className='text-lg font-novaBold mb-3'>Creative Arts & Design</p>
                                            <ul>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Graphic Design & Visual Communication: Learn the principles of design and create visually compelling graphics for digital and print media.</li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Fashion Design & Merchandising: Explore fashion design techniques and the business of fashion marketing and retail.</li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Interior Design & Architecture: Gain skills in designing aesthetically pleasing and functional interior spaces.</li>
                                            </ul>
                                        </div>
                                    </div>
 
 
                                    <div className="shadow-inner shadow-black overflow-hidden relative rounded-lg p-5 bg-white/80 after:content-[''] after:w-full after:h-full after:absolute after:bg-BG25 after:bg-cover after:bg-no-repeat after:bg-right after:top-0 after:z-0 after:right-0 after:opacity-40">
                                        <div className='relative z-10'>
                                            <span className='text-blue-600 mb-4 block'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                                            </span>
                                            <p className='text-lg font-novaBold mb-3'>Education & Training</p>
                                            <ul>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Curriculum Development & Instructional Design: Learn how to design educational programs and create engaging learning experiences.</li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Early Childhood Education: Develop the skills needed to teach and care for young children in their critical formative years.</li>
                                                <li className='flex justify-start gap-2 text-sm font-novaLight'>{icon()}Special Education & Inclusive Learning: Equip yourself to support learners with diverse needs and create inclusive learning environments.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>

        </div>
    );
};



// Engineering






