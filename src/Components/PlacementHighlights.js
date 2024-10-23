'use client';

import { useState } from "react";
import Button from "./Button";

const PlacementData = [
    {
        company: "ATLASIAN",
        name: "Uttam Kumar",
        course: "CSE General",
        salary: "36",
        image_url: "image/student/1.png",
        Logo: "/image/company-logos/Wipro.webp",
        G1: "#0a65a4",
        G2: "#087e8b"
    },
    {
        company: "PALOALTO NETWORKS",
        name: "Vandana Chauhan",
        course: "CSE General",
        salary: "54.75",
        image_url: "image/student/2.png",
        Logo: "/image/company-logos/Microsoft.png",
        G1: "#fbb03b",
        G2: "#fecc00"
    },
    {
        company: "MICROSOFT",
        name: "Ameya Ohri",
        course: "CSE General Student",
        salary: "52.11",
        image_url: "image/student/3.png",
        Logo: "/image/company-logos/Adobe.png",
        G1: "#3c5686",
        G2: "#3c5682"
    },
    {
        company: "NUTANIX",
        name: "Gaurav Maheshwari",
        course: "CSE General",
        salary: "24",
        image_url: "image/student/4.png",
        Logo: "/image/company-logos/Google.png",
        G1: "#f3f3f3",
        G2: "#f3f3f3"
    }
]
export default function PlacementHighlights() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 h-auto">
            <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    {PlacementData?.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden flex items-center justify-center min-h-[400px] sm:min-h-[450px] "
                            style={{ background: `linear-gradient(to right, ${item.G1}, ${item.G2})` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={item.image_url}
                                alt={item.name}
                                className={`h-full object-cover grayscale transition duration-500 ease-in-out max-lg:absolute -left-5 bottom-0 max-lg:h-96 max-md:h-80   ${hoveredIndex === index ? "-translate-x-28 translate-y-8 scale-90" : null}`}
                            />
                            <div className={`${hoveredIndex === index ? null : "translate-x-60"} max-lg:translate-x-0 transition duration-500 ease-in-out absolute top-5 max-sm:top-2 max-sm:right-2 right-2 p-2 ${index === 3 || index === 1 ? "text-[#212529]" : "text-white"} max-w-[90%] max-sm:p-2 max-sm:w-max`}>
                                <img src={item.Logo} alt="Company Logo" className="h-12 sm:h-16 max-sm:h-20 max-sm:w-44 bg-white object-contain rounded-lg mb-2" />
                                <h3 className="text-lg sm:text-xl font-novaBold">{item.name}</h3>
                                <p className="text-xs font-novaReg">- {item.course}</p>
                                <p className="text-2xl sm:text-3xl md:text-4xl font-novaBold">
                                    <sup className="font-novaBold text-lg">₹</sup>{item.salary}{" "}
                                    <small className="font-novaSemi text-lg">LPA</small>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center p-5 md:p-10 lg:p-16 bg-BG14 bg-center bg-cover text-white bg-black bg-blend-multiply bg-opacity-50">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-novaLight">
                    <span className='font-novaSemi bg-gradient-to-r from-teal-300 to-green-400 bg-clip-text text-transparent'>Placements</span> Overview
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl font-novaLight mt-3">Record-Breaking Achievements and Industry-Driven Success</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">
                    <div className="text-start">
                        <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">1406</p>
                        <p className="text-sm md:text-base font-novaReg leading-none mt-2">Placement <br /> Offers</p>
                    </div>
                    <div className="text-start">
                        <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">282</p>
                        <p className="text-sm md:text-base font-novaReg leading-none mt-2">Company <br /> Visits</p>
                    </div>
                    <div className="text-start">
                        <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">20 <small className="font-novaLight -ml-1 text-lg">LPA</small></p>
                        <p className="text-sm md:text-base font-novaReg leading-none mt-2">Package Offered to 5 Students</p>
                    </div>
                    <div className="text-start">
                        <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">10-20 <small className="font-novaLight -ml-1 text-lg">LPA</small></p>
                        <p className="text-sm md:text-base font-novaReg leading-none mt-2">Package Offered to 53 Students</p>
                    </div>
                    <div className="text-start">
                        <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">5-10 <small className="font-novaLight -ml-1 text-lg">LPA</small></p>
                        <p className="text-sm md:text-base font-novaReg leading-none mt-2">Package Offered to Approx 306 Students</p>
                    </div>
                    <div className="text-start">
                        <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">5 <small className="font-novaLight -ml-1 text-lg">LPA</small>
                        </p>
                        <p className="text-sm md:text-base font-novaReg leading-none mt-2">Package Offered to 1042 Students</p>
                    </div>
                    <div className="text-start">
                        <p className="text-2xl md:text-3xl lg:text-5xl text-orange-300 font-novaThin mt-4">33.80 <small className="font-novaLight text-white -ml-1 text-lg">LPA</small></p>
                        <p className="text-sm md:text-base font-novaReg leading-none mt-2">Highest National Package Offered</p>
                    </div>
                    <div className="text-start">
                        <p className="text-2xl md:text-3xl lg:text-5xl text-orange-300 font-novaThin mt-4">1.13 <small className="font-novaLight text-white -ml-1 text-lg">CR</small></p>
                        <p className="text-sm md:text-base font-novaReg leading-none mt-2">Highest International Package Offered in 2022</p>
                    </div>
                </div>
                <div className="flex justify-start space-x-4 mt-6 max-lg:justify-center">
                    <Button text={"APPLY TODAY"} className="bg-btn-gradient text-white text-sm font-novaBold px-6 py-2 rounded-md hover:bg-[#3c5686] hover:border-b-4 hover:border-[#ccce48] hover:transform hover:transition-transform hover:ease-in-out hover:duration-500 scale-y-105" />
                    <Button text={"VIEW PLACEMENTS"} className="border border-white text-white text-sm font-novaBold px-4 py-2 rounded-md hover:bg-white hover:text-black" />
                </div>
            </div>
        </div>
    );
}
