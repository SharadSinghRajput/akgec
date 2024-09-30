"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import BannerSlider from '@/Components/BannerSlider'

const slides = [
    {
        title: "Student Services",
        subHeading: "Promote a Healthy Lifestyle",
        subtitle: "Fostering Physical Fitness and Well-being",
        description: "We encourage students to embrace physical fitness by engaging in sports and recreational activities, enhancing overall health.",
        buttonText: "Explore Fitness",
        image: "/image/student-services/main-banner-1.jpg",
    },
    {
        title: "Student Services",
        subHeading: "Experience Exceptional Campus Living",
        subtitle: "A Comfortable and Modern Residence",
        description: "At AKGEC, we provide state-of-the-art accommodations that prioritize comfort, ensuring a conducive environment for personal growth.",
        buttonText: "Explore Accommodation",
        image: "/image/student-services/main-banner-2.jpg",
    },
    {
        title: "Student Services",
        subHeading: "Celebrate Cultural Diversity",
        subtitle: "Bringing Together a Global Community",
        description: "AKGEC takes pride in its culturally diverse student body, fostering an inclusive environment for learning and collaboration.",
        buttonText: "Explore Diversity",
        image: "/image/student-services/main-banner-3.jpg",
    },
]

const studentService = [
    {
        id: 1,
        image: "/image/student-services/transport1.jpg",
        description: "Safety and added comfort, both are the prime concerns of AKG University."
    },
    {
        id: 2,
        image: "/image/student-services/yoga.jpg",
        description: "Yoga is a group of physical, mental, and spiritual practices that originated in ancient India."
    }
]


