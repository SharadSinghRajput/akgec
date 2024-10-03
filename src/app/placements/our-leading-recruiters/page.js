import Header from "@/Components/Header";
import OurLeadingRecruiters from "./OurLeadingRecruiters";



export default function AboutPlacement() {
  return (
    <>
      <Header title={"Placements Overview"} Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-zinc-900 to-gray-900/40"} />
      <OurLeadingRecruiters />
    </>
  );
}
