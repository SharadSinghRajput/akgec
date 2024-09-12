"use client";

import React, { useState, useEffect, useRef } from "react";
import useScrollAndIntersection from "@/hooks/useScrollAndIntersection";
import { programFeatures, recruitmentPartners, sectionData } from "@/Json/OverviewData";
import { motion } from "framer-motion";

export default function Overview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { activeSection, translateX, translateY, sectionRefs } = useScrollAndIntersection();

  const logos = Array.from(
    { length: 10 },
    (_, i) => `/image/company-logos/logo${i + 1}.jpg`
  );

  return (
    <div>
      {/* Sticky Div */}
      <div
        className={`fixed z-20 top-52 left-[36%] bg-[#FFFFFF] 
          ${activeSection > 4 ? "hidden" : "block"} 
          max-xl:hidden`}
        style={{
          height: "75vh",
          transform: `translateY(${translateY}px) translateX(${translateX}px)`,
          width: "50vh",
          transition: "transform 0.4s ease-in-out",
        }}
      >
        <div className="h-full w-full px-5">
          {sectionData.map((section, index) => (
            activeSection === index && (
              <motion.div
                key={index}
                animate={{ y: 0 }}
                initial={{ opacity: 0, bottom: -500 }}
                whileInView={{ opacity: 1, scale: 1, bottom: 0 }}
                className="flex flex-col items-center justify-center px-5 h-full w-full py-10"
              >
                <h1 className="text-4xl font-normal text-center">
                  {section.title}
                </h1>
                {section.subtitle && (
                  <h2 className="text-green-500 w-60 text-center tracking-wide text-4xl uppercase">
                    {section.subtitle}
                  </h2>
                )}
                <p className="text-gray-700 text-[14px] font-novaReg mb-6 text-center mt-5">
                  {section.description}
                </p>
                {section.additionalText && (
                  <p className="text-gray-700 text-[14px] font-novaReg mb-6 text-center mt-5">
                    {section.additionalText}
                  </p>
                )}
                {section.buttonText && (
                  <button className="bg-[#d91f23] hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                    {section.buttonText}
                  </button>
                )}
              </motion.div>
            )
          ))}
        </div>
      </div>
      {/* Sections */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="h-screen max-xl:h-[75vh] relative flex justify-center items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center flex items-end pb-10 justify-center"
          style={{
            backgroundImage: "url('/image/about/about1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#2240c5] opacity-70"></div>

          <div className="hidden max-xl:block w-[95%] relative z-10">
            <div className=" h-full bg-white flex shadow-lg">
              <div className="text-center text-[14px] font-serif border-r border-gray-300 flex flex-col"></div>
              <div className="flex items-center justify-center w-full">
                <div className="max-xl:py-5 flex flex-col items-center justify-center h-full px-10">
                  <h1 className="text-3xl max-sm:text-2xl uppercase tracking-wide text-center">
                    Top University{" "}
                    <span className="text-green-500 max-sm:text-2xl text-3xl uppercase">
                      for Students
                    </span>
                  </h1>
                  <p className="text-gray-500 text-[14px] font-normal mb-6 text-center mt-5">
                    Ajay Kumar Garg Engineering College (AKGEC) is a
                    full-fledged engineering college affiliated with Dr. A.P.J.
                    Abdul Kalam Technical University (AKTU), Lucknow. It is
                    approved by the All India Council for Technical Education
                    (AICTE) and recognized for its right to offer undergraduate
                    and postgraduate degrees in engineering and technology.
                  </p>
                  <button className="bg-[#d91f23] hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className="h-screen max-md:h-full max-xl:py-5 flex max-xl:flex-col items-center pl-20 max-xl:pl-0 justify-start relative overflow-hidden max-xl:justify-center"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/about/about2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#28bcc7] opacity-70"></div>
        </div>
        <div className="hidden max-xl:block max-xl:w-[95%] w-[50%] relative z-10">
          <div className="h-full bg-white flex shadow-lg">
            <div className="flex items-center justify-center w-full">
              <div className="max-xl:py-5 flex flex-col items-center justify-center h-full px-10">
                <h1 className="text-4xl max-xl:text-3xl max-sm:text-2xl font-normal text-center mb-10 tracking-wide">
                  About AKGEC University
                </h1>
                <p className="text-center text-[13px]">
                  Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is
                  affiliated to Dr. A.P.J. Abdul Kalam Technical University,
                  Lucknow, and is approved by the All India Council for
                  Technical Education. The college was established in 1998 and
                  offers B.Tech courses in nine disciplines of Engineering
                  namely Computer Science and Engineering, Information
                  Technology, Computer Science, Computer Science & Information
                  Technology, Computer Science and Engineering (Artificial
                  Intelligence & Machine Learning), Computer Science and
                  Engineering (Data Science), Computer Science and Engineering
                  (Hindi), Artificial Intelligence & Machine Learning,
                  Electronics and Communication Engineering, Electrical and
                  Electronics Engineering, Mechanical Engineering and Civil
                  Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#56397d] px-6 py-8 ml-20  max-2xl:ml-5 max-xl:ml-0 shadow-md max-w-[95%] max-xl:w-full w-[600px] relative z-10 text-left overflow-hidden">
          <ul className="list-disc pl-5 text-white text-[13px] space-y-2">
            <li>
              AKGEC, Ghaziabad, is affiliated with Dr. A.P.J. Abdul Kalam
              Technical University, Lucknow, and approved by the AICTE.
            </li>
            <li>
              Established in 1998, the college offers B.Tech courses in nine
              engineering disciplines, including Computer Science, AI & ML,
              Electronics, Mechanical, and Civil Engineering. Some programs are
              accredited by NBA.
            </li>
            <li>
              The college offers M.Tech in several disciplines, including
              Electronics, Computer Science, Electrical, and Mechanical
              Engineering, along with an MCA program.
            </li>
            <li>
              AKGEC has received multiple accolades for academic performance,
              including the Academic Excellence Award for the Best Engineering
              College in UPTU for two consecutive years and the Chancellor’s
              Award for the highest B.Tech marks for five consecutive years.
            </li>
            <li>
              The 40-acre campus includes state-of-the-art laboratories,
              classrooms, a central library with over 100,000 books, and
              computing facilities with over 1400 networked computers.
            </li>
            <li>
              The campus includes Wi-Fi-enabled hostels with facilities like a
              library, gymnasium, and sports facilities for over 1500 students.
            </li>
            <li>
              The college is led by distinguished faculty and administrators,
              including the Director General, Dr. R.K. Agarwal, with
              qualifications from IIT Kanpur, C.I.T. Cranfield, UK, and IISc
              Bangalore.
            </li>
            <li>
              AKGEC emphasizes industry collaboration, with partnerships for
              student training, consultancy projects, and research in emerging
              technologies like Automation and Robotics.
            </li>
            <li>
              AKGEC maintains transparent policies and systems, setting high
              standards and goals in all its activities.
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className="h-screen relative max-xl:flex-col flex justify-center items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/about/about3.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#511ea3] opacity-70"></div>
        </div>
        <div className="hidden max-xl:block max-xl:w-[95%] w-[50%] relative z-10">
          <div className="h-full bg-white flex shadow-lg">
            <div className="flex items-center justify-center w-full">
              <div className="max-xl:py-5 flex flex-col items-center justify-center h-full px-10">
                <h1 className="text-4xl max-xl:text-3xl max-sm:text-2xl font-normal text-center mb-10">
                  AKG Engineering College
                </h1>
                <p className="text-center text-sm mb-5">
                  Ajay Kumar Garg Engineering College (AKGEC) is recognized and
                  actively participates as a member of various professional
                  associations.
                </p>
                <button className="bg-[#d91f23] mt-5 hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 w-1/2 relative z-10">
          {/* Circular Layout Container (visible on larger screens) */}
          <div className="relative flex items-center justify-between h-full max-xl:hidden">
            {/* Center Logo */}
            <img
              src="/image/company-logos/Akgec.png"
              alt="Center Logo"
              className="absolute w-40 h-40 p-3 bg-white rounded-full"
            />

            {/* Surrounding Logos */}
            {logos.map((logo, index) => {
              const angle = (index / logos.length) * 2 * Math.PI;
              const x = 240 * Math.cos(angle); // 240 is the radius of the circle
              const y = 240 * Math.sin(angle);

              return (
                <div
                  key={index}
                  className="absolute bg-white rounded-full flex items-center justify-center"
                  style={{
                    width: "120px",
                    height: "120px",
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="w-20 h-20 object-contain" // Prevents image stretching
                  />
                </div>
              );
            })}
          </div>

          {/* Grid Layout Container (visible on smaller screens) */}
          <div className="hidden mt-10 max-xl:grid max-xl:grid-cols-6 max-md:grid-cols-4 max-lg:grid-cols-5 max-xl:absolute max-xl:inset-0 max-xl:justify-items-center max-xl:place-content-center max-xl:gap-x-32 max-xl:gap-y-5 max-sm:grid-cols-3 max-sm:gap-x-20 max-sm:gap-y-2">
            {/* Surrounding Logos in Grid Layout */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="w-28 h-28 max-sm:w-20 max-sm:h-20 bg-white rounded-full flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-16 h-16 max-sm:w-14 max-sm:h-14 object-contain" // Prevents image stretching
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={(el) => (sectionRefs.current[3] = el)}
        className="max-xl:py-5 h-screen relative flex justify-center max-xl:flex-col max-xl:gap-10 items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/about/about4.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#c78f28] opacity-70"></div>
        </div>
        <div className="hidden max-xl:block max-xl:w-[95%] w-[50%] relative z-10">
          <div className="h-full bg-white flex shadow-lg">
            <div className="flex items-center justify-center w-full">
              <div className="max-xl:my-5 flex flex-col items-center justify-center h-full px-10">
                <h1 className="text-4xl max-xl:text-3xl max-sm:text-2xl font-normal text-center mb-10">
                  Leading Academic Institution
                </h1>
                <p className="mb-5 text-center text-sm">
                  Ajay Kumar Garg Engineering College (AKGEC) is ranked among
                  the leading and best educational institutions in North India.
                  AKGEC consistently ranks among the top engineering colleges in
                  Uttar Pradesh for its academic excellence, innovative teaching
                  methods, research achievements, and placement records, as
                  recognized by national and international accreditation bodies
                  and media outlets.
                </p>
                <p className="text-center text-sm">
                  Ajay Kumar Garg Engineering College (AKGEC) has established
                  itself as a leader in campus placements. The repeated visits
                  by top-tier multinational companies underscore AKGEC's
                  reputation as a premier institution with exceptional placement
                  opportunities in India.
                </p>
                <button className="bg-[#d91f23] mt-5 hover:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-64 max-sm:h-44 w-[70%] max-xl:w-full relative z-10 max-xl:flex max-xl:justify-center max-xl:items-center">
          <div className="w-1/2 max-xl:w-[70%] max-sm:w-full max-sm:mx-3 h-full bg-white flex rounded-lg shadow-lg">
            <div className="text-center text-[14px] font-serif border-r border-gray-300 flex flex-col">
              {programFeatures.map((item, index) => (
                <a
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-1 flex max-sm:text-xs items-center justify-center px-5 cursor-pointer ${activeIndex === index ? "bg-yellow-700" : ""
                    }`}
                >
                  {item.text}
                </a>
              ))}
            </div>
            <div className="w-2/3 flex items-center justify-center">
              <img
                src={programFeatures[activeIndex].imgSrc}
                alt={programFeatures[activeIndex].text}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (sectionRefs.current[4] = el)}
        className="h-screen relative flex max-xl:flex-col justify-center max-xl:items-center  items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('/image/about/about5.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#23aa98] opacity-80"></div>
        </div>
        <div className="max-xl:flex max-xl:justify-center max-xl:items-center w-[70%] max-xl:w-full relative z-10 text-white">
          <div className="h-full w-1/2 max-xl:w-full flex flex-col p-6">
            <h2 className="text-4xl max-sm:text-3xl font-novaReg max-xl:text-center mb-6">
              2023-24 Placement Successes
            </h2>
            <div className="flex justify-start gap-10 mb-6">
              <div className="text-center space-y-2">
                <p className="text-6xl max-sm:text-3xl font-slick">282</p>
                <p className="text-sm font-novaReg w-32">Highest Number of Companies</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-6xl max-sm:text-3xl font-slick">1406</p>
                <p className="text-sm font-novaReg w-32">Placement Offers</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-6xl max-sm:text-3xl font-slick">
                  33.80<span className="text-xl max-sm:text-lg">LPA</span>
                </p>
                <p className="text-sm font-novaReg w-32">Highest Package Offered</p>
              </div>
            </div>
            <div className="border-b border-gray-300 mb-6"></div>
            <p className="text-sm max-xl:text-center">
              Continuing the Tradition of Excellence, AKGEC Secures{" "}
              <span className="font-novaBold">1406</span> Placement Offers for{" "}
            </p>
          </div>
        </div>
        <div className="hidden max-xl:block h-80 max-xl:w-[95%] w-[50%] relative z-10">
          <div className="h-full bg-white flex shadow-lg">
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center h-full px-10">
                <h1 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-normal text-center uppercase">
                  Unblemished Placements
                </h1>
                <h1 className="text-4xl max-xl:text-3xl max-sm:text-xl font-normal text-center mb-10">
                  Batch of 2023-24
                </h1>
                <p className="text-center text-sm">
                  Ajay Kumar Garg Engineering College (AKGEC) has become an
                  undisputed leader in campus placements. The consistent
                  presence of top-tier companies highlights AKGEC's reputation
                  as the 'University with the Best Placements' in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={(el) => (sectionRefs.current[5] = el)}></div>
      <div className="h-full py-10 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl max-sm:text-2xl font-normal mb-4 leading-tight">
            Top Hiring Partners
          </h2>
          <p className="text-sm leading-6 mb-6">
            Institutional Alliances with Leading Companies to Foster Strong
            Industry Connections and More
          </p>
          <div className="mt-6">
            <ul className="flex flex-wrap justify-center space-x-4 max-sm:space-x-0 space-y-4">
              {recruitmentPartners.map((image, index) => (
                <li
                  key={index}
                  className="w-1/5 max-md:w-1/4 max-sm:w-1/3  px-8 py-6 max-lg:px-5 max-md:px-4 max-sm:px-3 text-center flex items-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`mx-auto`}
                    style={{ width: image.width }}
                  />
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="bg-red-500 text-white font-bold text-sm uppercase tracking-wider py-3 px-6 max-sm:text-xs rounded-lg inline-block mt-10 transition duration-200 ease-in-out hover:bg-sky-500"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