const StudentServices = () => {

    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [activeModal]);

    const handleModalOpen = (type) => {
        setActiveModal(type);
    };

    const handleModalClose = () => {
        setActiveModal(null);
    };

    return (
        <>
            <BannerSlider slides={slides} />
            <div className='max-w-7xl mx-auto py-8'>
                <h2 className='text-3xl font-novaSemi'>Exciting Student Journey at AKGEC University!</h2>
                <p className='mt-2 text-sm font-novaReg'>At AKGEC, the university experience is about embracing independence and personal growth. Our campus is fully equipped with everything you need—comfortable accommodation, diverse entertainment, dining options, and excellent sports facilities. With students from various Indian states and union territories, as well as an increasing global presence, AKGEC offers abundant opportunities for making lifelong friends, engaging in cultural exchange, and creating lasting memories.</p>
                <div className='py-20'>
                    <ul className='grid grid-cols-4 gap-4 '>
                        <li className='flex items-center justify-center group'>
                            <Link href="/about/hostel" className='flex flex-col items-center gap-2'>
                                <span>
                                    <img src="/image/icons/accommodation.png" alt="accommodation" />
                                </span>
                                <strong className='font-novaBold text-gray-500 group-hover:text-[#c75050]'>Home at AKGEC
                                </strong>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center group'>
                            <Link href="" className='flex flex-col items-center gap-2'>
                                <span>
                                    <img src="/image/icons/student-welfare.png" alt="student-welfare" />
                                </span>
                                <strong className='font-novaBold text-gray-500 group-hover:text-[#c75050]'>STUDENT WELFARE SERVICES</strong>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center group'>
                            <Link href="" className='flex flex-col items-center gap-2'>
                                <span>
                                    <img src="/image/icons/sports.png" alt="sports" />
                                </span>
                                <strong className='font-novaBold text-gray-500 group-hover:text-[#c75050]'>SPORTS</strong>
                            </Link>
                        </li>
                        <li className='flex items-center justify-center group'>
                            <Link href="" className='flex flex-col items-center gap-2'>
                                <span>
                                    <img src="/image/icons/cultural.png" alt="cultural" />
                                </span>
                                <strong className='font-novaBold text-gray-500 group-hover:text-[#c75050]'>CULTURAL</strong>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#0B4640]'>
                <div className='max-w-7xl mx-auto py-14 px-5 max-sm:px-3'>
                    <h2 className='text-3xl text-white font-novaBold'>More Services</h2>
                    <div className="grid max-[600px]:grid-cols-1 grid-cols-3 max-lg:grid-cols-2 gap-6 mt-10">
                        {studentService.map(({ id, description, image }) => (
                            <div key={id} className="bg-white rounded-md">
                                <div>
                                    <Image
                                        src={image}
                                        alt={image}
                                        width={400}
                                        height={200}
                                        className="w-full h-80 object-cover"
                                    />
                                </div>
                                <div className='p-5'>
                                    <p className="text-sm font-novaReg text-gray-600">{description}</p>
                                    <button className="mt-5 my-3 px-5 py-2.5 font-novaSemi border rounded-md text-sm tracking-widest bg-indigo-950 text-white hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out">Read more</button>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className='mt-5 text-white'>
                        <h2 className='text-3xl font-novaBold'>Department of Student Welfare</h2>
                        <div className='mt-7 flex items-start justify-between gap-5'>
                            <p className='text-xs'>Dial: +91-7290034978 <br /> Email: info@akgec.ac.in <br /> Mailing Address <br /><br />27th Km Milestone, <br />Delhi-Meerut Expressway, <br />P.O. Adhyatmik Nagar, <br />Ghaziabad - 201015
                            </p>
                            <div>
                                {/* Facility List */}
                                <ul className='flex items-center gap-10'>
                                    <li>
                                        <button onClick={() => handleModalOpen('banking')} className='flex flex-col items-center gap-2'>
                                            <span><img className='h-20 w-20' src="/image/icons/bank.png" alt="bank" /></span>
                                            <small className='text-[11px] uppercase'>Banking Facilities</small>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleModalOpen('fitness')} className='flex flex-col items-center gap-2'>
                                            <span><img className='h-20 w-20' src="/image/icons/gym.png" alt="gym" /></span>
                                            <small className='text-[11px] uppercase'>Fitness</small>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleModalOpen('eating')} className='flex flex-col items-center gap-2'>
                                            <span><img className='h-20 w-20' src="/image/icons/eat.png" alt="eat" /></span>
                                            <small className='text-[11px] uppercase'>Eating Joints</small>
                                        </button>
                                    </li>
                                </ul>
                                {activeModal && (
                                    <div className="fixed inset-0 z-[100] bg-black flex justify-center items-start pt-5">
                                        <div className="bg-white text-black p-6 rounded shadow-lg max-w-3xl w-full relative">
                                            <button
                                                onClick={handleModalClose}
                                                className="absolute top-2 right-7 text-2xl font-bold text-gray-500 hover:text-gray-800"
                                            >
                                                &#x2715; {/* Close icon */}
                                            </button>

                                            {activeModal === 'banking' && (
                                                <div>
                                                    <h2 className="text-lg font-novaBold mb-5">Banking Facilities</h2>
                                                    <p className='border-y border-gray-300 text-sm py-5'>
                                                        At AKGEC University, we provide the best banking facilities to our students. In order
                                                        to cater to their banking needs, we have on-campus, fully air-conditioned and fully computerized branches of the State Bank of India.
                                                    </p>
                                                </div>
                                            )}

                                            {activeModal === 'fitness' && (
                                                <div>
                                                    <h2 className="text-lg font-novaBold mb-5">Fitness</h2>
                                                    <p className='border-y border-gray-300 text-sm py-5'>
                                                        Our university is equipped with a modern gym and fitness center, accessible to all students, to help maintain their physical health.
                                                    </p>
                                                </div>
                                            )}

                                            {activeModal === 'eating' && (
                                                <div>
                                                    <h2 className="text-lg font-novaBold mb-5">Eating Joints</h2>
                                                    <p className='border-y border-gray-300 text-sm py-5'>
                                                        AKGEC campus has multiple food courts and cafeterias that serve a variety of healthy and delicious meals.
                                                    </p>
                                                </div>
                                            )}

                                            <button
                                                onClick={handleModalClose}
                                                className="mt-4 bg-red-700 float-right text-white px-4 py-2 uppercase font-novaBold rounded-lg"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StudentServices