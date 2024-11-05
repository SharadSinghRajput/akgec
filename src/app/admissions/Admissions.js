"use client";

import ScholarshipHighlight from "@/Components/ScholarshipHighlight";
import { useState } from "react";

const Admissions = () => {
  const [showUndergraduateCourses, setShowUndergraduateCourses] =
    useState(false);
  const [showPostgraduateCourses, setShowPostgraduateCourses] = useState(false);
  return (
    <>
      <section className="py-12 w-full">
          <div className="relative flex justify-center px-1 md:px-12 lg:px-24">
            <div className=" container max-w-full lg:max-w-[1400px] flex max-xl:flex-col-reverse gap-10">
              <div className="max-w-3xl max-2xl:max-w-xl max-xl:w-full px-2">
                <div className="mb-5">
                  <h1 className="text-xl font-novaReg mb-3">
                    AKG Engineering College
                    <br className="w-auto" />
                    <div className="">
                      <span className="text-5xl max-sm:text-3xl max-sm:py-0.5 py-1 inline-block font-novaReg lg:text-5xl bg-secondary text-center w-fit h-fit px-2.5">
                        Admissions
                      </span>
                    </div>
                  </h1>
                  <p className="bg-[#eeeeee] max-sm:leading-none max-sm:max-w-52 text-lg font-novaReg py-1 px-2.5 w-fit mb-4">
                    Apply for Admissions at AKG University
                  </p>
                </div>
                <p className="pb-4 max-sm:leading-none font-novaReg">
                  AKG College offers admissions for a wide range of programs
                  including B.Tech in Computer Science and Engineering (CSE) with
                  various specializations like Artificial Intelligence & Machine
                  Learning, Data Science. Other B.Tech programs include
                  Information Technology, Electronics and Communication
                  Engineering, Mechanical Engineering, Electrical and Electronics
                  Engineering, and Civil Engineering.
                </p>
                <p className="pb-4 max-sm:leading-none font-novaReg">
                  For postgraduate studies, AKG College offers M.Tech in Computer
                  Science and Engineering, Electrical and Electronics Engineering,
                  Electronics and Communication Engineering, and Mechanical
                  Engineering. The college also provides a Master of Computer
                  Applications (MCA) program, catering to advanced studies in
                  computer applications and many more...
                </p>
                <div className="border-l-4 border-[#fecc00] pl-5 max-w-full lg:max-w-[420px] mt-5">
                  <p className="mb-4 font-novaReg text-[18px] leading-[24px] italic">
                    Choose the program that interests you and make a wise decision
                    in your life
                  </p>
                </div>
              </div>
              <div className="absolute max-xl:static -top-96 right-40 max-w-md md:max-w-2xl xl:max-w-md mx-auto bg-white rounded-lg mt-8 lg:mt-0">
                <div className="bg-secondary rounded-t-lg flex justify-center items-center h-20">
                  <h1 className="w-full text-[27px] tracking-tight font-novaSemi ml-5 rounded-md">
                    Register Today
                  </h1>
                </div>
                <div className="p-10 max-sm:p-4">
                  <p className="text-xs font-novaReg mb-6 ">
                    Fill the registration form and get information regarding
                    different programs at AKG University or call us at 1800
                    1212 88800. Our experienced advisors are available 24*7.
                  </p>

                  <form action="#" method="POST">
                    <div className="mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border placeholder:text-black placeholder:text-sm border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full bg-secondary text-sm font-slick font-bold uppercase px-4 py-3 rounded-md hover:bg-indigo-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <section className="w-full pb-16 flex justify-center mt-10">
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
                  className="bg-secondary uppercase text-sm font-novaSemi w-full sm:w-48 text-center px-4 py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md hover:bg-blue-950 hover:text-white"
                >
                  Apply Now
                </a>
                <a
                  href="#"
                  id="undergraduate-program"
                  onMouseEnter={() => setShowUndergraduateCourses(true)}
                  onMouseLeave={() => setShowUndergraduateCourses(false)}
                  className="bg-white uppercase text-sm font-novaReg border border-black w-full sm:w-48 text-center text-black px-4 py-2 rounded-md hover:bg-blue-950 hover:text-white relative"
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
                  className="bg-secondary w-full uppercase text-sm font-novaSemi sm:w-48 text-center py-2.5 mb-2 sm:mb-0 sm:mr-2 rounded-md hover:bg-blue-950 hover:text-white"
                >
                  Apply Now
                </a>
                <a
                  href="#"
                  id="postgraduate-program"
                  onMouseEnter={() => setShowPostgraduateCourses(true)}
                  onMouseLeave={() => setShowPostgraduateCourses(false)}
                  className="bg-white border uppercase font-novaReg text-sm border-black w-full sm:w-48 text-center text-black py-2.5 rounded-md hover:bg-blue-950 hover:text-white relative"
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
      <ScholarshipHighlight />
      <section className=" max-w-7xl max-xl:max-w-5xl max-lg:max-w-2xl max-md:max-w-lg mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
            <div className="min-h-52 flex flex-col group">
              <h4 className="text-xl sm:text-2xl font-novaReg group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">Education Loan Facility</h4>
              <p className="py-2 max-sm:leading-none text-base font-novaReg">Get a loan of up to ₹4 lakh without any security. To take advantage of this facility, visit your nearest PNB or Indian Overseas Bank branch today.</p>
              <button className="my-3 w-fit px-5 py-2.5 font-novaReg border border-gray-200 rounded-md uppercase text-sm tracking-widest hover:bg-indigo-950 hover:text-white transition duration-300 ease-in-out">View More Details</button>
              <div className="mt-auto">
                <img className="w-full h-48 max-sm:h-40 object-cover" src="/image/admission/scholar.webp" alt="" />
              </div>
            </div>
            <div className="min-h-52 flex flex-col group">
              <h4 className="text-xl sm:text-2xl font-novaReg group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">AKG Advantages</h4>
              <p className="py-2 max-sm:leading-none text-base font-novaReg">Industry-Institute Interface: Bridging Academics with Transparent Learning and Objective Assessment</p>
              <button className="my-3 w-fit mt-auto px-5 py-2.5 font-novaReg border border-gray-200 rounded-md uppercase text-sm tracking-widest hover:bg-indigo-950 hover:text-white transition duration-300 ease-in-out">View More Details</button>
              <div className="mt-auto">
                <img className="w-full h-48 max-sm:h-40 object-cover" src="/image/admission/scholarship.webp" alt="" />
              </div>
            </div>
            <div className="min-h-52 flex flex-col group">
              <h4 className="text-xl sm:text-2xl font-novaReg group-hover:text-[#fecc00] transition-colors duration-300 ease-in-out">Why AKGU ?</h4>
              <p className="py-2 max-sm:leading-none text-base font-novaReg">History, Culture, Innovation, Technology, and more—AKGU University provides a diverse array of opportunities.</p>
              <button className="my-3 w-fit mt-auto px-5 py-2.5 font-novaReg border border-gray-200 rounded-md uppercase text-sm tracking-widest hover:bg-indigo-950 hover:text-white transition duration-300 ease-in-out">View More Details</button>
              <div className="mt-auto">
                <img className="w-full h-48 max-sm:h-40 object-cover" src="/image/admission/advantages.webp" alt="" />
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Admissions;