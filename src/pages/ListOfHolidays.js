"use client";

import { useState, useEffect } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
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



const ITEMS_PER_PAGE = 10;

const ListOfHolidays = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState("gazetted");

    const holidays = activeTab === "gazetted" ? gazettedHolidays : restrictedHolidays;

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    const indexOfLastEntry = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstEntry = indexOfLastEntry - ITEMS_PER_PAGE;
    const currentEntries = holidays.slice(indexOfFirstEntry, indexOfLastEntry);

    const totalEntries = holidays.length;
    const totalPages = Math.ceil(totalEntries / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
        <div className="bg-gray-100 mb-10">
            <Header title={<h2 className="leading-10">List of Holidays <br /> 2024</h2>} Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 pt-10 gap-3 px-6 max-sm:px-0">
                <div className="col-span-9 max-md:col-span-12 max-sm:px-2">
                    <div className="container mx-auto">
                        <h1 className="text-[42px] font-novaReg mb-2.5 leading-none">
                            List of {activeTab === "gazetted" ? "Gazetted" : "Restricted"} Holidays
                        </h1>
                        <div className="mb-6">
                            <table className="min-w-full my-4 bg-white rounded-lg">
                                <thead className="bg-indigo-950 text-white h-[44px] rounded-t-lg font-novaBold uppercase text-xs lg:text-sm">
                                    <tr className="border-b">
                                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10 rounded-tl-lg">
                                            S.No.
                                        </th>
                                        <th className="px-4 py-2 border-r border-white border-opacity-10 text-left">
                                            Festival
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Date
                                        </th>
                                        <th className="px-4 py-2 text-left rounded-tr-lg">
                                            Day
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="border-t-2 rounded-lg font-novaSemi text-xs sm:text-sm sm:font-novaReg">
                                    {currentEntries?.map((entry) => (
                                        <tr
                                            key={entry.SNo}
                                            className={`bg-indigo-950 text-white`}
                                        >
                                            <td className="py-4 px-4 border-b border-white border-opacity-20">
                                                {entry.SNo}
                                            </td>
                                            <td className="py-4 px-4 border-b border-l border-white border-opacity-20">
                                                {entry.Festival}
                                            </td>
                                            <td className="py-4 px-4 border-b border-l border-white border-opacity-20">
                                                {entry.Date}
                                            </td>
                                            <td className="py-4 text-center px-4 border-b border-l border-white border-opacity-20">
                                                {entry.Day}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="flex justify-between max-sm:flex-col">
                                <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                                    Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
                                </div>
                                <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                                    <button
                                        className={`text-white px-4 py-2.5 rounded ${currentPage === 1 ? 'bg-blue-950 cursor-not-allowed' : ''}`}
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        Previous
                                    </button>
                                    {[...Array(totalPages)]?.map((_, pageIndex) => (
                                        <button
                                            key={pageIndex + 1}
                                            className={`text-white px-4 py-2.5 rounded ${currentPage === pageIndex + 1 ? 'bg-primary' : ''}`}
                                            onClick={() => handlePageChange(pageIndex + 1)}
                                        >
                                            {pageIndex + 1}
                                        </button>
                                    ))}
                                    <button
                                        className={`text-white px-3 py-2 rounded ${currentPage === totalPages ? 'bg-blue-950 cursor-not-allowed' : ''}`}
                                        disabled={currentPage === totalPages}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 max-md:col-span-12 px-2">
                    <div className="mb-12 max-w-80 pt-10">
                        <h2 className="mb-6 text-[42px] leading-none font-novaReg max-sm:text-3xl">List of <br /> Holidays</h2>
                        <div className="flex flex-col">
                            <div className={`py-3 mb-4 cursor-pointer text-center rounded-lg ${activeTab === "gazetted" ? 'bg-secondary hover:bg-[#3c5686]' : 'bg-gray-300'}`} onClick={() => setActiveTab("gazetted")}>
                                <Link
                                    href="/academics/list-of-holidays"
                                    className="py-3 text-white uppercase text-[15px] font-novaSemi px-6 text-center"
                                >
                                    Gazetted Holidays
                                </Link>
                            </div>
                            <div className={`py-3 text-center cursor-pointer rounded-lg ${activeTab === "restricted" ? 'bg-secondary hover:bg-[#3c5686]' : 'bg-zinc-950'}`} onClick={() => setActiveTab("restricted")}>
                                <Link
                                    href="/academics/list-of-restricted-holidays"
                                    className="text-white uppercase text-[15px] font-novaSemi py-3 px-6 text-center"
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

    );
};

export default ListOfHolidays;