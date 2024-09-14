"use client";

import { useState } from "react";
import Header from "./Components/Header";

const Admissions = () => {
  const [showUndergraduateCourses, setShowUndergraduateCourses] =
    useState(false);
  const [showPostgraduateCourses, setShowPostgraduateCourses] = useState(false);
  return (
    <>
      <div className="bg-gray-100">
        <Header title={"B.Tech Program"} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
        <section className="py-12 w-full">
          <div className="flex justify-center px-4 md:px-12 lg:px-24">
            <div className="container max-w-full lg:max-w-[1300px] flex max-lg:flex-col-reverse gap-10">
              <div className="w-full px-3">
                <div className="mb-5">
                  <h1 className="text-xl mb-3">
                    AKG Engineering College
                    <br className="w-auto" />
                    <div className="mt-2">
                      <span className="text-3xl lg:text-5xl bg-red-600 text-white text-center w-fit h-fit px-2.5">
                        Admissions
                      </span>
                    </div>
                  </h1>
                  <p className="bg-slate-200 py-1 px-2.5 w-fit mb-4">
                    Apply for Admissions at AKG College
                  </p>
                </div>
                <p className="pb-4">
                  AKG College offers admissions for a wide range of programs
                  including B.Tech in Computer Science and Engineering (CSE) with
                  various specializations like Artificial Intelligence & Machine
                  Learning, Data Science. Other B.Tech programs include
                  Information Technology, Electronics and Communication
                  Engineering, Mechanical Engineering, Electrical and Electronics
                  Engineering, and Civil Engineering.
                </p>
                <p className="pb-4">
                  For postgraduate studies, AKG College offers M.Tech in Computer
                  Science and Engineering, Electrical and Electronics Engineering,
                  Electronics and Communication Engineering, and Mechanical
                  Engineering. The college also provides a Master of Computer
                  Applications (MCA) program, catering to advanced studies in
                  computer applications and many more...
                </p>
                <div className="border-l-4 border-red-600 pl-5 max-w-full lg:max-w-[420px] mt-5">
                  <p className="mb-4 text-[16px] lg:text-[18px] leading-[24px] italic">
                    Choose the program that interests you and make a wise decision
                    in your life
                  </p>
                </div>
              </div>
              <div className="w-full max-w-lg mx-auto bg-white border border-gray-300 rounded-lg shadow-lg mt-8 lg:mt-0">
                <div className="bg-red-600 rounded-t-lg flex justify-center items-center h-20">
                  <h1 className="w-full text-2xl tracking-wide font-normal ml-5 text-white rounded-md">
                    Register Today
                  </h1>
                </div>
                <div className="p-5">
                  <p className="text-xs text-black mb-6 ">
                    Fill the registration form and get information regarding
                    different programs at Chandigarh University or call us at 1800
                    1212 88800. Our experienced advisors are available 24*7.
                  </p>

                  <form action="#" method="POST">
                    <div className="mb-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border placeholder:font-serif placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border placeholder:font-serif placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border placeholder:font-serif placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        How old are you?
                      </label>
                      <div className="flex space-x-2">
                        <select
                          id="day"
                          name="day"
                          className="w-1/3 px-4 py-2 border placeholder:font-serif placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="" disabled selected>
                            DD
                          </option>
                          {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                        <select
                          id="month"
                          name="month"
                          className="w-1/3 px-4 py-2 border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="" disabled selected>
                            MM
                          </option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {new Date(0, i).toLocaleString("en", {
                                month: "long",
                              })}
                            </option>
                          ))}
                        </select>
                        <select
                          id="year"
                          name="year"
                          className="w-1/3 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="" disabled selected>
                            YYYY
                          </option>
                          {Array.from({ length: 100 }, (_, i) => (
                            <option key={i} value={2023 - i}>
                              {2023 - i}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="program"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Choose Your Interested Program
                      </label>
                      <select
                        id="program"
                        name="program"
                        className="w-full px-4 py-2 border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="" disabled selected>
                          Select your program
                        </option>
                        <option value="engineering">Engineering</option>
                        <option value="business">Business Administration</option>
                        <option value="arts">Arts & Humanities</option>
                        <option value="science">Science</option>
                        <option value="law">Law</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 border placeholder:font-serif placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter any additional information"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="w-full bg-red-600 text-sm font-serif uppercase text-white px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pb-16 flex justify-center">
          <div className="container max-w-full lg:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 max-sm:mx-5">
            {/* Undergraduate Programs */}
            <div className="relative w-full h-[342px] flex flex-col items-center justify-between">
              <div className="group bg-white border border-gray-300 rounded-lg shadow-lg w-full h-full flex flex-col items-center justify-center transition-transform duration-100 ease-in-out hover:bg-blue-950 relative">
                <img
                  src="/image/admission/admission-icon-cap-black.webp"
                  alt="dynamic"
                  className="object-cover w-20 max-sm:w-16 max-sm:mb-20 mb-16 transition-opacity duration-100 ease-in-out group-hover:opacity-0"
                />
                <img
                  src="/image/admission/admission-icon-cap-white.webp"
                  alt="dynamic"
                  className="absolute w-20 max-sm:w-16 max-sm:mb-20 mb-16 inset-x-auto inset-y-auto object-cover opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100"
                />
                <h2 className="text-xl font-bold max-sm:font-semibold text-black group-hover:text-white absolute bottom-20">
                  Undergraduate Programs
                </h2>
                <p className="text-black max-sm:text-sm text-center group-hover:text-white absolute bottom-6">
                  Explore our
                  <br />
                  Undergraduate programs
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-evenly mt-4 w-full">
                <a
                  href="#"
                  className="bg-red-600 w-full sm:w-48 text-center text-white px-4 py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md hover:bg-blue-950"
                >
                  Apply Now
                </a>
                <a
                  href="#"
                  id="undergraduate-program"
                  onMouseEnter={() => setShowUndergraduateCourses(true)}
                  onMouseLeave={() => setShowUndergraduateCourses(false)}
                  className="bg-white border border-black w-full sm:w-48 text-center text-black px-4 py-2 rounded-md hover:bg-blue-950 relative"
                >
                  Our Program
                  {showUndergraduateCourses && (
                    <div className="absolute bottom-12 text-black left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
                      <h3 className="text-lg font-bold">Undergraduate Courses</h3>
                      <ul>
                        <li>Bachelor of Science in Computer Science</li>
                        <li>Bachelor of Arts in Psychology</li>
                        <li>Bachelor of Business Administration</li>
                        <li>Bachelor of Fine Arts</li>
                      </ul>
                    </div>
                  )}
                </a>
              </div>
            </div>

            {/* Postgraduate Programs */}
            <div className="relative w-full h-[342px] flex flex-col items-center justify-between">
              <div className="group bg-white border border-gray-300 rounded-lg shadow-lg w-full h-full flex flex-col items-center justify-center transition-transform duration-100 ease-in-out hover:bg-blue-950 relative">
                <img
                  src="/image/admission/admission-icon-cap-black.webp"
                  alt="dynamic"
                  className="object-cover w-20 max-sm:w-16 max-sm:mb-20 mb-16 transition-opacity duration-100 ease-in-out group-hover:opacity-0"
                />
                <img
                  src="/image/admission/admission-icon-cap-white.webp"
                  alt="dynamic"
                  className="absolute w-20 max-sm:w-16 max-sm:mb-20 mb-16 inset-x-auto inset-y-auto object-cover opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100"
                />
                <h2 className="text-xl font-bold max-sm:font-semibold text-black group-hover:text-white absolute bottom-20">
                  Postgraduate Programs
                </h2>
                <p className="text-black max-sm:text-sm text-center group-hover:text-white absolute bottom-6">
                  Explore our
                  <br />
                  Postgraduate programs
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-evenly mt-4 w-full">
                <a
                  href="#"
                  className="bg-red-600 w-full sm:w-48 text-center text-white py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md hover:bg-blue-950"
                >
                  Apply Now
                </a>
                <a
                  href="#"
                  id="postgraduate-program"
                  onMouseEnter={() => setShowPostgraduateCourses(true)}
                  onMouseLeave={() => setShowPostgraduateCourses(false)}
                  className="bg-white border border-black w-full sm:w-48 text-center text-black py-2.5 rounded-md hover:bg-blue-950 relative"
                >
                  Our Program
                  {showPostgraduateCourses && (
                    <div className="absolute bottom-12 text-black bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
                      <h3 className="text-lg font-bold">Postgraduate Courses</h3>
                      <ul>
                        <li>Master of Business Administration</li>
                        <li>Master of Science in Engineering</li>
                        <li>Master of Arts in Education</li>
                        <li>Doctorate in Philosophy</li>
                      </ul>
                    </div>
                  )}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative grid grid-cols-2 max-lg:grid-cols-1 h-[80vh]">
          <div className=" bg-no-repeat bg-cover max-lg:h-screen max-sm:min-h-[180%] bg-[url('https://www.cuchd.in/admissions/images/early-bird-bg.jpg')] bg-red-700 bg-blend-multiply">
            <div className="flex justify-center items-center max-lg:justify-start max-lg:items-start max-lg:mt-10 max-lg:ml-10  h-full">
              <div className="">
                <h2 className="text-white text-5xl max-md:text-4xl leading-12 uppercase tracking-wide font-normal">
                  Early Bird <br />
                  Scholarship
                </h2>
                <p className="text-white text-base leading-6 my-3">
                  For PG Students for the Academic <br />
                  Year 2023-2024
                </p>
                <a
                  href=""
                  className="border bg-white text-black text-center inline-block rounded-md uppercase tracking-wide py-[14px] px-6 text-sm hover:bg-[#1c1f52] hover:text-white transition ease-in-out duration-200"
                >
                  Read Policy
                </a>
              </div>
            </div>
          </div>
          <div className="max-lg:absolute max-lg:top-72 max-md:-left-10 flex justify-start items-start mx-10 mt-10 ">
            <div className=" ">
              <div className="mx-5 bg-[#f9f9f9] border w-80 max-md:w-full border-gray-300 shadow-lg">
                <div className=" text-center bg-white py-3">
                  <img
                    src="/image/akg-new.png"
                    alt="logo"
                    className="inline-block w-52 max-lg:w-40 mb-2"
                  />
                  <span className="block w-fit mx-auto bg-[#fbe8e9] text-[16px] uppercase text-center py-0 px-2.5 mt-1.5">
                    B.Tech [For I, II, III and IV Year]
                  </span>
                  <p className="text-sm mt-2">AIR in JEE Examination</p>
                  <p className="text-sm mt-2">Scholarship</p>
                </div>
                <div className="py-5 px-16 max-lg:px-10">
                  <ul className="list-none pl-0 space-y-6 max-lg:space-y-3">
                    <li className="relative text-sm leading-[16px] mb-3">
                      1 – 10,000:
                      <b>
                        <br />
                        Equivalent to 100% of Tuition Fees
                      </b>
                    </li>
                    <li className="relative text-sm leading-[16px] mb-3">
                      10,001 – 15,000:
                      <b>
                        <br />
                        Equivalent to 75% of Tuition Fees
                      </b>
                    </li>
                    <li className="relative text-sm leading-[16px] mb-3">
                      15,001 – 20,000:
                      <b>
                        <br />
                        Equivalent to 50% of Tuition Fees
                      </b>
                    </li>
                    <li className="relative text-sm leading-[16px] mb-3">
                      20,001 – 25,000:
                      <b>
                        <br />
                        Equivalent to 25% of Tuition Fees
                      </b>
                    </li>
                  </ul>
                </div>
                <div className="py-5 px-10">
                  <a
                    href=""
                    className="border bg-red-600 text-white text-center inline-block rounded-md uppercase tracking-wide py-3 w-full text-sm hover:bg-blue-950 transition ease-in-out duration-200"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="max-sm:absolute max-sm:top-[570px]">
              <div className="mx-5 bg-[#f9f9f9] border max-md:w-full w-80 border-gray-300 shadow-lg ">
                <div className=" text-center bg-white py-3">
                  <img
                    src="/image/akg-new.png"
                    alt="logo"
                    className="inline-block w-52 max-lg:w-40 mb-2"
                  />
                  <span className="block w-fit mx-auto bg-[#fbe8e9] text-[16px] uppercase text-center py-0 px-2.5 mt-1.5">
                    MCA [For I and II Year]
                  </span>
                  <p className="text-sm mt-2">AIR in CUET PG Examination</p>
                  <p className="text-sm mt-2">Scholarship</p>
                </div>
                <div className="py-5 px-16 max-lg:px-10">
                  <ul className="list-none pl-0 space-y-6 max-lg:space-y-3">
                    <li className="relative text-sm leading-[16px] mb-3">
                      1 – 100:
                      <br />
                      <b>Equivalent to 100% of Tuition Fees</b>
                    </li>
                    <li className="relative text-sm leading-[16px] mb-3">
                      101 – 250:
                      <b>
                        <br />
                        Equivalent to 75% of Tuition Fees
                      </b>
                    </li>
                    <li className="relative text-sm leading-[16px] mb-3">
                      251 – 500:
                      <b>
                        <br />
                        Equivalent to 50% of Tuition Fees
                      </b>
                    </li>
                    <li className="relative text-sm leading-[16px] mb-3">
                      501 – 750:
                      <b>
                        <br />
                        Equivalent to 25% of Tuition Fees
                      </b>
                    </li>
                  </ul>
                </div>
                <div className="py-5 px-10">
                  <a
                    href=""
                    className="border bg-red-600 w-full text-white text-center inline-block rounded-md uppercase tracking-wide py-3 px-6 text-sm hover:bg-blue-950 transition ease-in-out duration-200"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-12 max-sm:py-0 pb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 -mx-4">
              <div className="w-full px-4 mb-8 max-sm:mb-0 max-sm:border-b max-sm:pb-5">
                <div className="rounded-lg overflow-hidden">
                  <div className="p-6 max-lg:px-0 max-sm:px-0">
                    <h4 className="text-xl font-medium text-gray-900 mb-4">Scholarship Facility</h4>
                    <p className="text-gray-700 max-sm:text-sm mb-6">This policy outlines the scholarship program for students securing an All India Rank (AIR) up to 25,000 in the Joint Entrance Examination (JEE) for admission.</p>
                    <a href="#" className="inline-block py-3 px-6 max-sm:px-5 max-sm:py-2 max-sm:text-xs text-sm font-medium text-center text-white bg-red-600 hover:bg-blue-950 rounded transition duration-200">View More Details</a>
                  </div>
                  <img src="image/admission/scholar.webp" alt="Scholarship Facility" width={500} height={300} className="w-full rounded-lg" />
                </div>
              </div>

              <div className="w-full px-4 mb-8 max-sm:mb-0 max-sm:border-b max-sm:pb-5">
                <div className="rounded-lg overflow-hidden">
                  <div className="p-6 max-lg:px-0 max-sm:px-0">
                    <h4 className="text-xl font-medium text-gray-900 mb-4">AKG Advantages</h4>
                    <p className="text-gray-700 max-sm:text-sm mb-6">AKG University - Bridging academia and industry through transparent learning, objective assessments, and innovative collaboration.</p>
                    <a href="#" className="inline-block py-3 px-6 max-md:mt-5 max-sm:mt-0 max-sm:px-5 max-sm:py-2 max-sm:text-xs text-sm font-medium text-center text-white bg-red-600 hover:bg-blue-950 rounded transition duration-200">View More Details</a>
                  </div>
                  <img src="/image/admission/advantages.webp" alt="AKG Advantages" width={500} height={300} className="w-full rounded-lg" />
                </div>
              </div>

              <div className="w-full px-4 mb-8 max-sm:mb-0 max-sm:border-b max-sm:pb-5">
                <div className="rounded-lg overflow-hidden">
                  <div className="p-6 max-lg:px-0 max-sm:px-0">
                    <h4 className="text-xl font-medium text-gray-900 mb-4">Why AKG?</h4>
                    <p className="text-gray-700 max-sm:text-sm mb-6">We strive to provide and maintain an academic environment and systems, enabling maximum learning to produce competent professionals.</p>
                    <a href="#" className="inline-block py-3 px-6 max-sm:px-5 max-sm:py-2 max-sm:text-xs text-sm font-medium text-center text-white bg-red-600 hover:bg-blue-950 rounded transition duration-200">View More Details</a>
                  </div>
                  <img src="image/Building2.jpg" alt="Why AKG?" width={500} height={300} className="w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admissions;