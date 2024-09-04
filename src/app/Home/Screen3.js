import React from "react";

const PlacementData = [
    {
      company : "ATLASIAN",
      name : "Uttam Kumar",
      course : "CSE General",
      salary : "36",
      image_url : "image/student/1.png",
      Logo : "/image/slider-home/6.webp",
      G1 : "#0a65a4",
      G2 : "#087e8b"
    },
    {
      company : "PALOALTO NETWORKS",
      name : "Vandana Chauhan",
      course : "CSE General",
      salary : "54.75",
      image_url : "image/student/2.png",
      Logo : "/image/company-logos/MicrosoftIcon.webp",
      G1 : "#fbb03b",
      G2 : "#fbb03b"
    },
    {
      company : "MICROSOFT",
      name : "Ameya Ohri",
      course : "CSE General Student",
      salary : "52.11",
      image_url : "image/student/3.png",
      Logo : "/image/company-logos/Adobe.webp",      
      G1 : "#0d254d",
      G2 : "#0d254d"
    },
    {
      company : "NUTANIX",
      name : "Gaurav Maheshwari",
      course : "",
      salary : "24",
      image_url : "image/student/4.png",
      Logo : "/image/company-logos/GoogleIcon.webp",
      G1 : "#f3f3f3",
      G2 : "#f3f3f3"
    }
  ]
export default function PlacementHighlights() {
    return (
        <div className="grid grid-cols-10">
            <div className="col-span-5 max-lg:col-span-10 ">
                <div className="grid h-full grid-cols-1 sm:grid-cols-2">
                    {PlacementData.map((item, index)=>(
                        <div key={index} className={`relative max-full`}
                            style={{ background: `linear-gradient(to right, ${item.G1}, ${item.G2})` }}
                        >
                            <img src={item.image_url} alt={item.name} className="absolute bottom-0 w-80 object-cover grayscale" />
                            <div className={`absolute max-2xl:top-60 max-2xl:left-2 top-10 right-5 p-2 ${index === 3 ? "text-[#212529]" : "text-white"} `}>
                                <img
                                    src={item.Logo}
                                    alt="Ageas Federal"
                                    className="h-16 w-48 bg-white object-contain  rounded-lg"
                                />
                                <h3 className="text-2xl font-novaBold mt-2">{item.name}</h3>
                                <p className="text-xs font-novaReg">- {item.course}</p>
                                <p className="text-4xl font-novaBold"><sup className="font-novaBold text-lg">₹</sup>{item.salary} <small className="font-novaSemi text-lg">LPA</small></p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="col-span-5 p-32 max-2xl:p-20 items-center flex justify-center text-white max-lg:col-span-10 max-md:p-5 bg-BG2 bg-no-repeat bg-cover">
                <div className="">
                    <h2 className="text-5xl font-novaLight">Placements Overview</h2>
                    <p className="text-2xl font-novaLight mt-3">Record-Breaking Achievements and Industry-Driven Success</p>
                    <div className="grid grid-cols-3 max-md:grid-cols-2 gap-10 max-md:gap-4">
                        <div className="text-start">
                            <p className="text-5xl font-novaThin mt-8">1406</p>
                            <p className="text-base font-novaReg leading-none mt-2">Placement <br /> Offers</p>
                        </div>
                        <div className="text-start">
                            <p className="text-5xl font-novaThin mt-8">282</p>
                            <p className="text-base font-novaReg leading-none mt-2">Company <br /> Visits</p>
                        </div>
                        <div className="text-start">
                            <p className="text-5xl font-novaThin mt-8">20 <small className="font-novaLight -ml-2 text-2xl">LPA</small></p>
                            <p className="text-base font-novaReg leading-none mt-2">Package Offered to
                                5 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-5xl font-novaThin mt-8">10-20 <small className="font-novaLight -ml-2 text-2xl">LPA</small></p>
                            <p className="text-base font-novaReg leading-none mt-2">Package Offered to
                                53 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-5xl font-novaThin mt-8">5-10 <small className="font-novaLight -ml-2 text-2xl">LPA</small></p>
                            <p className="text-base font-novaReg leading-none mt-2">Package Offered to Approx 306 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-5xl font-novaThin mt-8">5 <small className="font-novaLight -ml-2 text-2xl">LPA</small></p>
                            <p className="text-base font-novaReg leading-none mt-2">Package Offered to 1042 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-5xl text-orange-300 font-novaThin mt-8">33.80 <small className="font-novaLight text-white -ml-2 text-2xl">LPA</small></p>
                            <p className="text-base font-novaReg leading-none mt-2">Highest National
                                Package Offered</p>
                        </div>
                        <div className="text-start">
                            <p className="text-5xl text-orange-300 font-novaThin mt-8">1.13 <small className="font-novaLight text-white -ml-2 text-2xl">CR</small></p>
                            <p className="text-base font-novaReg leading-none mt-2">Highest International Package Offered in 2022</p>
                        </div>
                    </div>

                    <div className="flex justify-start space-x-4 z-10 mt-10">
                        <button className="bg-yellow-500  text-white text-sm font-novaBold px-8 py-3 rounded-md">
                            APPLY TODAY
                        </button>
                        <button className="border border-white text-white text-sm font-novaBold px-6 py-3 rounded-md">
                            VIEW PLACEMENTS
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
