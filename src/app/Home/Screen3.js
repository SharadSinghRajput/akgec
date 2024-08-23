import React from "react";

const PlacementData = [
    {
      company : "ATLASIAN",
      name : "Uttam Kumar",
      course : "CSE General",
      salary : "₹36 LPA",
      image_url : "image/student/1.png",
      Logo : "/image/slider-home/6.webp",
      G1 : "#0a65a4",
      G2 : "#087e8b"
    },
    {
      company : "PALOALTO NETWORKS",
      name : "Vandana Chauhan",
      course : "CSE General",
      salary : "₹54.75 LPA",
      image_url : "image/student/2.png",
      Logo : "/image/company-logos/MicrosoftIcon.webp",
      G1 : "#fbb03b",
      G2 : "#fbb03b"
    },
    {
      company : "MICROSOFT",
      name : "Ameya Ohri",
      course : "CSE General Student",
      salary : "₹52.11 LPA",
      image_url : "image/student/3.png",
      Logo : "/image/company-logos/Adobe.webp",      
      G1 : "#0d254d",
      G2 : "#0d254d"
    },
    {
      company : "NUTANIX",
      name : "Gaurav Maheshwari",
      course : "",
      salary : "₹24 LPA",
      image_url : "image/student/4.png",
      Logo : "/image/company-logos/GoogleIcon.webp",
      G1 : "#f3f3f3",
      G2 : "#f3f3f3"
    }
  ]
export default function PlacementHighlights() {
    return (
        <div className="grid grid-cols-10 ">
            <div className="col-span-6 max-lg:col-span-10">
                <div className="grid h-full grid-cols-1 sm:grid-cols-2">
                    {PlacementData.map((item, index)=>(
                        <div key={index} className={`relative max-full`}
                            style={{ background: `linear-gradient(to right, ${item.G1}, ${item.G2})` }}
                        >
                            <img src={item.image_url} alt={item.name} className=" w-64 overflow-hidden  grayscale" />
                            <div className={`absolute top-10 right-5 p-4 ${index === 3 ? "text-[#212529]" : "text-white"} `}>
                                <img
                                    src={item.Logo}
                                    alt="Ageas Federal"
                                    className="h-14 w-36 bg-white object-contain p-1  rounded-lg"
                                />
                                <h3 className="text-base font-bold mt-5">{item.name}</h3>
                                <p className="text-xs font-normal">{item.course}</p>
                                <p className="text-2xl font-bold">{item.salary}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="col-span-4 items-center text-white p-20 max-lg:col-span-10 max-md:p-5 bg-BG2 bg-no-repeat bg-cover">
                <div className="">
                    <h2 className="text-3xl font-extralight">Placements Overview</h2>
                    <p className="text-xl font-extralight">Record-Breaking Achievements and Industry-Driven Success</p>
                    <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4 max-md:gap-4">
                        <div className="text-start">
                            <p className="text-xl font-medium mt-8">1406</p>
                            <p className="text-sm md:text-sm font-light">Placement Offers</p>
                        </div>
                        <div className="text-start">
                            <p className="text-xl font-medium mt-8">282</p>
                            <p className="text-sm md:text-sm font-light">Company Visits</p>
                        </div>
                        <div className="text-start">
                            <p className="text-xl font-medium mt-8">20+ LPA</p>
                            <p className="text-sm md:text-sm font-light">Package Offered to
                                5 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-xl font-medium mt-8">10-20 LPA</p>
                            <p className="text-sm md:text-sm font-light">Package Offered to
                                53 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-xl font-medium mt-8">5-10 LPA</p>
                            <p className="text-sm md:text-sm font-light">Package Offered to Approx 306 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-xl font-medium mt-8">5 LPA</p>
                            <p className="text-sm md:text-sm font-light">Package Offered to
                                1042 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-xl font-medium mt-8">33.80 LPA</p>
                            <p className="text-sm md:text-sm font-light">Highest National
                                Package Offered</p>
                        </div>
                        <div className="text-start">
                            <p className="text-xl font-medium mt-8">1.13 Cr</p>
                            <p className="text-sm md:text-sm font-light">Highest International Package Offered in 2022</p>
                        </div>
                    </div>

                    <div className="flex justify-start space-x-4 z-10 mt-10">
                        <button className="bg-yellow-500  text-white text-xs font-semibold px-6 py-2 rounded-md">
                            APPLY TODAY
                        </button>
                        <button className="border border-white text-white text-xs font-semibold px-6 py-2 rounded-md">
                            VIEW PLACEMENTS
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
