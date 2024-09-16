"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { coursesData } from "@/Json/ProgramsData";

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
]

const CourseFee = () => {
    const [entries, setEntries] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectChange = (e) => {
        setEntries(parseInt(e.target.value));
        setCurrentPage(1); // Reset to first page whenever entries per page change
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page whenever search term changes
    };

    const filteredCourses = coursesData.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastEntry = currentPage * entries;
    const indexOfFirstEntry = indexOfLastEntry - entries;
    const currentEntries = filteredCourses.slice(indexOfFirstEntry, indexOfLastEntry);

    const totalPages = Math.ceil(filteredCourses.length / entries);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const isPreviousDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages || totalPages === 0;

    return (
        <>
            <div className="bg-gray-100">
                <Header Button={{ name: "Apply Now", Link: "/" }} title={<h2 className="leading-[45px]">AKG University <br />Course Fee 2024 </h2>} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 pt-10 gap-3 px-6 max-sm:px-0">
                    <div className="col-span-9 max-lg:col-span-12 max-sm:px-2">
                        <div className="container mx-auto">
                            <h1 className="text-[42px] font-novaReg leading-none mb-4">
                                AKG University <br />
                                Course Fee, Admission, Cutoff, Ranking
                            </h1>
                            <p className="mb-6 leading-5">
                                Ajay Kumar Garg Engineering College (AKGEC) provides quality education with a strong focus on affordability and value for money. AKGEC offers industry-aligned programs in Engineering, MBA, MCA, and various other disciplines, ensuring students receive the best Return on Investment (ROI). With competitive fees, AKGEC stands out as a premier choice for students seeking a cost-effective, high-quality education in the region.
                            </p>

                            <div>
                                <div className="flex justify-start max-sm:flex-col">
                                    <div className="text-sm mb-2 mr-5">
                                        <label className="text-gray-700">
                                            Show
                                            <select
                                                name="example_length"
                                                aria-controls="example"
                                                className="ml-2 mr-2 border border-gray-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={entries}
                                                onChange={handleSelectChange}
                                            >
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                            entries
                                        </label>
                                    </div>

                                    <div className="text-sm mb-2 mr-5">
                                        <label className="text-gray-700">
                                            Search:
                                            <input
                                                type="search"
                                                className="ml-2 border-2 border-primary rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                aria-controls="example"
                                                value={searchTerm}
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <table className="min-w-full my-4 bg-white border border-gray-300">
                                        <thead>
                                            <tr className="bg-[#363c83] border-inherit text-white h-[44px]">
                                                <th className="pl-4 pr-[30px] py-2 text-left text-sm">
                                                    Name of Program (click on program for Cutoff, Placements, Fees & Admissions Criteria)
                                                </th>
                                                <th className="py-4 px-4 text-left text-sm">Duration</th>
                                                <th className="py-4 px-4 text-left text-sm">Fee per Semester</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentEntries.map((course, index) => (
                                                <tr
                                                    key={index}
                                                    className="bg-indigo-950 text-white border-inherit"
                                                >
                                                    <td className="py-4 px-4 text-sm border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                                        <Link href={`/course/${course.id}`} passHref className="text-white hover:underline hover:underline-animation">
                                                        {course.name}
                                                        </Link></td>
                                                    <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>{course.duration}</td>
                                                    <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>{course.fee}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Pagination and Info */}
                                    <div className="flex justify-between max-sm:flex-col">
                                        <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                                            Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredCourses.length)} of {filteredCourses.length} entries
                                        </div>
                                        <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                                            <button
                                                className="text-white px-4 py-2.5 cursor-pointer hover:bg-blue-900 hover:rounded-lg"
                                                disabled={isPreviousDisabled}
                                                onClick={() => handlePageChange(currentPage - 1)}
                                            >
                                                Previous
                                            </button>
                                            {[...Array(totalPages)].map((_, pageIndex) => (
                                                <button
                                                    key={pageIndex + 1}
                                                    className={`text-white px-4 py-2.5 hover:bg-blue-900 rounded ${currentPage === pageIndex + 1 ? 'bg-blue-900' : ''}`}
                                                    onClick={() => handlePageChange(pageIndex + 1)}
                                                >
                                                    {pageIndex + 1}
                                                </button>
                                            ))}
                                            <button
                                                className="text-white px-3 py-2 rounded hover:bg-blue-900 "
                                                disabled={isNextDisabled}
                                                onClick={() => handlePageChange(currentPage + 1)}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 max-lg:col-span-12 px-2">
                        <SideBar title={"About Us"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>


    );
};

export default CourseFee;