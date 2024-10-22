"use client";

import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Form, CampusSlider, FooterCard, LogoSlider, MilestonesSection, NewsEvents, PlacementHighlights, ExploreCourses, ResearchEnvironment, SlickSlider, StickyFooter, StudentReviews, TopCard } from "@/Components";


export default function HomePage() {
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
              <h1 className="text-[60px] font-novaThin text-white max-lg:text-4xl max-lg:text-center leading-none mb-5">
                One of the Top Private <br /> <span className="font-novaSemi">Engineering College</span>
              </h1>
              <p className="text-white text-xl font-novaLight max-lg:text-base max-lg:text-center">
                The only engineering college in Uttar Pradesh (AKTU) Accredited
                by NAAC with an A++ grade
              </p>

              <Button text={'Apply Today'} className="py-3 px-10 mt-5 text-[15px] rounded-xl font-novaBold uppercase bg-btn-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#5949e4] hover:transform  scale-y-105 animate-gradient" />
            </div>
            <div className="max-md:mt-10  mt-10 pt-5">
              <Form />
            </div>
          </div>
        </div>
        <div className="w-full h-full object-cover absolute left-0 top-0 z-10 bg-gradient-to-r from-black/60 to-white/0 "></div>
        <Image src="/image/Building.jpg" width={1920} height={1080} alt="Building" className="w-full h-full object-cover absolute left-0 top-0 z-0 animate-zoomInOut"/>
      </div>
      <div className="relative h-auto">
        <TopCard />
        <SlickSlider />
        <ExploreCourses />
        <MilestonesSection />
        <PlacementHighlights />
        <LogoSlider />
        <CampusSlider />
        <StudentReviews />
        <NewsEvents />
        <ResearchEnvironment />
        <FooterCard />
        <StickyFooter ShowState={showStickyBar} />
        {/* <AwardSection/> */}
      </div >
    </>
  );
}
