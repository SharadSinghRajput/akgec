"use client";
import { useEffect, useState } from "react"
import Header from "./Components/Header"
import { facultyData } from "@/Json/facultyData"

const ProfessorsOfPractice = () => {
    const [searchText, setSearchText] = useState("");
    const [ filteredFacultyData, setFilteredFacultyData ] = useState(facultyData);

    useEffect(() => {
        const filteredData = facultyData.filter((faculty) => faculty.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredFacultyData(filteredData);
    }, [searchText])

    return (
        <>
            <Header bg="/image/professors-bg.jpg" height="h-[300px] md:h-[500px] lg:h-[600px]" gradient={"bg-gradient-to-r from-zinc-900 to-transparent-900/40"} />
            <div className="min-h-screen bg-blue-600 p-8 max-[450px]:p-2">
                <div className="max-w-7xl mx-auto">
                    <div className="relative text-center">
                        <h1 className="relative text-3xl font-novaReg text-white mb-2 z-10 inline-block">
                            Professors of Practice
                        </h1>
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full max-w-72 h-2 rounded-full bg-gray-800"></div>
                    </div>
                    <p className="text-white font-novaReg text-center max-sm:text-sm mb-8">Faculty currently associated with AKGEC University</p>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Search Professors of Practice"
                            className="w-full py-3 px-4 pr-12 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-[450px]:gap-3">
                        {filteredFacultyData?.map((faculty, index) => (
                            <div key={index} className="bg-white p-6 max-[450px]:p-3 rounded-lg shadow-md">
                                <div className="flex items-start mb-4">
                                    <div className="h-24 w-24 rounded-xl border border-gray-300 overflow-hidden mr-4">
                                        <img
                                            src={faculty?.image}
                                            alt={faculty?.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="">
                                        <h3 className="text-lg font-novaBold">{faculty?.name}</h3>
                                        <p className="text-xs font-novaBold ">{faculty?.position}</p>
                                        <p className="mt-3 text-sm font-novaSemi uppercase ">{faculty?.title}</p>
                                        <div className="mt-5 font-novaReg uppercase text-xs">
                                            <p className="">{faculty?.department}</p>
                                            <p className="">{faculty?.institute}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-novaBold text-sm">Domain:</h4>
                                    <div className="flex items-start gap-2 mt-1">
                                        <img className="w-4 h-4" src="/image/icons/check.png" alt="" />
                                        <div>
                                            <p className="text-xs ">{faculty?.domain}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfessorsOfPractice