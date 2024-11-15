"use client";

import "@/styles/globals.css";
import { CampusSlider, FooterCard, LogoSlider, MilestonesSection, NewsEvents, PlacementHighlights, ExploreCourses, ResearchEnvironment, SlickSlider, StickyFooter, StudentReviews, TopCard } from "@/Components";
import useStickyBar from "@/hooks/useStickyBar";
import MainSection from "@/Components/MainSection";
import NotificationSlider from "@/Components/NotificationSlider";

export default function HomePage() {
  const showStickyBar = useStickyBar();

  return (
    <>
      <MainSection />
      <TopCard />
      <ExploreCourses />
      <SlickSlider />
      <NotificationSlider />
      <MilestonesSection />
      <PlacementHighlights />
      <LogoSlider />
      <CampusSlider />
      <StudentReviews />
      <NewsEvents />
      <FooterCard />
      <ResearchEnvironment />
      <StickyFooter ShowState={showStickyBar} />
    </>
  );
}
