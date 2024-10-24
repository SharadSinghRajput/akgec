"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation';
import { faAmazon, faGoogle, faMicrosoft, faShopify, } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel, } from "@headlessui/react";
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon, } from "@heroicons/react/24/outline";
import { Bars2Icon, ChevronDownIcon, PhoneIcon, } from "@heroicons/react/20/solid";
const products = [{ icon: ChartPieIcon }, { icon: CursorArrowRaysIcon }];
import { About, Academics, Admissions, CampusLife, ResearchInnovation, Placements, Programs } from "../Json/MenuItem";
const socialLinks = [
  {
    name: "Facebook",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-facebook'><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' /></svg>
  },
  {
    name: "Instagram",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-instagram'><rect width='20' height='20' x='2' y='2' rx='5' ry='5' /><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' /><line x1='17.5' y1='6.5' x2='17.51' y2='6.5' /></svg>
  },
  {
    name: "LinkedIn",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-linkedin'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' /><rect width='4' height='12' x='2' y='9' /><circle cx='4' cy='4' r='2' /></svg>
  },
  {
    name: "Twitter",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-twitter'><path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' /></svg>
  }
]


export default function NavBar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled100, setIsScrolled100] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [BigMenuToggle, setBigMenuToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("School of Engineering & Technology");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled100(scrollY > 10);
      setIsScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const LinksList = ({ title, links }) => (
  //   <div className=" ">
  //     <h3 className="font-bold">{title}</h3>
  //     <ul className="mt-2">
  //       {links?.map(link => (
  //         <li key={link.url} className="py-0.5 hover:underline font-novaLight text-sm">
  //           <a href={link.url}>{link.name}</a>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  const LinksList = ({ title, links, titleClassName, ulClassName }) => (
    <div className="pr-6 max-md:w-full">
      {title && <h3 className={`font-bold ${titleClassName}`}>{title}</h3>}
      <ul className={`mt-2 ${ulClassName}`}>
        {links?.map((link, index) => (
          <li key={index} className="">
            <button className="py-0.5 hover:underline cursor-pointer text-left font-novaLight text-sm" onClick={() => router.push(link.url)}>{link.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <header
      className={`z-[100] w-full fixed top-0 left-0 ${isScrolled100 ? "bg-primary pb-3" : ""
        } transition-all duration-200`}
    >
      <div className="grid grid-cols-8 max-xl:grid-cols-12 max-lg:grid-cols-12 max-md:grid-cols-4  gap-x-10">
        <div className="col-span-2 flex max-xl:col-span-2 max-md:col-span-2 max-sm:col-span-3 max-lg:col-span-3 max-sm:mb-4  ">
          <div
            className={`text-white py-3 max-sm:py-0 ${isScrolled ? "pl-0" : ""} `}
          >
            <div className={`flex justify-start items-center gap-1 pl-5 ${isScrolled100 ? "flex-row" : "flex-col"}`}>
              <div className="flex justify-center">
                <img
                  onClick={() => router.push("/")}
                  src="/image/akg-logo.jpg"
                  alt="AKG University Logo"
                  className={`${isScrolled100 ? "h-20" : "h-24"} w-full object-contain shadow-effect-right cursor-pointer`}
                />
              </div>
              <div className={`${isScrolled100 ? "grid grid-cols-2 gap-1.5" : "flex gap-1"}`}>
                <img
                  src="/image/naac-a++.jpg"
                  alt="NAAC Logo"
                  className="h-9 w-full object-contain bg-blend-color-dodge relative z-[4] shadow-effect-right"
                />
                <img
                  src="/image/nba.jpg"
                  alt="NBA Logo"
                  className="h-9 w-full object-contain bg-blend-color-dodge relative z-[3] shadow-effect-right"
                />
                <img
                  src="/image/qs-i-gauge.jpg"
                  alt="QS-I-GAUGE Logo"
                  className="h-9 w-full object-contain bg-blend-color-dodge relative z-[2] shadow-effect-right"
                />
                <img
                  src="/image/iic.jpg"
                  alt="IIC Logo"
                  className="h-9 w-full object-contain bg-blend-color-dodge relative z-[1] shadow-effect-right"
                />
              </div>
            </div>
            {/* <div hidden={isScrolled} className="max-xl:hidden">
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
            </div> */}
          </div>
        </div>
        <div className="flex xl:hidden max-xl:col-span-3 max-md:col-span-2 max-sm:col-span-1 max-md:pt-0 max-md:justify-end max-md:mr-5 justify-center max-sm:mb-4">
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
        <div className="col-span-6 max-xl:col-span-5 max-lg:col-span-6 max-md:col-span-2 max-xl:flex max-xl:items-center max-xl:justify-end  max-md:justify-start">
          <nav className="px-5 max-md:px-1  ">
            <div
              className={` lg:flex max-md:pt-0 lg:gap-x-8 justify-between px-7 items-center  max-md:px-1 py-2 ${isScrolled ? "max-md:hidden" : "pt-4"
                }`}
            >
              <div className="hidden xl:flex gap-20  justify-start max-xl:gap-8  text-[13px] font-novaLight">
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
              <div className="flex justify-end max-2xl:flex-col gap-4">
                <div className="max-md:w-full max-md:flex  max-md:justify-between  max-md:items-center max-md:py-1">
                  <div className="flex items-center justify-center gap-5 px-2 py-1.5 max-md:w-full">
                    <div className="max-md:hidden">
                      <ul className="flex items-center gap-5 text-white max-md:p-2 justify-center w-full ">
                        <li className=" ">
                          <a className="flex flex-col items-center gap-1" href="">
                            <img
                              className="w-4 h-4"
                              src="/image/social-icons/whatsapp.webp"
                              alt="Whatsapp"
                            />
                            <span className="text-[9px] max-md:hidden">Whatsapp</span>
                          </a>
                        </li>
                        {/* <li>
                          <a className="flex flex-col items-center gap-1" href="">
                            <img
                              className="w-4 h-4"
                              src="/image/social-icons/calling.webp"
                              alt="Call Us"
                            />
                            <span className="text-[9px] max-md:hidden">Call Us</span>
                          </a>
                        </li> */}
                        <li>
                          <a className="flex flex-col items-center gap-1" href="">
                            <img
                              className="w-4 h-4"
                              src="/image/social-icons/compass.webp"
                              alt="360°"
                            />
                            <span className="text-[9px] max-md:hidden">360°</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center px-3 border-l border-gray-400 space-y-1 max-md:border-none max-md:w-full ">
                      <ul className="flex items-center justify-center gap-4 leading-none max-md:w-full max-md:justify-evenly">
                        <li>
                          <a href="">
                            <img
                              className="w-4 h-4"
                              src="/image/social-icons/facebook.webp"
                              alt="Facebook"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img
                              className="w-4 h-4"
                              src="/image/social-icons/twitter.webp"
                              alt="twitter"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img
                              className="w-4 h-4"
                              src="/image/social-icons/linkedin.webp"
                              alt="linkedin"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img
                              className="w-4 h-4"
                              src="/image/social-icons/instagram.webp"
                              alt="instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img
                              className="w-4 h-4"
                              src="/image/social-icons/youtube.webp"
                              alt="youtube"
                            />
                          </a>
                        </li>
                      </ul>
                      <small className="text-[9px] max-md:hidden text-white">
                        Get Social with us
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex max-sm:p-1  max-lg:p-1  items-center justify-center transition-all ${isScrolled ? "px-2.5 py-0.5" : "px-2.5 py-2"
                    } bg-btn-gradient animate-gradient rounded-full max-w-md mx-auto max-lg:mx-0 max-md:mx-0`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`bg-white p-2 rounded-full flex items-center justify-center`}
                    >
                      <a href="tel:1800-200-0777">
                        <PhoneIcon
                          className={`${isScrolled ? "h-3 w-3" : "h-4 w-4"} text-cyan-500`}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    {/* <div className="font-novaLight max-sm:hidden">
                      <p
                        className={`text-white  ${isScrolled ? "text-[10px]" : "text-xs"
                          }`}
                      >
                        Admission Helpline
                      </p>
                      <p
                        className={`text-white max-xl:text-xs font-bold  ${isScrolled ? "text-xs" : "text-sm leading-none"
                          }`}
                      >
                        1800-200-0777
                      </p>
                    </div> */}
                  </div>
                  {/* <div className="flex items-center ml-3 max-sm:hidden">
                    <button className="text-white p-2 rounded-full hover:bg-blue-700">

                    </button>
                    <Bars3Icon
                      className="text-white mr-2 h-8"
                      aria-hidden="true"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <ul
              className={`${BigMenuToggle
                ? "fixed w-full h-full left-0 top-0 bg-blue-800 pt-10"
                : `hidden relative ${isScrolled ? "py-1" : "py-0 mt-4 "}`
                }  xl:flex  items-center justify-between text-black font-semibold text-sm bg-white/10
                                        backdrop-blur-xl px-5 rounded-lg backdrop-contrast-125`}
            >
              {BigMenuToggle ? (
                <>
                  <button
                    onClick={() => setBigMenuToggle(!BigMenuToggle)}
                    className="mb-4 text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </button>
                </>
              ) : null}
              <li className="relative group">
                <button className={`relative px-3 ${isScrolled ? "py-1" : "py-3"}  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1`}>
                  ABOUT{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                  <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                </button>
                <div
                  className={`${BigMenuToggle ? "relative w-full" : "absolute w-[800px]"
                    } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 max-md:col-span-3 pr-4 p-0 group-hover:p-5 transition-all">
                      <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                        <LinksList title="WHO WE ARE" links={About.sublinks["Who We Are"]} />
                        <LinksList title="Related Links" links={About.sublinks["Related Links"]} />
                      </div>
                    </div>
                    <div className="col-span-1 max-md:hidden">
                      <div className="bg-About bg-cover">
                        <div className="flex flex-col items-center p-4">
                          <p className="flex flex-col">
                            <span className="text-center font-normal text-xl font-novaLight text-white">
                              AKG University
                            </span>
                            <span className="text-center font-novaBold text-3xl text-secondary leading-none">
                              of Excellence
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#3c5686] to-[#3c568696]">
                          <div className="flex flex-col items-center text-white border-r border-b border-t-white/50 p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sm:h-10 h-20"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Human Dignity
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-b border-t-white/50 p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" /><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 15 6 6" /><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Empathy
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Humility
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" /></svg>
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
                <button className={`relative px-3 ${isScrolled ? "py-1" : "py-3"}  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1`}>
                  PROGRAMS{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                  <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                </button>
                <div
                  className={`${BigMenuToggle ? "relative w-full" : "absolute w-[1200px]"
                    } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg`}
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 max-md:col-span-3 p-0  transition-all">
                      <div className=" w-full h-16 flex justify-center items-center gap-1">
                        {
                          Object.keys(Programs.sublinks)?.map((key, index) => <button onClick={() => { setActiveTab(key) }} key={index}
                            className={`h-full w-full border-r border-r-gray-200 text-sm font-novaLight px-2 ${key === activeTab ? 'bg-yellow-100/50' : 'bg-white'}`}>
                            {key}</button>)
                        }
                      </div>
                      <div className="flex p-10 gap-10 ">
                        {
                          Object.keys(Programs.sublinks[activeTab])?.map((key, index) => {
                            if (key === 'Programs') {
                              return <LinksList key={index} title={key} links={Programs.sublinks[activeTab][key]} />
                            }
                            if (key === 'Program') {
                              return Object.keys(Programs.sublinks[activeTab][key])?.map((key1, index) => {
                                return <LinksList key={index} title={key1} links={Programs.sublinks[activeTab][key][key1]} />
                              })
                            }
                          })
                        }
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
                        <h2 className="text-3xl font-novaBold leading-none text-secondary">
                          Top Placements
                        </h2>
                        <div className="mt-4">
                          <div className="bg-[#3c5686c4] w-40 p-2 rounded-md">
                            <h3 className="text-3xl font-novaBold">1406</h3>
                            <p className="text-xs font-novaLight">PLACEMENTS</p>
                          </div>
                          <p className="text-xs font-novaLight mb-2">Offered in Batch 2023-24</p>
                          <div className="bg-[#3c5686c4] w-40 p-2 rounded-md">
                            <h3 className="text-3xl font-novaBold">1.13 <small className="-ml-1 text-lg">CR</small></h3>
                            <p className="text-xs font-novaLight">INTERNATIONAL</p>
                          </div>
                          <p className="text-xs font-novaLight mb-2">Highest Package Offered</p>
                          <div className="bg-[#3c5686c4] p-2 w-40 rounded-md">
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
                <button className={`relative px-3 ${isScrolled ? "py-1" : "py-3"}  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1`}>
                  ACADEMICS{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                  <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                </button>
                <div
                  className={`${BigMenuToggle ? "relative w-full" : "absolute w-[900px]"
                    } left-0 h-0  mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="grid grid-cols-5 ">
                    <div className="col-span-3 max-md:col-span-2 pr-4 p-0 group-hover:p-5 transition-all">
                      <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                        <LinksList title="ACADEMICS" links={Academics.sublinks["Academics"]} />
                        <LinksList title="SCHOOLS" links={Academics.sublinks["Schools"]} />
                      </div>
                    </div>
                    <div className="col-span-2 max-md:hidden h-full">
                      <div className="bg-About h-full flex flex-col justify-between">
                        <div className="flex flex-col items-center mt-10">
                          <p className="flex flex-col">
                            <span className="text-center text-lg font-novaLight text-white">
                              Milestones in
                            </span>
                            <span className="text-center text-2xl font-novaBold leading-none text-secondary">
                              Educational Achievement
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#3c5686] to-[#3c5686a8]">
                          <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" /><path d="m7 16.5-4.74-2.85" /><path d="m7 16.5 5-3" /><path d="M7 16.5v5.17" /><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" /><path d="m17 16.5-5-3" /><path d="m17 16.5 4.74-2.85" /><path d="M17 16.5v5.17" /><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" /><path d="M12 8 7.26 5.15" /><path d="m12 8 4.74-2.85" /><path d="M12 13.5V8" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Flexible Choice
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Electives
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t border-r border-t-white/50 p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-dot"><circle cx="19" cy="6" r="3" /><path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" /><path d="M12 17v4" /><path d="M8 21h8" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Technologies
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white border-t border-t-white/50 p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" /><circle cx="13" cy="12" r="2" /><path d="M18 19c-2.8 0-5-2.2-5-5v8" /><circle cx="20" cy="19" r="2" /></svg>
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
                <button className={`relative px-3 ${isScrolled ? "py-1" : "py-3"}  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1`}>
                  ADMISSIONS{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                  <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                </button>
                <div
                  className={`${BigMenuToggle ? "relative w-full" : "absolute w-[600px]"
                    } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
                >
                  <div className="flex group-hover:p-4 w-max transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col max-md:gap-5">

                    <div className="w-52 ">
                      <LinksList title="ADMISSIONS" links={Admissions?.sublinks["Admission"].slice(0, Math.ceil(Admissions?.sublinks["Admission"].length / 2))} />
                    </div>
                    <div className="w-52 ">
                      <LinksList title='  ' titleClassName="mt-4" links={Admissions?.sublinks["Admission"].slice(Math.ceil(Admissions?.sublinks["Admission"].length / 2))} />
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
                    <div className="relative bg-gradient-to-r from-[#3c5686c4] to-[#3c568693] bg-opacity-75 ">
                      <div className="relative h-1/2 z-10 text-white">
                        <h3 className="text-xl py-2 text-center font-novaLight">
                          Open Doors to Your Future
                        </h3>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center text-white p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Scholarships
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Education Loan
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" /></svg>
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
                <button className={`relative px-3 ${isScrolled ? "py-1" : "py-3"}  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1`}>
                  CAMPUS LIFE{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                  <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                </button>
                <div
                  className={`${BigMenuToggle ? "relative w-full" : "absolute w-max"
                    } left-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white
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
                        <div className="relative bg-gradient-to-r from-[#3c5686c4] to-[#3c568693] bg-opacity-75 ">
                          <div className="relative h-1/2 z-10 text-white">
                            <h3 className="text-xl py-2 text-center font-novaLight">
                              A Place Like Home
                            </h3>
                          </div>
                          <div className="flex justify-evenly">
                            <div className="flex flex-col items-center text-white p-7">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ferris-wheel"><circle cx="12" cy="12" r="2" /><path d="M12 2v4" /><path d="m6.8 15-3.5 2" /><path d="m20.7 7-3.5 2" /><path d="M6.8 9 3.3 7" /><path d="m20.7 17-3.5-2" /><path d="m9 22 3-8 3 8" /><path d="M8 22h8" /><path d="M18 18.7a9 9 0 1 0-12 0" /></svg>
                              <span className="mt-2 text-xs text-white font-novaLight">
                                Festivals
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
                              <span className="mt-2 text-xs text-white font-novaLight">
                                Culturally Diverse
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
                              <span className="mt-2 text-xs text-white font-novaLight">
                                Student-Friendly
                              </span>
                            </div>
                            <div className="flex flex-col items-center text-white p-7">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-tabs"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M15 2v20" /><path d="M15 7h5" /><path d="M15 12h5" /><path d="M15 17h5" /></svg>
                              <span className="mt-2 text-xs text-white font-novaLight">
                                Technology integration
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-0 group-hover:p-4 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                        <div className="w-52 ">
                          <LinksList title="CAMPUS LIFE" links={CampusLife.sublinks.slice(0, Math.ceil(CampusLife?.sublinks.length / 2))} />
                        </div>
                        <div className="w-52 ">
                          <LinksList title="" links={CampusLife.sublinks.slice(Math.ceil(CampusLife?.sublinks.length / 2))} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="xl:relative group">
                <button className={`relative px-3 ${isScrolled ? "py-1" : "py-3"}  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1`}>
                  PLACEMENTS{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                  <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                </button>
                <div
                  className={`${BigMenuToggle ? "relative w-full" : "absolute w-[650px]"
                    } right-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white
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
                            <span className="text-center font-novaBold text-2xl text-secondary">
                              &
                            </span>
                            <span className="text-center font-novaLight text-base text-white">
                              Career Opportunities
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 bg-gradient-to-r from-[#3c5686c4] to-[#3c568693]">
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
                    <div className="col-span-1 w-max pr-4 p-0 group-hover:p-5 transition-all max-md:col-span-2 max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                      <div className="w-max pr-5">
                        <LinksList title="PLACEMENTS" links={Placements.sublinks["Placements"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <button className={`relative px-3 ${isScrolled ? "py-1" : "py-3"}  focus:outline-none text-white font-novaBold text-lg max-[1600px]:text-sm flex items-center gap-1`}>
                  RESEARCH & INNOVATION{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                  <span className="absolute inset-x-0 top-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
                </button>
                <div
                  className={`${BigMenuToggle ? "relative w-max" : "absolute w-max"
                    } right-0 h-0 mt-5 overflow-hidden group-hover:h-auto group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg`}
                >
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 max-md:hidden">
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
                            <div className="grid grid-cols-2 gap-4 mt-3">
                              <div className="bg-[#3c568693] w-36 px-10 py-4 rounded-md flex flex-col items-center text-center">
                                <h3 className="text-3xl font-novaBold">19K+</h3>
                                <p className="text-xs font-novaLight">Students Graduated</p>
                              </div>
                              <div className="bg-[#3c568693] w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                                <h3 className="text-3xl font-novaBold">8</h3>
                                <p className="text-xs font-novaLight">Departmental Research Groups</p>
                              </div>
                              <div className="bg-[#3c568693] w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                                <h3 className="text-3xl font-novaBold">213</h3>
                                <p className="text-xs font-novaLight">Students in Univ. Merit List</p>
                              </div>
                              <div className="bg-[#3c568693] w-36 px-5 py-4 rounded-md flex flex-col items-center text-center">
                                <h3 className="text-3xl font-novaBold">2000+</h3>
                                <p className="text-xs font-novaLight">Students Placed (2021-22)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 max-md:col-span-2 pr-4 p-0 group-hover:p-5 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                      <div className="flex">
                        <div className=" w-40 pr-2">
                          <LinksList title="Research Intensive University" links={ResearchInnovation.sublinks['Research Intensive University']} />
                        </div>
                        <div className="w-40 pr-2">
                          <LinksList title="Entrepreneurship Cells" links={ResearchInnovation.sublinks['Entrepreneurship Cells']} />
                        </div>
                        <div className="w-40 pr-2">
                          <LinksList title="Sustainable Development Goals (SDG's)" links={ResearchInnovation.sublinks[`Sustainable Development Goals (SDG's)`]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`md:hidden max-md:col-span-2 ${isScrolled100 ? "hidden" : ""}`}>
          <div className="flex justify-end gap-2 pr-5">
            {socialLinks?.map((item, index) => (
              <a key={index} className="text-xs text-center flex flex-col gap-1 justify-start items-center text-white" href="">
                {item.svg}
                <span className="text-[10px]">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="hidden max-md:col-span-4 max-md:flex justify-center">
          <div>
            {/* {SVG.Call}   */}
          </div>
        </div>
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
                      {products?.map((item, index) => (
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
};