"use client";

import { useState } from "react";
import TeachingPractices from "./TeachingPractices";
import Header from "@/Components/Header";
import Calendar from "@/Components/Calendar";
import SideBar from "@/Components/SideBar";


const SideBarLink = [
  { name: "Our Identity", link: "/overview" },
  { name: "Leadership", link: "" },
  { name: "Leadership", link: "" },
  { name: "Governance", link: "" },
  { name: "Recognition and Approvals", link: "" },
  { name: "Awards and Rankings", link: "" },
  { name: "Institution Social Responsibility", link: "" }
]

export const Home = () => {
  const [currentSemester, setCurrentSemester] = useState('even');
  return (
    <>
      <div className="bg-gray-100">
        <Header title={"Teaching Practices"} Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-zinc-900 to-gray-900/40"} />
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-10">
          <div className="col-span-9 max-md:col-span-12">
            <div className="container mx-auto p-4">
              <div className="px-3 max-sm:px-0">
                <h2 className="text-4xl max-2xl:text-3xl max-lg:text-2xl font-novaReg mb-2.5">
                  Optimal Knowledge Acquisition at AKG University
                </h2>
                <p className="mb-5 mt-2.5 max-2xl:text-[15px] font-novaReg leading-6 max-2xl:leading-5">
                  At AKG University, students learn the skill of perceiving and understanding the world. Learning at AKG involves creating conceptual principles, accepting results, recalling realistic information, acquiring methods and systems, analyzing, debating ideas, and developing behavior appropriate to specific situations.
                </p>
              </div>
              <div className="px-3 max-sm:px-0">
                <h2 className="text-4xl max-2xl:text-3xl max-lg:text-2xl font-novaReg mb-2 leading-9">
                  Your Learning Adventure Begins: Unveiling AKG University's Transformative Practices
                </h2>
                <p className="font-novaReg mb-5 mt-2.5 leading-6">
                  As you step into AKG University's realm of transformative practices, remember that you are not just a student; you are an active participant in your growth story.
                </p>
                <ul className="mb-4 list-disc ml-5 text-[14px] lg:text-[14px] md:text-[15px]">
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Active Learning -</b> Engage, Participate, Excel</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Project-Based Learning -</b> Learning by Doing</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Collaborative Learning -</b> Unleash the Power of We</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Technology Integration -</b> Where Education Meets Innovation</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Personalized Learning -</b> Your journey, your pace, your unique path to success</li>
                  <li className="ml-[13px] pl-3 pb-2.5 leading-5"><b>Cross-Cultural Sensitivity -</b> Connecting Worlds, Expanding Minds</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 max-md:col-span-12">
          <Calendar currentSemester={currentSemester} setCurrentSemester={setCurrentSemester} />
            <SideBar title={"About Us"} LinkList={SideBarLink} />
          </div>
        </section>
      </div>
      <TeachingPractices />
    </>
  )
}


export default Home;