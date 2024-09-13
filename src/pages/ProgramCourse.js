"use client";
import { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]

const courses = [
    {
        "name": "Computer Science and Engineering",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Computer Science and Engineering (Data Science)",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Computer Science",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Computer Science and Engineering (Hindi)",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Artificial Intelligence & Machine Learning",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Information Technology",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Computer Science and Information Technology",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Electronics and Communication Engineering",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Mechanical Engineering",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Electrical and Electronics Engineering",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Civil Engineering",
        "duration": "4 Years",
        "fee": "71078/- INR"
    },
    {
        "name": "Computer Science and Engineering (M.Tech)",
        "duration": "2 Years",
        "fee": "59628/- INR"
    },
    {
        "name": "Electrical and Electronics Engineering (M.Tech)",
        "duration": "2 Years",
        "fee": "59628/- INR"
    },
    {
        "name": "Electronics and Communication Engineering (M.Tech)",
        "duration": "2 Years",
        "fee": "59628/- INR"
    },
    {
        "name": "Mechanical Engineering (M.Tech)",
        "duration": "2 Years",
        "fee": "59628/- INR"
    },
    {
        "name": "Master of Computer Applications (MCA)",
        "duration": "3 Years",
        "fee": "67978/- INR"
    }
];

const ProgramCourse = () => {
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

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastEntry = currentPage * entries;
    const indexOfFirstEntry = indexOfLastEntry - entries;
    const currentEntries = filteredCourses.slice(indexOfFirstEntry, indexOfLastEntry);

    const totalPages = Math.ceil(filteredCourses.length / entries);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Programs"} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-7xl mx-auto grid grid-cols-12 pt-24 gap-10">
                    <div className="col-span-9 max-md:col-span-12">
                        <div className="container mx-auto p-4">
                            <h1 className="text-4xl font-novaReg leading-none mb-4">
                                AKG University <br />
                                Course Fee, Admission, Cutoff, Ranking
                            </h1>
                            <p className="mb-6 leading-5">
                                Ajay Kumar Garg Engineering College (AKGEC) provides quality education with a strong focus on affordability and value for money. AKGEC offers industry-aligned programs in Engineering, MBA, MCA, and various other disciplines, ensuring students receive the best Return on Investment (ROI). With competitive fees, AKGEC stands out as a premier choice for students seeking a cost-effective, high-quality education in the region.
                            </p>

                            <div>
                                <div className="flex justify-start">
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
                                                    className="bg-primary text-white border-inherit"
                                                >
                                                    <td className="py-4 px-4 text-sm border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>{course.name}</td>
                                                    <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>{course.duration}</td>
                                                    <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>{course.fee}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Pagination and Info */}
                                    <div className="flex justify-between">
                                        <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                                            Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredCourses.length)} of {filteredCourses.length} entries
                                        </div>
                                        <div className="text-sm bg-blue-950 rounded-lg flex items-center">
                                            <a
                                                className="text-white px-4 py-2.5"
                                                disabled={currentPage === 1}
                                                onClick={() => handlePageChange(currentPage - 1)}
                                            >
                                                Previous
                                            </a>
                                            {[...Array(totalPages)].map((_, pageIndex) => (
                                                <button
                                                    key={pageIndex + 1}
                                                    className={`text-white px-4 py-2.5 rounded ${currentPage === pageIndex + 1 ? 'bg-primary' : ''}`}
                                                    onClick={() => handlePageChange(pageIndex + 1)}
                                                >
                                                    {pageIndex + 1}
                                                </button>
                                            ))}
                                            <a
                                                className="text-white px-3 py-2 rounded"
                                                disabled={currentPage === totalPages}
                                                onClick={() => handlePageChange(currentPage + 1)}
                                            >
                                                Next
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 max-md:col-span-12">
                        <SideBar title={"About Us"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>


    );
};

export default ProgramCourse;