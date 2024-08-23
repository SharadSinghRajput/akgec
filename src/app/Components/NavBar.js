"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars2Icon,
  ChevronDownIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const products = [{ icon: ChartPieIcon }, { icon: CursorArrowRaysIcon }];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled100, setIsScrolled100] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [BigMenuToggle, setBigMenuToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled100(scrollY > 100);
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-50 w-full fixed top-0 left-0 ${
        isScrolled100 ? "bg-blue-900" : ""
      } transition-all duration-200`}
    >
      <div className="grid grid-cols-8 max-lg:grid-cols-3">
        <div className="col-span-2 flex max-lg:col-span-1 max-sm:col-span-2">
          <div
            className={`text-white p-2 max-sm:py-0 ${
              isScrolled ? "" : "bg-white/10 backdrop-blur-3xl"
            } `}
          >
            <div className="flex gap-3">
              <div className="flex justify-center">
                <img
                    src="/image/akg-new.png"
                    alt="Chandigarh University Logo"
                    className="h-16 w-full object-contain bg-white px-2"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/image/slider-home/naac-a-logo.webp"
                  alt="Chandigarh University Logo"
                  className="h-20 w-full object-contain"
                />
              </div>
            </div>
            <div hidden={isScrolled} className="max-lg:hidden">
              <div className="flex items-center ">
                <div className="flex-grow border-t border-white opacity-60"></div>
                <p className="mx-4 text-center opacity-60 text-[8px] ">
                  Notification
                </p>
                <div className="flex-grow border-t border-white  opacity-60"></div>
              </div>
              <p className="mx-4 font-extralight py-2 text-center text-[10px]">
                The college was established in 1998 and offers B.Tech Courses in
                all major disciplines of Engineering.
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden max-lg:col-span-1 max-md:col-span-2 max-sm:col-span-1 max-md:justify-end max-md:mr-5 justify-center">
          <button
            type="button"
            onClick={() => setBigMenuToggle(!BigMenuToggle)}
            className="-m-2 flex flex-col items-center justify-center rounded-md p-2 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon aria-hidden="true" className="h-9 w-9" />
            <p className="text-xs uppercase -mt-1">Menu</p>
          </button>
        </div>
        <div className="col-span-6 max-lg:col-span-1 max-md:col-span-2 max-lg:flex max-lg:items-center">
          <nav className="px-5 ">
            <div
              className={` lg:flex lg:gap-x-8 justify-around items-center  py-2 ${
                isScrolled ? "" : "pt-4"
              }`}
            >
              <div className="hidden lg:flex gap-4 justify-start">
                <a
                  href="#"
                  className="text-xs leading-6 uppercase text-white font-light"
                >
                  Campus
                </a>
                <a
                  href="#"
                  className="text-xs leading-6 uppercase text-white font-light"
                >
                  Library
                </a>
                <a
                  href="#"
                  className="text-xs leading-6 uppercase text-white font-light"
                >
                  Student Services
                </a>
                <a
                  href="#"
                  className="text-xs leading-6 uppercase text-white font-light"
                >
                  Contact us
                </a>
              </div>
              <div className="flex justify-center max-md:justify-start gap-4">
                <div
                  className={`flex items-center justify-center transition-all ${
                    isScrolled ? "px-2 py-1" : "p-2"
                  } bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full max-w-md mx-auto max-md:mx-0`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`bg-white  p-2 rounded-full flex items-center justify-center`}
                    >
                      <PhoneIcon
                        className={`${
                          isScrolled ? "h-3 w-3" : "h-5 w-5"
                        } text-cyan-500`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="">
                      <p
                        className={`text-white  ${
                          isScrolled ? "text-[10px]" : "text-xs"
                        }`}
                      >
                        Admission Helpline
                      </p>
                      <p
                        className={`text-white font-bold  ${
                          isScrolled ? "text-sm" : "text-base"
                        }`}
                      >
                        1800121288800
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ml-3">
                    <button className="text-white p-2 rounded-full hover:bg-blue-700">
                      {/* Button content */}
                    </button>
                    <Bars3Icon
                      className="text-white mr-2 h-6"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {/* <div className="lg:hidden flex items-center ml-3">
                                    <button onClick={} className="text-white p-2 rounded-full hover:bg-blue-700">
                                        <Bars3Icon className="text-white mr-2 h-6" aria-hidden="true" />
                                    </button>
                                </div> */}

                {/* <div className="flex justify-center items-center mt-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div> */}
              </div>
            </div>
            <ul
              className={`${
                BigMenuToggle
                  ? "fixed w-full h-full left-0 top-0 bg-blue-800 pt-10"
                  : `hidden relative ${isScrolled ? "py-1" : "py-3 mt-4"}`
              }  lg:flex items-center text-black font-semibold text-sm bg-white/10
                                        backdrop-blur-xl px-5 rounded-lg backdrop-contrast-125`}
            >
              {BigMenuToggle ? (
                <>
                  <button
                    onClick={() => setBigMenuToggle(!BigMenuToggle)}
                    className="mb-4 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </>
              ) : null}
              <li className="relative group">
                <button className="px-3 py-2 focus:outline-none text-white text-xs ">
                  ABOUT
                </button>
                <div
                  className={`${
                    BigMenuToggle ? "relative w-full" : "absolute w-[900px]"
                  } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 max-md:col-span-3 pr-4 p-0 group-hover:p-5 transition-all">
                      <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                        <div className="w-1/2 pr-4 max-md:w-full">
                          <h3 className="font-bold text-md">WHO WE ARE</h3>
                          <ul className="mt-2">
                            <li className="py-1 hover:underline font-normal text-xs">Vision And Mission</li>
                            <li className="py-1 hover:underline font-normal text-xs">Director General</li>
                            <li className="py-1 hover:underline font-normal text-xs">Director</li>
                            <li className="py-1 hover:underline font-normal text-xs">Management</li>
                            <li className="py-1 hover:underline font-normal text-xs">Important Functionaries</li>
                            <li className="py-1 hover:underline font-normal text-xs">Approvals by Statutory Bodies</li>
                            <li className="py-1 hover:underline font-normal text-xs">NBA Accreditation</li>
                            <li className="py-1 hover:underline font-normal text-xs">AICTE Approval Letters</li>
                          </ul>
                        </div>
                        <div className="w-1/2">
                          <div>
                            <h3 className="font-bold text-md">VISUAL TOUR</h3>
                            <ul className="mt-2">
                              <li className="py-1 hover:underline font-normal text-xs">  Academic Complex
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Hostel
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Centres Of Excellence
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Faith Centre
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Support Facilities
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Stationary Shop
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  College Canteen
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <div>
                            <h3 className="font-bold text-md">RELATED LINKS</h3>
                            <ul className="mt-2">
                              <li className="py-1 hover:underline font-normal text-xs">  AKGEC Visual Tour
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Centre of Excellence Visual Tour
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Mandatory Disclosure
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  NIRF Data for Ranking
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Grievance Committee
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Organisation Chart
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Testimonials
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Gallery
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 max-md:hidden">
                      <div className="bg-About ">
                        <div className="flex flex-col items-center p-4">
                          <p className="flex flex-col">
                            <span className="text-center font-normal text-base text-white">
                              AKG Univercity
                            </span>
                            <span className="text-center font-bold text-lg text-cyan-500">
                              Best Educational
                            </span>
                            <span className="text-center font-normale text-base text-white">
                              Institution
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6]">
                          <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-l border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group">
                <button className="px-3 py-2 focus:outline-none text-white text-xs">
                PROGRAMS
                </button>
                <div
                  className={`${
                    BigMenuToggle ? "relative w-full" : "absolute w-[900px]"
                  } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all bg-white
                                    text-black rounded-lg shadow-lg`}
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 max-md:col-span-3 pr-4 p-0 group-hover:p-5 transition-all">
                      <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                        <div className="w-1/2 pr-4 max-md:w-full ">
                          <h3 className="font-bold text-md">DEPARTMENTS</h3>
                          <ul className="mt-2">
                            <li className="py-1 hover:underline font-normal text-xs">Applied Sciences & Humanities</li>
                            <li className="py-1 hover:underline font-normal text-xs">Civil Engineering</li>
                            <li className="py-1 hover:underline font-normal text-xs">Computer Science and Engineering</li>
                            <li className="py-1 hover:underline font-normal text-xs">Electronics and Communication Engineering</li>
                            <li className="py-1 hover:underline font-normal text-xs">Electrical and Electronics Engineering</li>
                            <li className="py-1 hover:underline font-normal text-xs">Information Technology</li>
                            <li className="py-1 hover:underline font-normal text-xs">Mechanical Engineering</li>
                            <li className="py-1 hover:underline font-normal text-xs">Master of Computer Applications</li>
                          </ul>
                        </div>
                        <div className="w-1/2 max-md:w-full">
                          <div>
                            <h3 className="font-bold text-md">PROGRAMS</h3>
                            <ul className="mt-2">
                              <li className="py-1 hover:underline font-normal text-xs">  UG Courses
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  PG Courses
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Online Courses
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Certification
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full relative max-md:hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-lg shadow-md"
                        style={{
                          backgroundImage:
                            "url('/image/slider-home/asfdasda.jpg')",
                        }}
                      >
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                      </div>
                      <div className="relative z-10 p-6 text-white">
                        <h3 className="text-sm font-light">University with</h3>
                        <h2 className="text-2xl font-bold text-blue-300">
                          Best Placements
                        </h2>
                        <div className="space-y-2 mt-4">
                          <div className="bg-blue-500 w-max p-2 rounded-md">
                            <h3 className="text-xl font-bold">9124</h3>
                            <p className="text-xs">PLACEMENTS</p>
                          </div>
                          <p className="text-xs">Offered in Batch 2023-24</p>
                          <div className="bg-blue-500 w-max p-2 rounded-md">
                            <h3 className="text-xl font-bold">1.7 CR</h3>
                            <p className="text-xs">INTERNATIONAL</p>
                          </div>
                          <p className="text-xs">Highest Package Offered</p>
                          <div className="bg-blue-500 p-2 w-max rounded-md">
                            <h3 className="text-xl font-bold">54.75 LPA</h3>
                            <p className="text-xs">NATIONAL</p>
                          </div>
                          <p className="text-xs">Highest Package Offered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button className="px-3 py-2 focus:outline-none text-white text-xs">
                  ACADEMICS
                </button>
                <div
                  className={`${
                    BigMenuToggle ? "relative w-full" : "absolute w-max"
                  } left-0 h-0  mt-5 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="grid grid-cols-2 ">
                    <div className="col-span-1 max-md:col-span-2 pr-4 p-0 group-hover:p-5 transition-all">
                      <div className="full pr-4 max-md:max-h-72 max-md:overflow-y-scroll">
                        <h3 className="font-bold text-md">ACADEMICS</h3>
                        <ul className="mt-2">
                          <li className="py-1 hover:underline font-normal text-xs">Academic Calendar</li>
                          <li className="py-1 hover:underline font-normal text-xs">List of Holidays</li>
                          <li className="py-1 hover:underline font-normal text-xs">AKGEC Digital School</li>
                          <li className="py-1 hover:underline font-normal text-xs">Syllabus</li>
                          <li className="py-1 hover:underline font-normal text-xs">Policy and Process for Refund of Caution Money</li>
                          <li className="py-1 hover:underline font-normal text-xs">Educational Verification</li>
                          <li className="py-1 hover:underline font-normal text-xs">Issuance of certificates for passout students</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-1 max-md:hidden">
                      <div className="bg-About ">
                        <div className="flex flex-col items-center p-4">
                          <p className="flex flex-col">
                            <span className="text-center font-normal text-base text-white">
                              AKG Univercity
                            </span>
                            <span className="text-center font-bold text-lg text-cyan-500">
                              Best Educational
                            </span>
                            <span className="text-center font-normale text-base text-white">
                              Institution
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6]">
                          <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-l border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button className="px-3 py-2 focus:outline-none text-white text-xs">
                  ADMISSIONS
                </button>
                <div
                  className={`${
                    BigMenuToggle ? "relative w-full" : "absolute w-max"
                  } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="flex group-hover:p-4 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col max-md:gap-5">
                    <div className="w-52">
                      <div>
                        <h3 className="font-bold text-md">ADMISSIONS</h3>
                        <ul className="mt-2">
                          <li className="py-1 hover:underline font-normal text-xs">Courses Offered</li>
                          <li className="py-1 hover:underline font-normal text-xs">Admission</li>
                          <li className="py-1 hover:underline font-normal text-xs">Fee Structure for New Students</li>
                          <li className="py-1 hover:underline font-normal text-xs">Admissions through UPTAC Counselling</li>
                          <li className="py-1 hover:underline font-normal text-xs">Fee Structure for Existing Students</li>
                          <li className="py-1 hover:underline font-normal text-xs">Fee Refund Norms</li>
                          <li className="py-1 hover:underline font-normal text-xs">Scholarship</li>
                          <li className="py-1 hover:underline font-normal text-xs">Admission Brochure 2024-25</li>
                          <li className="py-1 hover:underline font-normal text-xs">Information Booklet 2024-25</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-52 pr-4">
                      <h3 className="font-bold text-md">AKGEC Programs</h3>
                      <ul className="mt-2">
                        <li className="py-1 hover:underline font-normal text-xs">
                          B.Tech Programs
                        </li>
                        <li className="py-1 hover:underline font-normal text-xs">
                          M.Tech Programs
                        </li>
                        <li className="py-1 hover:underline font-normal text-xs">
                          MCA Programs
                        </li>
                        <li className="py-1 hover:underline font-normal text-xs">
                          Industry-Academia Collaborations
                        </li>
                        <li className="py-1 hover:underline font-normal text-xs">
                          Research & Development
                        </li>
                      </ul>
                    </div>
                    <div className="w-52">
                      <div>
                        <ul className="mt-2">
                          <li className="py-1 hover:underline font-normal text-xs">Domestic Enrollment</li>
                          <li className="py-1 hover:underline font-normal text-xs">Global Admissions</li>
                          <li className="py-1 hover:underline font-normal text-xs">Enrollment Centers</li>
                          <li className="py-1 hover:underline font-normal text-xs">Campus Tours</li>
                          <li className="py-1 hover:underline font-normal text-xs">Transfer Guidelines</li>
                          <li className="py-1 hover:underline font-normal text-xs">Refund Policy</li>
                          <li className="py-1 hover:underline font-normal text-xs">2024 Welcome Week</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative max-md:hidden ">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg shadow-md"
                      style={{
                        backgroundImage:
                          "url('/image/slider-home/asfdasda.jpg')",
                      }}
                    >
                      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    </div>
                    <div className="relative bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6] bg-opacity-75 ">
                      <div className="relative h-1/2 z-10 text-white">
                        <h3 className="text-xl py-2 text-center font-medium">
                          Unlock your Career Goals
                        </h3>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center text-white p-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="sm:h-10 h-20"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                            />
                          </svg>
                          <span className="mt-2 text-xs text-white font-light">
                            Human Dignity
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white p-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="sm:h-10 h-20"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                            />
                          </svg>
                          <span className="mt-2 text-xs text-white font-light">
                            Human Dignity
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white p-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="sm:h-10 h-20"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                            />
                          </svg>
                          <span className="mt-2 text-xs text-white font-light">
                            Human Dignity
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button className="px-3 py-2 focus:outline-none text-white text-xs">
                  CAMPUS LIFE
                </button>
                <div
                  className={`${
                    BigMenuToggle ? "relative w-full" : "absolute w-max"
                  } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="grid grid-cols-2">
                    <div className="col-span-2 transition-all">
                      <div className="w-full relative max-md:hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-lg shadow-md"
                          style={{
                            backgroundImage:
                              "url('/image/slider-home/asfdasda.jpg')",
                          }}
                        >
                          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        </div>
                        <div className="relative bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6] bg-opacity-75 ">
                          <div className="relative h-1/2 z-10 text-white">
                            <h3 className="text-xl py-2 text-center font-medium">
                              Unlock your Career Goals
                            </h3>
                          </div>
                          <div className="flex justify-evenly">
                            <div className="flex flex-col items-center text-white p-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="sm:h-10 h-20"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                />
                              </svg>
                              <span className="mt-2 text-xs text-white font-light">
                                Human Dignity
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="sm:h-10 h-20"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                />
                              </svg>
                              <span className="mt-2 text-xs text-white font-light">
                                Human Dignity
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="sm:h-10 h-20"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                />
                              </svg>
                              <span className="mt-2 text-xs text-white font-light">
                                Human Dignity
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="sm:h-10 h-20"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                />
                              </svg>
                              <span className="mt-2 text-xs text-white font-light">
                                Human Dignity
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-0 group-hover:p-4 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                        <div className="w-1/2 pr-4">
                          <h3 className="font-bold text-md">CAMPUS LIFE</h3>
                          <ul className="mt-2">
                            <li className="py-1 hover:underline font-normal text-xs">Overview</li>
                            <li className="py-1 hover:underline font-normal text-xs">Convocations</li>
                            <li className="py-1 hover:underline font-normal text-xs">Tech Invent & Events</li>
                            <li className="py-1 hover:underline font-normal text-xs">Cultural</li>
                            <li className="py-1 hover:underline font-normal text-xs">Evoke & Youth Summits</li>
                            <li className="py-1 hover:underline font-normal text-xs">Sports & Adventure</li>
                            <li className="py-1 hover:underline font-normal text-xs">Latest News</li>
                            <li className="py-1 hover:underline font-normal text-xs">Bollywood Celebrities</li>
                            <li className="py-1 hover:underline font-normal text-xs">National & International Conferences</li>
                            <li className="py-1 hover:underline font-normal text-xs">International Faculties</li>
                            <li className="py-1 hover:underline font-normal text-xs">Notable Alumni</li>
                          </ul>
                        </div>
                        <div className="w-1/2 pr-4">
                          <h3 className="font-bold text-md">
                            SOCIAL RESPONSIBILITIES
                          </h3>
                          <ul className="mt-2">
                            <li className="py-1 hover:underline font-normal text-xs">Unnat Bharat Abhiyan & NSS</li>
                            <li className="py-1 hover:underline font-normal text-xs">Nature Club</li>
                            <li className="py-1 hover:underline font-normal text-xs">Adarsh Vikas Kendra</li>
                            <li className="py-1 hover:underline font-normal text-xs">Blood Donation Camp</li>
                            <li className="py-1 hover:underline font-normal text-xs">Eco Friendly Environment</li>
                            <li className="py-1 hover:underline font-normal text-xs">SDP For Village Students</li>
                            <li className="py-1 hover:underline font-normal text-xs">SDP Under PMKVY</li>
                          </ul>
                        </div>
                        <div className="w-1/2">
                          <div>
                            <h3 className="font-bold text-md">SOCIETIES</h3>
                            <ul className="mt-2">
                              <li className="py-1 hover:underline font-normal text-xs">  Departmental Societies
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Extra Curricular Societies
                              </li>
                              <li className="py-1 hover:underline font-normal text-xs">  Student Chapters
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="xl:relative group">
                <button className="px-3 py-2 focus:outline-none text-white text-xs">
                  PLACEMENTS
                </button>
                <div
                  className={`${
                    BigMenuToggle ? "relative w-full" : "absolute w-max"
                  } right-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="grid grid-cols-2">
                    <div className="col-span-1 max-md:hidden">
                      <div className="bg-About ">
                        <div className="flex flex-col items-center p-4">
                          <p className="flex flex-col">
                            <span className="text-center font-normal text-base text-white">
                              AKG Univercity
                            </span>
                            <span className="text-center font-bold text-lg text-cyan-500">
                              Best Educational
                            </span>
                            <span className="text-center font-normale text-base text-white">
                              Institution
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6]">
                          <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-l border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="sm:h-10 h-20"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                              />
                            </svg>
                            <span className="mt-2 text-xs text-white font-light">
                              Human Dignity
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 pr-4 p-0 group-hover:p-5 transition-all max-md:col-span-2 max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                      <div className="w-max pr-4">
                        <h3 className="font-bold text-md">PLACEMENTS</h3>
                        <ul className="mt-2">
                          <li className="py-1 hover:underline font-normal text-xs">T&P Department</li>
                          <li className="py-1 hover:underline font-normal text-xs">Our Recruiters</li>
                          <li className="py-1 hover:underline font-normal text-xs">Placement Records</li>
                          <li className="py-1 hover:underline font-normal text-xs">Placement Highlights</li>
                          <li className="py-1 hover:underline font-normal text-xs">Placement Brochure</li>
                          <li className="py-1 hover:underline font-normal text-xs">Placement Booklet 2022</li>
                          <li className="py-1 hover:underline font-normal text-xs">T&P Programmes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <button className="px-3 py-2 focus:outline-none text-white text-xs">
                  RESEARCH & INNOVATION
                </button>
                <div
                  className={`${
                    BigMenuToggle ? "relative w-full" : "absolute w-max"
                  } right-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all bg-white
                                    text-black rounded-lg shadow-lg`}
                >
                  <div className="grid grid-cols-2">
                    <div className="col-span-1 max-md:hidden">
                      <div className="bg-About h-full">
                        <div className="flex flex-col items-center py-50">
                          <p className="flex flex-col py-10">
                            <span className="text-center font-bold text-lg text-cyan-500"> Research Intensive <br/> University </span>
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6] h-full">
                          <div className="relative z-10 p-6 text-white">
                            <h3 className="text-sm font-light">
                              University with
                            </h3>
                            <h2 className="text-2xl font-bold text-blue-300">
                              Best Placements
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-blue-500 w-max p-2 rounded-md">
                                <h3 className="text-xl font-bold">9124</h3>
                                <p className="text-xs">PLACEMENTS</p>
                              </div>
                              <div className="bg-blue-500 w-max p-2 rounded-md">
                                <h3 className="text-xl font-bold">1.7 CR</h3>
                                <p className="text-xs">INTERNATIONAL</p>
                              </div>
                              <div className="bg-blue-500 p-2 w-max rounded-md">
                                <h3 className="text-xl font-bold">54.75 LPA</h3>
                                <p className="text-xs">NATIONAL</p>
                              </div>
                              <div className="bg-blue-500 p-2 w-max rounded-md">
                                <h3 className="text-xl font-bold">54.75 LPA</h3>
                                <p className="text-xs">NATIONAL</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 max-md:col-span-2 pr-4 p-0 group-hover:p-5 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                      <div className="flex">
                        <div className=" pr-4">
                          <ul className="mt-2">
                            <li className="py-1 hover:underline font-normal text-xs">R & D Policy</li>
                            <li className="py-1 hover:underline font-normal text-xs">Journal Papers</li>
                            <li className="py-1 hover:underline font-normal text-xs">Conference Papers</li>
                            <li className="py-1 hover:underline font-normal text-xs">Book/Book Chapters</li>
                            <li className="py-1 hover:underline font-normal text-xs">Patent</li>
                            <li className="py-1 hover:underline font-normal text-xs">Funded Projects</li>
                            <li className="py-1 hover:underline font-normal text-xs">Consultancy</li>
                            <li className="py-1 hover:underline font-normal text-xs">Research Incentives</li>
                            <li className="py-1 hover:underline font-normal text-xs">AKGEC Journals</li>
                            <li className="py-1 hover:underline font-normal text-xs">Research & Development Centres</li>
                            <li className="py-1 hover:underline font-normal text-xs">Conferences</li>
                            <li className="py-1 hover:underline font-normal text-xs">FDPs</li>
                            <li className="py-1 hover:underline font-normal text-xs">MoUs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden max-md:col-span-1 max-md:flex justify-center"></div>
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1 p-1">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/image/slider-home/AKGEC_1_0.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2 rounded-md p-2 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-4">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Campus
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    <div className="p-3 grid grid-cols-2 gap-3">
                      {products.map((item, index) => (
                        <div
                          key={index}
                          className="group relative flex justify-center rounded-lg text-sm hover:bg-gray-50"
                        >
                          <div className="h-32 w-32 p-3 rounded-lg bg-gray-50 flex items-center justify-center">
                            <item.icon
                              aria-hidden="true"
                              className="h-28 w-28 text-gray-600"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
