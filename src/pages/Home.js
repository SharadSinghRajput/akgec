"use client";
import Image from "next/image";
import Building from "/public/image/Building.jpg";
import Form from "./Form";
import ScreenOne from "./Screen1";
import ScreenTwo from "./Screen2";
import ScreenThree from "./Screen3";
import NewsEvents from "./NewsEvents";
import CampusSlider from "./CampusSlider";
import { Star } from "./SVG";
import { TopCard } from "./TopCard";
import LogoSlider from "./Components/LogoSlider";
import FooterCard from "./Components/FooterCard";
import StudentReviews from "./Components/StudentReviews";
import Research from "./Components/Research";
import ResearchEnvironment from "./Components/ResearchEnvironment";
import MiddleSection from "./Components/MiddleSection";
import Footer from "./Components/Footer";
import { StickyFooter } from "./Components/StickyFooter";
import { useState, useEffect } from "react";
import { Button } from "./Components/Button";

export default function Home() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition < 150) {
        // Hide the sticky bar when scrolling is less than 150px
        setShowStickyBar(false);
      } else if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        setShowStickyBar(false);
      } else if (currentScrollPosition < lastScrollPosition) {
        // Scrolling up
        setShowStickyBar(true);
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-[95vh] overflow-hidden relative max-lg:h-auto ">
        <div className="flex justify-center relative z-20 min-h-screen">
          <div className="grid grid-cols-2 max-lg:grid-cols-1">
            <div className="flex justify-center max-w-3xl flex-col pl-20 max-lg:mt-52 max-lg:items-center max-lg:px-5 max-sm:mt-40">
              <h1 className="text-[60px] font-novaThin text-white max-lg:text-4xl max-lg:text-center leading-none mb-5 ">
                Top Private Engineering University in Uttar Pradesh
              </h1>
              <p className="text-white text-xl font-novaLight max-lg:text-base max-lg:text-center">
                The only engineering college in Uttar Pradesh (AKTU) Accredited
                by NAAC with an A++ grade
              </p>

              <Button text={'Apply Today'} className="py-3 px-10 mt-5 text-[15px]  rounded-xl font-novaBold uppercase bg-secondary text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#253c66] hover:transform hover:transition-transform hover:ease-in-out  hover:duration-500 scale-y-105" />
            </div>
            <div className="max-md:mt-10  mt-10 pt-5">
              <Form />
            </div>
          </div>
        </div>
        <div className="w-full h-full object-cover absolute left-0 top-0 z-10 bg-gradient-to-r from-black/60 to-white/0 "></div>
        <Image
          src={Building}
          className="w-full h-full object-cover absolute left-0 top-0 z-0 animate-zoomInOut"
        />
      </div>
      <div className="relative h-auto">
        <TopCard />
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
        <LogoSlider /> 
        <CampusSlider />
        <StudentReviews />
        <NewsEvents />
        <Research />
        <ResearchEnvironment />
         <FooterCard />
        <StickyFooter ShowState={showStickyBar} />
        {/* <AwardSection/> */}
      </div >
    </>
  );
}
