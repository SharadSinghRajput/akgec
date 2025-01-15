"use client";
import { useState } from "react";
import Institutes from "./Institutes";
import Header from "@/Components/Header";
import Calendar from "@/Components/Calendar";
import SideBar from "@/Components/SideBar";


const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
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
                <Header title={"Institutes"} Button={{ name: "Apply Now", Link: "/" }} bg="/image/building/building3.webp" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-2 max-sm:gap-0">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <Institutes />
                    </div>
                    <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12 max-lg:container mx-auto max-sm:px-1">
                        <Calendar currentSemester={currentSemester} setCurrentSemester={setCurrentSemester} />
                        <SideBar title={"About Us"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home;