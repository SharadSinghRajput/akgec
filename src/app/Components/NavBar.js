"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmazon,
  faGoogle,
  faMicrosoft,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";
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
        isScrolled100 ? "bg-gray-950" : ""
      } transition-all duration-200`}
    >
      <div className="grid grid-cols-8 max-lg:grid-cols-3 gap-x-10">
        <div className="col-span-2 flex max-lg:col-span-1 max-sm:col-span-2 ">
          <div
            className={`text-white py-3 max-sm:py-0 ${isScrolled ? "pl-0" : ""} `}
          >
            <div className="flex justify-start items-center gap-2 pl-2">
              <div className="flex justify-center">
                <img
                  src="/image/akg-logo.png"
                  alt="Chandigarh University Logo"
                  className="h-16 w-full object-contain"
                />
              </div>
              <div className="flex justify-center p-2">
                <img
                  src="/image/naac-a-logo.png"
                  alt="Chandigarh University Logo"
                  className="h-12 w-full object-contain"
                />
              </div>
            </div>
            <div hidden={isScrolled} className="max-lg:hidden">
              <div className="flex items-center px-5">
                <div className="flex-grow border-t border-white opacity-40"></div>
                <p className="mx-4 text-center opacity-40 text-xs font-novaLight ">
                  Notifications
                </p>
                <div className="flex-grow border-t border-white  opacity-40"></div>
              </div>
              <p className="font-novaLight mx-10 py-2 text-center text-[11px]">
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
              className={` lg:flex lg:gap-x-8 justify-between px-7 items-center  py-2 ${
                isScrolled ? "" : "pt-4"
              }`}
            >
              <div className="hidden lg:flex gap-20 justify-start text-[13px] font-novaLight">
                <a href="#" className="leading-6 uppercase text-white hover:underline hover:text-gray-400 transition duration-500 ">
                  Campus
                </a>
                <a href="#" className="leading-6 uppercase text-white hover:underline hover:text-gray-400 transition duration-500">
                  Library
                </a>
                <a href="#" className="leading-6 uppercase text-white hover:underline hover:text-gray-400 transition duration-500">
                  Student Services
                </a>
                <a href="#" className="leading-6 uppercase text-white hover:underline hover:text-gray-400 transition duration-500">
                  Contact us
                </a>
              </div>
              <div className="flex justify-center max-md:justify-start gap-4">
                <div
                  className={`flex items-center justify-center transition-all ${
                    isScrolled ? "px-2 py-1" : "px-4 py-3"
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
                    <div className="border-r pr-6 border-[#46a7d1] font-novaLight">
                      <p
                        className={`text-white  ${
                          isScrolled ? "text-[10px]" : "text-xs"
                        }`}
                      >
                        Admission Helpline
                      </p>
                      <p
                        className={`text-white font-bold  ${
                          isScrolled ? "text-sm" : "text-base leading-none"
                        }`}
                      >
                        1800-200-0777
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center ml-3 ">
                    <button className="text-white p-2 rounded-full hover:bg-blue-700">
                      {/* Button content */}
                    </button>
                    <Bars3Icon
                      className="text-white mr-2 h-8"
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
                  : `hidden relative ${isScrolled ? "py-1" : "py-0 mt-4 "}`
              }  lg:flex items-center justify-between text-black font-semibold text-sm bg-white/10
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </>
              ) : null}
              <li className="relative group">
                <button className="relative px-3 py-3 focus:outline-none text-white font-novaBold text-lg flex items-center gap-1">
                  ABOUT{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute inset-x-0 top-0 h-2 bg-[#087397] transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
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
                          <h3 className="font-bold">WHO WE ARE</h3>
                          <ul className="mt-2">
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Vision And Mission
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Director General
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Director
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Management
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Important Functionaries
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Approvals by Statutory Bodies
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              NBA Accreditation
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              AICTE Approval Letters
                            </li>
                          </ul>
                        </div>
                        <div className="w-1/2">
                          <div>
                            <h3 className="font-bold">VISUAL TOUR</h3>
                            <ul className="mt-2">
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Academic Complex
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Hostel
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Centres Of Excellence
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Faith Centre
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Support Facilities
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Stationary Shop
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                College Canteen
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <div>
                            <h3 className="font-bold">RELATED LINKS</h3>
                            <ul className="mt-2">
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                AKGEC Visual Tour
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Centre of Excellence Visual Tour
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Mandatory Disclosure
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                NIRF Data for Ranking
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Grievance Committee
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Organisation Chart
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Testimonials
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Gallery
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 max-md:hidden">
                      <div className="bg-About bg-cover">
                        <div className="flex flex-col items-center p-4">
                          <p className="flex flex-col">
                            <span className="text-center font-normal text-xl font-novaLight text-white">
                              AKG University
                            </span>
                            <span className="text-center font-novaBold text-3xl text-cyan-500 leading-none">
                              of Excellence
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6]">
                          <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
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
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-hand-heart"
                            >
                              <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                              <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                              <path d="m2 15 6 6" />
                              <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                            </svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Empathy
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-hand-coins"
                            >
                              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                              <path d="m2 16 6 6" />
                              <circle cx="16" cy="9" r="2.9" />
                              <circle cx="6" cy="5" r="3" />
                            </svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Humility
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-message-circle-heart"
                            >
                              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                              <path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" />
                            </svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Giving
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group">
                <button className="relative px-3 py-3 focus:outline-none text-white font-novaBold text-lg flex items-center gap-1">
                  PROGRAMS{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute inset-x-0 top-0 h-2 bg-[#087397] transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
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
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Applied Sciences & Humanities
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Civil Engineering
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Computer Science and Engineering
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Electronics and Communication Engineering
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Electrical and Electronics Engineering
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Information Technology
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Mechanical Engineering
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Master of Computer Applications
                            </li>
                          </ul>
                        </div>
                        <div className="w-1/2 max-md:w-full">
                          <div>
                            <h3 className="font-bold text-md">PROGRAMS</h3>
                            <ul className="mt-2">
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                UG Courses
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                PG Courses
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Online Courses
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Certification
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
                        <h3 className="text-xl font-novaLight">University of</h3>
                        <h2 className="text-3xl font-novaBold leading-none text-[#43ffe6]">
                          Top Placements
                        </h2>
                        <div className="mt-4">
                          <div className="bg-[#087e8a] w-40 p-2 rounded-md">
                            <h3 className="text-3xl font-novaBold">1406</h3>
                            <p className="text-xs font-novaLight">PLACEMENTS</p>
                          </div>
                          <p className="text-xs font-novaLight mb-2">Offered in Batch 2023-24</p>
                          <div className="bg-[#087e8a] w-40 p-2 rounded-md">
                            <h3 className="text-3xl font-novaBold">1.13 <small className="-ml-1 text-lg">CR</small></h3>
                            <p className="text-xs font-novaLight">INTERNATIONAL</p>
                          </div>
                          <p className="text-xs font-novaLight mb-2">Highest Package Offered</p>
                          <div className="bg-[#087e8a] p-2 w-40 rounded-md">
                            <h3 className="text-3xl font-novaBold">33.80 <small className="-ml-1 text-lg">LPA</small></h3>
                            <p className="text-xs font-novaLight">NATIONAL</p>
                          </div>
                          <p className="text-xs font-novaLight">Highest Package Offered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button className="relative px-3 py-3 focus:outline-none text-white font-novaBold text-lg flex items-center gap-1">
                  ACADEMICS{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute inset-x-0 top-0 h-2 bg-[#087397] transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
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
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Academic Calendar
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            List of Holidays
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            AKGEC Digital School
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Syllabus
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Policy and Process for Refund of Caution Money
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Educational Verification
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Issuance of certificates for passout students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-1 max-md:hidden">
                      <div className="bg-About ">
                        <div className="flex flex-col items-center p-4">
                          <p className="flex flex-col">
                            <span className="text-center text-lg font-novaLight text-white">
                              Milestones in
                            </span>
                            <span className="text-center text-2xl font-novaBold leading-none text-cyan-500">
                              Educational Achievement
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6]">
                          <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-boxes"
                            >
                              <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                              <path d="m7 16.5-4.74-2.85" />
                              <path d="m7 16.5 5-3" />
                              <path d="M7 16.5v5.17" />
                              <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                              <path d="m17 16.5-5-3" />
                              <path d="m17 16.5 4.74-2.85" />
                              <path d="M17 16.5v5.17" />
                              <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                              <path d="M12 8 7.26 5.15" />
                              <path d="m12 8 4.74-2.85" />
                              <path d="M12 13.5V8" />
                            </svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Flexible Choice
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-notebook-pen"
                            >
                              <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
                              <path d="M2 6h4" />
                              <path d="M2 10h4" />
                              <path d="M2 14h4" />
                              <path d="M2 18h4" />
                              <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                            </svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Electives
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-monitor-dot"
                            >
                              <circle cx="19" cy="6" r="3" />
                              <path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
                              <path d="M12 17v4" />
                              <path d="M8 21h8" />
                            </svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Technologies
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-l border-t-white/50 p-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-folder-git-2"
                            >
                              <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
                              <circle cx="13" cy="12" r="2" />
                              <path d="M18 19c-2.8 0-5-2.2-5-5v8" />
                              <circle cx="20" cy="19" r="2" />
                            </svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Experiential Learning
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button className="relative px-3 py-3 focus:outline-none text-white font-novaBold text-lg flex items-center gap-1">
                  ADMISSIONS{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute inset-x-0 top-0 h-2 bg-[#087397] transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
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
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Courses Offered
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Admission
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Fee Structure for New Students
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Admissions through UPTAC Counselling
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Fee Structure for Existing Students
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Fee Refund Norms
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Scholarship
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Admission Brochure 2024-25
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Information Booklet 2024-25
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-52 pr-4">
                      <h3 className="font-bold text-md">AKGEC Programs</h3>
                      <ul className="mt-2">
                        <li className="py-0.5 hover:underline font-novaLight text-sm">
                          B.Tech Programs
                        </li>
                        <li className="py-0.5 hover:underline font-novaLight text-sm">
                          M.Tech Programs
                        </li>
                        <li className="py-0.5 hover:underline font-novaLight text-sm">
                          MCA Programs
                        </li>
                        <li className="py-0.5 hover:underline font-novaLight text-sm">
                          Industry-Academia Collaborations
                        </li>
                        <li className="py-0.5 hover:underline font-novaLight text-sm">
                          Research & Development
                        </li>
                      </ul>
                    </div>
                    <div className="w-52">
                      <div>
                        <ul className="mt-2">
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Domestic Enrollment
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Global Admissions
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Enrollment Centers
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Campus Tours
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Transfer Guidelines
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Refund Policy
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            2024 Welcome Week
                          </li>
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
                        <h3 className="text-xl py-2 text-center font-novaLight">
                          Open Doors to Your Future
                        </h3>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center text-white p-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-graduation-cap"
                          >
                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                            <path d="M22 10v6" />
                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                          </svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Scholarships
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white p-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-handshake"
                          >
                            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                            <path d="m21 3 1 11h-2" />
                            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                            <path d="M3 4h8" />
                          </svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Education Loan
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white p-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chart-spline"
                          >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                            <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
                          </svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Futuristic
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button className="relative px-3 py-3 focus:outline-none text-white font-novaBold text-lg flex items-center gap-1">
                  CAMPUS LIFE{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute inset-x-0 top-0 h-2 bg-[#087397] transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
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
                            <h3 className="text-xl py-2 text-center font-novaLight">
                              A Place Like Home
                            </h3>
                          </div>
                          <div className="flex justify-evenly">
                            <div className="flex flex-col items-center text-white p-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-ferris-wheel"
                              >
                                <circle cx="12" cy="12" r="2" />
                                <path d="M12 2v4" />
                                <path d="m6.8 15-3.5 2" />
                                <path d="m20.7 7-3.5 2" />
                                <path d="M6.8 9 3.3 7" />
                                <path d="m20.7 17-3.5-2" />
                                <path d="m9 22 3-8 3 8" />
                                <path d="M8 22h8" />
                                <path d="M18 18.7a9 9 0 1 0-12 0" />
                              </svg>
                              <span className="mt-2 text-xs text-white font-novaLight">
                                Festivals
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-hand-coins"
                              >
                                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                <path d="m2 16 6 6" />
                                <circle cx="16" cy="9" r="2.9" />
                                <circle cx="6" cy="5" r="3" />
                              </svg>
                              <span className="mt-2 text-xs text-white font-novaLight">
                                Culturally Diverse
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-handshake"
                              >
                                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                                <path d="m21 3 1 11h-2" />
                                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                                <path d="M3 4h8" />
                              </svg>
                              <span className="mt-2 text-xs text-white font-novaLight">
                                Student-Friendly
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-notebook-tabs"
                              >
                                <path d="M2 6h4" />
                                <path d="M2 10h4" />
                                <path d="M2 14h4" />
                                <path d="M2 18h4" />
                                <rect
                                  width="16"
                                  height="20"
                                  x="4"
                                  y="2"
                                  rx="2"
                                />
                                <path d="M15 2v20" />
                                <path d="M15 7h5" />
                                <path d="M15 12h5" />
                                <path d="M15 17h5" />
                              </svg>
                              <span className="mt-2 text-xs text-white font-novaLight">
                                Technology integration
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-0 group-hover:p-4 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                        <div className="w-1/2 pr-4">
                          <h3 className="font-bold text-md">CAMPUS LIFE</h3>
                          <ul className="mt-2">
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Overview
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Convocations
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Tech Invent & Events
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Cultural
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Evoke & Youth Summits
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Sports & Adventure
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Latest News
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Bollywood Celebrities
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              National & International Conferences
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              International Faculties
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Notable Alumni
                            </li>
                          </ul>
                        </div>
                        <div className="w-1/2 pr-4">
                          <h3 className="font-bold text-md">
                            SOCIAL RESPONSIBILITIES
                          </h3>
                          <ul className="mt-2">
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Unnat Bharat Abhiyan & NSS
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Nature Club
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Adarsh Vikas Kendra
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Blood Donation Camp
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Eco Friendly Environment
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              SDP For Village Students
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              SDP Under PMKVY
                            </li>
                          </ul>
                        </div>
                        <div className="w-1/2">
                          <div>
                            <h3 className="font-bold text-md">SOCIETIES</h3>
                            <ul className="mt-2">
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Departmental Societies
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Extra Curricular Societies
                              </li>
                              <li className="py-0.5 hover:underline font-novaLight text-sm">
                                {" "}
                                Student Chapters
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
                <button className="relative px-3 py-3 focus:outline-none text-white font-novaBold text-lg flex items-center gap-1">
                  PLACEMENTS{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute inset-x-0 top-0 h-2 bg-[#087397] transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                </button>
                <div
                  className={`${
                    BigMenuToggle ? "relative w-full" : "absolute w-[550px]"
                  } right-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="grid grid-cols-2">
                    <div className="col-span-1 max-md:hidden">
                      <div className="bg-About ">
                        <div className="flex flex-col items-center p-4">
                          <p className="flex flex-col">
                            <span className="text-center font-novaLight text-base text-white">
                              Corporate Ties
                            </span>
                            <span className="text-center font-novaBold text-2xl text-cyan-500">
                              &
                            </span>
                            <span className="text-center font-novaLight text-base text-white">
                              Career Opportunities
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#087e8be6] to-[#0a65a4e6]">
                          <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
                            <FontAwesomeIcon icon={faGoogle} size="3x" />
                            <span className="mt-2 text-xs text-white font-light">
                              Google
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                            <FontAwesomeIcon icon={faAmazon} size="3x" />
                            <span className="mt-2 text-xs text-white font-light">
                              Amazon
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                            <FontAwesomeIcon icon={faMicrosoft} size="3x" />
                            <span className="mt-2 text-xs text-white font-light">
                              Microsoft
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                            <FontAwesomeIcon icon={faShopify} size="3x" />
                            <span className="mt-2 text-xs text-white font-light">
                              Shopify
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 pr-4 p-0 group-hover:p-5 transition-all max-md:col-span-2 max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                      <div className="w-max pr-4">
                        <h3 className="font-bold text-md">PLACEMENTS</h3>
                        <ul className="mt-2">
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            T&P Department
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Our Recruiters
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Placement Records
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Placement Highlights
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Placement Brochure
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            Placement Booklet 2022
                          </li>
                          <li className="py-0.5 hover:underline font-novaLight text-sm">
                            T&P Programmes
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <button className="relative px-3 py-3 focus:outline-none text-white font-novaBold text-lg flex items-center gap-1">
                  RESEARCH & INNOVATION{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute inset-x-0 top-0 h-2 bg-[#087397] transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
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
                        <div className="flex flex-col justify-start items-start pt-5 px-6">
                          <p className="flex flex-col pb-10">
                            <span className="font-novaLight text-xl text-white">
                              {" "}
                              Our Academic
                            </span>
                            <span className="font-novaLight text-xl text-white">
                              Ambitions
                            </span>
                          </p>
                        </div>
                        <div className="h-full">
                          <div className="relative z-10 p-6 text-white">
                            {/* <h3 className="text-sm font-novaLight">
                              University with
                            </h3>
                            <h2 className="text-2xl font-bold text-[#2fbdff] leading-none">
                              Best Placements
                            </h2> */}
                            <div className="grid grid-cols-2 gap-4 mt-3">
                              <div className="bg-[#087e8a] w-36 px-10 py-4 rounded-md flex flex-col items-center text-center">
                                <h3 className="text-3xl font-novaBold">19K+</h3>
                                <p className="text-xs font-novaLight">Students Graduated</p>
                              </div>
                              <div className="bg-[#087e8a] w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                                <h3 className="text-3xl font-novaBold">8</h3>
                                <p className="text-xs font-novaLight">Departmental Research Groups</p>
                              </div>
                              <div className="bg-[#087e8a] w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                                <h3 className="text-3xl font-novaBold">213</h3>
                                <p className="text-xs font-novaLight">Students in Univ. Merit List</p>
                              </div>
                              <div className="bg-[#087e8a] w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                                <h3 className="text-3xl font-novaBold">2000+</h3>
                                <p className="text-xs font-novaLight">Students Placed (2021-22)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 max-md:col-span-2 pr-4 p-0 group-hover:p-5 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                      <div className="flex">
                        <div className=" pr-4">
                          <h3 className="font-bold text-md uppercase">
                            Academic Research Hub
                          </h3>
                          <ul className="mt-2">
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              R & D Policy
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Journal Papers
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Conference Papers
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Book/Book Chapters
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Patent
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Funded Projects
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Consultancy
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Research Incentives
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              AKGEC Journals
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Research & Development Centres
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              Conferences
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              FDPs
                            </li>
                            <li className="py-0.5 hover:underline font-novaLight text-sm">
                              MoUs
                            </li>
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





