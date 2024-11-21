"use client";

import Link from "next/link";
import { socialMediaLinks } from "@/Json/socialMediaLinks"

const StickyFooter = ({ ShowState }) => {

  return (
    <>
      <section className="max-w-screen-2xl mx-auto w-full duration-500">
        <div
          className={`transition-all overflow-hidden  
                z-50 fixed bottom-[50%] -right-7 flex justify-end items-center max-md:gap-2 gap-5 px-5 max-md:flex-col-reverse`}
        >
          <div className="flex items-center justify-end gap-5 px-2 py-3 max-md:flex-col fixed">
            <div className="max-md:hidden">
              <div className="flex flex-col items-end text-white max-md:p-2 justify-center overflow-hidden">
                {socialMediaLinks?.map((link, index) => (
                  <div key={index} className="relative group">
                    <Link href={link.url} className="bg-blue-700 flex items-center">
                      <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                        {link.name}
                      </span>
                      <span className="flex w-10 border-b border-b-gray-50/20 h-10 items-center justify-center p-1 gap-2">
                      {link.icon}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={` max-w-screen-2xl mx-auto w-full bg-red-300 duration-500`}>
        <div className={`transition-all overflow-hidden ${ShowState ? "h-0" : "h-20 max-md:h-10"} z-50 fixed bottom-5 left-0 w-full flex justify-center items-center max-md:gap-2 gap-5 px-5 max-[400px]:px-2 max-md:flex-col-reverse`}>
          <div className="flex-1 max-md:flex max-md:items-center bg-btn-gradient animate-gradient text-white rounded-lg pt-2 pb-1 overflow-hidden w-full px-2">
            <marquee className="font-novaBold max-[400px]:text-sm">
              APPLY NOW for Ajay Kumar Garg University
            </marquee>
          </div>

          {/* <div className="w-96 bg-primary rounded-lg  max-md:w-full  max-md:flex  max-md:justify-between  max-md:items-center max-md:py-1">
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
                  <li>
                    <a className="flex flex-col items-center gap-1" href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/calling.webp"
                        alt="Call Us"
                      />
                      <span className="text-[9px] max-md:hidden">Call Us</span>
                    </a>
                  </li>
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default StickyFooter;
