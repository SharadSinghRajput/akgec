import React, { useState, useEffect } from "react";
import Slider from 'react-slick';

const slides = [
    {
        title: 'Advanced Research Programs',
        description: `AKGEC University offers cutting-edge research programs in collaboration with leading institutions. Students can engage in groundbreaking projects and gain practical experience...`,
        points: [
            'Access to research labs and resources across various disciplines.',
            'Opportunities for publishing papers and presenting at conferences.',
            'Collaborations with global research institutions and tech companies.',
            'Support for innovative projects and entrepreneurial ventures.',
        ],
    },
    {
        title: 'Industry-Academia Partnerships',
        description: `AKGEC University has established partnerships with top industry players to bridge the gap between academic learning and real-world applications...`,
        points: [
            'Internships and co-op programs with leading companies.',
            'Guest lectures and workshops by industry experts.',
            'Curriculum designed in collaboration with industry needs.',
            'Placement assistance and career development programs.',
        ],
    },
    {
        title: 'State-of-the-Art Facilities',
        description: `Our campus is equipped with the latest facilities to enhance learning and research. From modern labs to advanced software tools, we provide a comprehensive environment for academic growth...`,
        points: [
            'High-tech laboratories and research centers.',
            'Access to advanced software and hardware resources.',
            'Well-equipped library with extensive digital and print collections.',
            'Innovative learning spaces and collaborative work areas.',
        ],
    },
    {
        title: 'Global Learning Opportunities',
        description: `AKGEC University provides numerous global learning opportunities, including exchange programs and international collaborations to broaden students' horizons...`,
        points: [
            'Student exchange programs with partner universities worldwide.',
            'International research collaborations and projects.',
            'Global internships and study abroad opportunities.',
            'Exposure to diverse cultures and global industry trends.',
        ],
    },
];

