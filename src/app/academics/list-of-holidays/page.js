"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import ListOfHolidays from "./ListOfHolidays";
import Link from "next/link";
import { gazettedHolidays, restrictedHolidays } from "@/Json/HolidaysData";


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
  const [activeTab, setActiveTab] = useState("gazetted");

    const holidays = activeTab === "gazetted" ? gazettedHolidays : restrictedHolidays;
  return (
    <>
      <div className="bg-gray-100">
        <Header title={<>List of Holidays <br /> 2024</>} Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-10 px-2 max-sm:gap-0">
          <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
            <ListOfHolidays holidays={holidays} activeTab={activeTab} />
          </div>
          <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
            <div className="mb-12 max-w-80 pt-10">
              <h2 className="mb-6 text-[42px] leading-none font-novaReg max-sm:text-3xl">List of <br /> Holidays</h2>
              <div className="flex flex-col">
                <div className={`py-3 max-sm:py-2 mb-4 cursor-pointer text-center rounded-lg ${activeTab === "gazetted" ? 'bg-secondary hover:bg-[#3c5686]' : 'bg-gray-300'}`} onClick={() => setActiveTab("gazetted")}>
                  <Link
                    href="/academics/list-of-holidays"
                    className="py-3 max-sm:py-2 max-sm:text-sm text-white uppercase text-[15px] font-novaSemi px-6 text-center"
                  >
                    Gazetted Holidays
                  </Link>
                </div>
                <div className={`py-3 max-sm:py-2 text-center cursor-pointer rounded-lg ${activeTab === "restricted" ? 'bg-secondary hover:bg-[#3c5686]' : 'bg-zinc-950'}`} onClick={() => setActiveTab("restricted")}>
                  <Link
                    href="/academics/list-of-holidays"
                    className="text-white max-sm:py-2 max-sm:text-sm uppercase text-[15px] font-novaSemi py-3 px-6 text-center"
                  >
                    Restricted Holidays
                  </Link>
                </div>
              </div>
            </div>
            <SideBar title={"About Us"} LinkList={SideBarLink} />
          </div>
        </section>
      </div>
    </>
  )
}


export default Home;