const sections = [
    {
        id: 'distinctive-pursuits',
        bgClass: 'bg-BG7',
        overlayClass: 'bg-yellow-400',
        title: 'Distinctive and Motivating Scholarly Pursuits',
        description: `At AKGEC University, we believe that all students should embrace their passion. We inspire the students to explore new ideas and immerse themselves in a journey of continuous learning and discovery.`,
        links: [
            { name: 'Institutes', href: '/' },
            { name: 'Programs (Courses)', href: '/' },
            { name: 'Academic Calendar', href: '/' },
            { name: 'List of Holidays', href: '/' },
            { name: 'Teaching Practices', href: '/' },
            { name: 'System of Evaluation', href: '/' },
            { name: 'AKG Advantages', href: '/' },
        ],
        image: null,
        imageAlt: null
    },
    {
        id: 'academic-philosophy',
        bgClass: 'bg-BG8',
        overlayClass: 'bg-red-500',
        title: 'Academic Philosophy: Shaping Your Path to Excellence',
        description: `Academic philosophy is more than just a framework; it's a commitment towards holistic growth. Through a flexible credit system it empowers students, with emphasis on innovation, entrepreneurship, and industry immersion.`,
        listItems: [
            'Human Values and Ethics - Holistic Education',
            'Flexible CBCS - Learner-Centric',
            'Industry Immersion - Real-world experiences',
            'Innovation & Entrepreneurship - Nurturing mindset',
        ],
        image: '/image/academic-overview/flexible-cbcs.png',
        imageAlt: 'Flexible CBCS Diagram'
    },
    {
        id: 'academic-focus',
        bgClass: 'bg-BG9',
        overlayClass: 'bg-cyan-700',
        title: 'Academic Focus: Shaping Your Future with Excellence',
        description: `AKGEC University's academic focus empowers students to tackle global challenges, blending deep domain expertise with practical skills.`,
        listItems: [
            '<b>Blend of Depth & Skill</b> - Expert faculty for in-depth knowledge, hands-on learning',
            '<b>Futuristic Interdisciplinary Programs</b> - Merging diverse fields for a broader perspective',
            '<b>Preparing Students</b> - Innovation, research, and high-paying jobs',
            '<b>Emerging Technologies</b> - AI, blockchain, renewables, with hands-on workshops',
            '<b>Inclusivity</b> - Embracing diverse communities',
        ],
        image: '/image/academic-overview/programs-tailored.png',
        imageAlt: 'Programs Tailored for Students'
    },
    {
        id: 'outcome-based-education',
        bgClass: 'bg-BG10',
        overlayClass: 'bg-[#483285]',
        title: 'Embracing Outcome-Based Education: Your Path to Empowerment',
        description: `Outcome-Based Education promises to empower students with a structured curriculum, continuous improvement, and personalized feedback.`,
        listItems: [
            '<b>Learning Outcomes</b> - Clearly defined goals',
            '<b>Curriculum & Instruction</b> - Tailored to student success',
            '<b>Assessment & Evaluation</b> - Progress tracking and mastery',
            '<b>Continuous Improvement</b> - Striving for excellence',
        ],
        image: '/image/academic-overview/project-learning.png',
        imageAlt: 'Project-Based Learning'
    },
    {
        id: 'curriculum-structure',
        bgClass: 'bg-BG7',
        overlayClass: 'bg-green-600',
        title: 'Curriculum Structure: Crafting Your Learning Journey',
        description: `Your education at AKGEC University isn't just about classrooms – it's about crafting a learning journey that equips students for success in a dynamic world.`,
        listItems: [
            '<b>Majors</b> - The Core Domain',
            '<b>Minors</b> - Super Specialise or Explore Beyond Domain',
            '<b>Skill Enhancement</b> - Refine Your Arsenal: Thrive with Skill Enhancement',
            '<b>Open Elective</b> - Unleash Curiosity, Discover New Passions',
            '<b>Value Added Courses</b> - Skills of Tomorrow, Today',
            '<b>Ability Enhancement</b> - Ignite Your Inner Brilliance',
            '<b>Internship / Training</b> - Experience, Evolve, Excel: Skills in Action',
            '<b>Value Education</b> - Values at Heart, Integrity in Action',
            '<b>Research Project / Dissertation</b> - Deepening Mastery: Unlocking New Horizons',
        ],
        image: '/image/academic-overview/scientific-tes.png',
        imageAlt: 'Tailored Learning for Future'
    },
    {
        id: 'evaluation-system',
        bgClass: 'bg-BG8',
        overlayClass: 'bg-[#483285]',
        title: 'Unlocking Your Potential: AKGEC University\'s Unique Evaluation System',
        description: `AKGEC University's evaluation system is your secret weapon for success. With continuous feedback, a holistic approach, personalized focus, and targeted assistance, it is designed to help you shine.`,
        listItems: [
            '<b>Continuous</b> - Ongoing, Real Time, Data Driven Insights',
            '<b>Comprehensive</b> - Holistic & In-Depth',
            '<b>Learner-Centered</b> - Individualized Focus',
            '<b>Remedial</b> - Targeted Improvement',
        ],
        image: '/image/academic-overview/project-learning.png',
        imageAlt: 'Tailored Learning for Future'
    },
];



const AcademicOverview = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <section className="overflow-hidden">
                <div className="bg-BG7 bg-fixed">
                    <div className="pt-[180px] pb-9 bg-yellow-400 bg-opacity-85">
                        <div className="w-full max-w-7xl mx-auto p-10">
                            <div className="flex max-sm:flex-col relative text-black -mx-3 w-full">
                                <article className="w-2/3 max-sm:w-full">
                                    <h1 className="text-[22px] lg:text-4xl mb-4 pt-2.5 font-novaReg uppercase">Innovative and Inspiring Academic Pathways</h1>
                                    <p className="mb-4 pb-2.5 text-sm font-novaReg max-w-2xl">
                                        <em>
                                            At AKGEC University, we are committed to providing a dynamic and transformative educational experience. Our aim is to empower students by encouraging exploration, fostering innovation, and supporting continuous growth through a diverse range of academic and extracurricular opportunities.
                                        </em>
                                    </p>
                                </article>
                                <aside className="px-3 w-1/3 max-sm:w-full">
                                    <div className="font-novaReg">
                                        <span className="mb-2 font-slick">
                                            <b>Discover More About</b>
                                        </span>
                                        <ul className="list-disc font-novaReg text-lg pl-4 mt-2.5 mb-4">
                                            <li className="mb-2.5 relative group w-fit">
                                                <a href="/" className="block transition-all duration-600 hover:border-b-2 hover:border-black border-b-2 border-transparent">
                                                    Academic Programs
                                                </a>
                                            </li>
                                            <li className="mb-2.5 relative group w-fit">
                                                <a href="/" className="block transition-all duration-300 hover:border-b-2 hover:border-black border-b-2 border-transparent">
                                                    Research Opportunities
                                                </a>
                                            </li>
                                            <li className="mb-2.5 relative group w-fit">
                                                <a href="/" className="block transition-all duration-300 hover:border-b-2 hover:border-black border-b-2 border-transparent">
                                                    Campus Facilities
                                                </a>
                                            </li>
                                            <li className="mb-2.5 relative group w-fit">
                                                <a href="/" className="block transition-all duration-300 hover:border-b-2 hover:border-black border-b-2 border-transparent">
                                                    Extracurricular Activities
                                                </a>
                                            </li>
                                            <li className="mb-2.5 relative group w-fit">
                                                <a href="/" className="block transition-all duration-300 hover:border-b-2 hover:border-black border-b-2 border-transparent">
                                                    Career Services
                                                </a>
                                            </li>
                                            <li className="mb-2.5 relative group w-fit">
                                                <a href="/" className="block transition-all duration-300 hover:border-b-2 hover:border-black border-b-2 border-transparent">
                                                    Alumni Network
                                                </a>
                                            </li>
                                            <li className="mb-2.5 relative group w-fit">
                                                <a href="/" className="block transition-all duration-300 hover:border-b-2 hover:border-black border-b-2 border-transparent">
                                                    Campus Life
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden">
                <div className="bg-BG8 bg-fixed bg-cover bg-center">
                    <div className="py-24 bg-red-500 bg-opacity-85">
                        <div className="w-full max-w-7xl mx-auto p-10">
                            <div className="flex justify-around max-sm:flex-col relative text-white -mx-3">
                                <div className="px-3 flex-shrink-0 max-sm:mx-auto">
                                    <img src="/image/academic-overview/flexible-cbcs.png" alt="Innovative Curriculum Diagram" className="lg:w-full md:w-36 sm:items-center sm:w-28 max-w-full item-center h-auto opacity-90 object-cover" />
                                </div>
                                <article className="px-3">
                                    <h2 className="text-[22px] mb-2 font-novaReg uppercase lg:text-4xl md:text-[26px] sm:text-[22px]">AKGEC's Academic Excellence: Pioneering Your Journey to Success</h2>
                                    <p className="mb-5 text-[14px] lg:text-[15px] md:text-[15px] sm:text-[15px] font-novaReg">
                                        At AKGEC University, our academic philosophy is designed to foster a comprehensive educational experience. We offer a diverse and adaptable curriculum that emphasizes critical thinking, creative problem-solving, and practical skills to prepare students for the dynamic demands of the professional world.
                                    </p>
                                    <ul className="list-disc text-[14px] lg:text-[15px] md:text-[15px] font-novaReg space-y-2 mb-4 mt-5">
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">Global Perspectives - Preparing for a globalized world</li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">Adaptive Learning - Tailored educational pathways</li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">Industry Collaboration - Bridging theory with practice</li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">Research and Innovation - Driving future advancements</li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="overflow-hidden">
                <div className="bg-BG9 bg-fixed">
                    <div className="py-6 bg-cyan-700 bg-opacity-80">
                        <div className="w-full max-w-7xl mx-auto p-10">
                            <div className="flex justify-around max-sm:flex-col relative text-white -mx-3">
                                <article className="px-3">
                                    <h2 className="text-[22px] mb-2 font-novaReg uppercase lg:text-4xl md:text-[26px] sm:text-[22px]">AKGEC's Academic Focus: Pioneering Your Path to Success</h2>
                                    <p className="mb-5 text-[15px] font-novaReg">At AKGEC University, our academic focus is designed to prepare students for the complexities of the modern world. We integrate deep knowledge with practical skills to ensure our graduates excel in their careers and contribute to societal advancement.</p>
                                    <ul className="list-disc font-novaReg space-y-2 mb-4 mt-5">
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Comprehensive Expertise</b> - World-class faculty provide both theoretical knowledge and practical application
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Innovative Program Design</b> - Cross-disciplinary courses that foster holistic learning
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Career-Ready Graduates</b> - Emphasis on research, industry engagement, and job placement
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Advanced Technology Integration</b> - Hands-on experience with cutting-edge technologies like AI and blockchain
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Inclusive Environment</b> - Welcoming and supportive community for students from all backgrounds
                                        </li>
                                    </ul>
                                </article>
                                <div className="px-3 flex-shrink-0 max-sm:mx-auto">
                                    <img src="/image/academic-overview/programs-tailored.png" alt="Programs Tailored for Students" className="lg:w-full md:w-36 sm:w-28 max-w-full item-center h-auto opacity-90 object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="overflow-hidden">
                <div className="bg-BG10 bg-fixed">
                    <div className="py-6 bg-[#483285] bg-opacity-85">
                        <div className="w-full max-w-7xl mx-auto p-10">
                            <div className="flex justify-around max-sm:flex-col relative text-white -mx-3">
                                <div className="px-3 flex-shrink-0 max-sm:mx-auto">
                                    <img src="/image/academic-overview/project-learning.png" alt="Project-Based Learning" className="lg:w-full md:w-36 sm:w-28 max-w-full item-center h-auto opacity-90 object-cover" />
                                </div>
                                <article className="px-3">
                                    <h2 className="text-[22px] mb-2 font-novaReg uppercase lg:text-4xl md:text-[26px] sm:text-[22px]">Embracing Outcome-Based Education: Your Path to Empowerment</h2>
                                    <p className="mb-5 text-[15px] font-novaReg">At AKGEC, Outcome-Based Education (OBE) is central to our teaching philosophy. We are committed to providing a structured learning experience that focuses on achieving specific educational outcomes through continuous feedback and improvement.</p>
                                    <ul className="list-disc font-novaReg space-y-2 mb-4 mt-5">
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Defined Learning Outcomes</b> - Clear objectives guiding student achievements
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Customized Curriculum</b> - Instruction designed to meet individual learning needs
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Comprehensive Assessment</b> - Regular evaluations to track progress and ensure mastery
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Focus on Improvement</b> - Commitment to refining educational methods and achieving excellence
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="overflow-hidden">
                <div className="bg-BG7 bg-fixed">
                    <div className="py-6 bg-green-600 bg-opacity-85">
                        <div className="w-full max-w-7xl mx-auto p-10">
                            <div className="flex justify-around max-sm:flex-col relative text-white -mx-3">
                                <article className="px-3">
                                    <h2 className="text-[22px] mb-2 font-novaReg uppercase lg:text-4xl md:text-[26px] sm:text-[22px]">Curriculum Structure: Crafting Your Learning Journey at AKGEC</h2>
                                    <p className="mb-5 text-[15px] font-novaReg">
                                        At AKGEC, we believe that education goes beyond traditional learning. Our curriculum is designed to equip students with the skills and knowledge required to excel in today’s competitive environment. We focus on a comprehensive approach that integrates both theoretical knowledge and practical experience.
                                    </p>
                                    <ul className="list-disc font-novaReg space-y-2 mb-4 mt-5">
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Majors</b> - Delve Deep into Core Subjects
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Minors</b> - Explore Additional Fields and Specializations
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Skill Enhancement</b> - Focused Programs to Enhance Practical Skills
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Open Elective</b> - Opportunities to Explore New Interests
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Value Added Courses</b> - Courses to Boost Career Readiness
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Ability Enhancement</b> - Programs to Develop Key Competencies
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Internship / Training</b> - Real-World Experience to Complement Learning
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Value Education</b> - Integrating Core Values into Education
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Research Project / Dissertation</b> - Advanced Projects to Foster Research Skills
                                        </li>
                                    </ul>
                                </article>
                                <div className="px-3 flex-shrink-0 max-sm:mx-auto">
                                    <img src="/image/academic-overview/scientific-tes.png" alt="Tailored Learning for Future" className="lg:w-full md:w-36 sm:w-28 max-w-full item-center h-auto opacity-90 object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="overflow-hidden">
                <div className="bg-BG8 bg-fixed">
                    <div className="py-6 bg-[#483285] bg-opacity-85">
                        <div className="w-full max-w-7xl mx-auto p-10">
                            <div className="flex justify-around max-sm:flex-col relative text-white -mx-3">
                                <div className="px-3 flex-shrink-0 max-sm:mx-auto">
                                    <img src="/image/academic-overview/project-learning.png" alt="Project-Based Learning" className="lg:w-full md:w-36 sm:w-28 max-w-full item-center h-auto opacity-90 object-cover" />
                                </div>
                                <article className="px-3">
                                    <h2 className="text-[22px] mb-2 font-novaReg uppercase lg:text-4xl md:text-[26px] sm:text-[22px]">Unlocking Your Potential: AKGEC's Innovative Evaluation System</h2>
                                    <p className="mb-5 text-[15px] font-novaReg">
                                        At AKGEC, our evaluation system is meticulously designed to foster student success through a blend of continuous assessment, personalized feedback, and comprehensive support. This approach ensures that every student can achieve their highest potential.
                                    </p>
                                    <ul className="list-disc font-novaReg space-y-2 mb-4 mt-5">
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Continuous Assessment</b> - Regular evaluations to provide timely insights into performance and progress.
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Holistic Approach</b> - Comprehensive assessment covering all aspects of student development.
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Personalized Feedback</b> - Tailored guidance to address individual strengths and areas for improvement.
                                        </li>
                                        <li className="ml-4 mb-2.5 pl-3 pb-2.5 leading-5">
                                            <b>Targeted Support</b> - Focused interventions to aid in overcoming specific challenges and enhancing learning outcomes.
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="overflow-hidden">
                <div className="w-full max-w-7xl mx-auto p-3 my-5">
                    <h2 className="text-4xl max-sm:text-2xl font-novaReg mb-2">Gain an Edge with Cutting-Edge Nanodegrees</h2>
                    <p className="mb-[25px] font-novaReg max-sm:leading-none">
                        Training and certification for in-demand skills not only complement your degree but also provide a valuable credential for your resume. A Nanodegree from CU and its partners offers certification across a range of skills—from foundational to advanced technologies—alongside your regular degree.
                    </p>
                    <div className="relative my-5">
                        <Slider {...settings} className="">
                            {slides.map((slide, index) => (
                                <div key={index} className="p-4">
                                    <h3 className="text-2xl font-novaReg mb-2">{slide.title}</h3>
                                    <p className="mb-4">{slide.description}</p>
                                    <ul className="list-disc pl-5">
                                        {slide.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
            </section>
        </>
    );
};

export default AcademicOverview;
