"use client";
import { useState } from "react";
import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import AkgAdvantages from "./AkgAdvantages";

const Button = {
  name: "Apply Now",
  Link: "",
};

const SideBarLink = [
  { name: "Our Identity", link: "/overview" },
  { name: "Leadership", link: "" },
  { name: "Leadership", link: "" },
  { name: "Governance", link: "" },
  { name: "Recognition and Approvals", link: "" },
  { name: "Awards and Rankings", link: "" },
  { name: "Institution Social Responsibility", link: "" }
]

const register = [
  {
    step: "Step 1 - SignUp",
    description: "Sign up or register for AKG University Entrance Exam (AKEE) by providing your basic details (Name, Email ID, Mobile No., State, Gender, and Password). Your Email ID will serve as your Username for the portal, and you will create your own password during registration.",
    confirmation: "Upon successful registration, you will receive a confirmation message on your registered mobile number and email. Use your Username and Password to log in to your AKEE account."
  },
  {
    step: "Step 2 - Apply",
    description: "After successfully creating your candidate profile for CUCET, you can proceed with choosing the Date for your examination. Complete your profile by logging into your CUCET account and choose an examination date as per your convenience and preference."
  },
  {
    step: "Step 3 - Submit",
    description: "You become eligible for admission into Chandigarh University after clearing the CUCET examination. Following your attempt at CUCET, the result will shortly be intimated, based on which you can submit your application for admission and avail merit-based scholarship."
  }
];

const Home = () => {
  const [ADVIndex, setADVIndex] = useState(0);

  const handleToggle = (index) => {
    setADVIndex(index);
  };
  return (
    <>
      <div className="bg-gray-100">
        <Header title={"AKG Advantages"} Button={Button} gradient={"bg-gradient-to-r from-gray-900 to-zinc-900/40"} />
        <div className="bg-PaperBackground relative">
          <div className='absolute w-full h-full z-0 bg-white/50'></div>
          <div className="relative w-full z-10 max-w-[1400px] mx-auto">
            <section className="grid grid-cols-12 py-20 gap-10">
              <div className="col-span-9 max-md:col-span-12">
                <AkgAdvantages />
              </div>
              <div className="col-span-3 max-md:col-span-12">
                <SideBar title={"About Us"} LinkList={SideBarLink} />
              </div>
            </section>
            <div className="flex max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col max-lg:flex max-lg:flex-col w-full">
              <div className="px-3 w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
                <div className="flex flex-col">
                  <div className="px-3">
                    <h3 className="text-3xl font-novaReg mb-5 text-center">How to Register</h3>
                  </div>
                  <div className="flex">
                    <div className="px-3">
                      <div className="flex justify-between">
                        {register.map((step, index) => (
                          <div key={index} className="bg-secondary p-2 mx-3 flex items-center justify-between rounded-tl-lg rounded-br-lg w-full cursor-pointer">
                            <button
                              className="w-full p-2 gap-3 flex justify-center hover:text-white"
                              onClick={() => handleToggle(index)}
                            >
                              {step.step}
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="px-3 mb-3 text-white bg-primary rounded-xl">
                        {register ?
                          <div >
                            <h2 className="text-2xl font-novaReg mt-3 pt-4">{register[ADVIndex].step}</h2>
                            <p className="text-lg font-novaReg mt-2.5 pb-4">{register[ADVIndex].description}</p>
                            <p className="text-lg font-novaReg mb-5 pb-4">{register[ADVIndex].confirmation}</p>
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-6/12 px-3 max-sm:w-full max-md:w-full max-lg:w-full">
                <div className="flex bg-white">
                  <div className="grid grid-cols-2 -mx-3">
                    {Array(4).fill(null).map((_, index) => (
                      <div className="px-3" key={index}>
                        <a className="cursor-pointer">
                          <div className="mb-5 border">
                            <img
                              src="/image/akg-advantage/map.webp"
                              className="my-4"
                              alt=""
                            />
                            <div className="px-5 pt-4 text-center">
                              <h3 className="uppercase mb-2 text-lg font-novaReg">AKG University</h3>
                              <p className="text-sm font-novaReg">Has welcomed students from more than</p>
                              <h2 className="mb-2 text-3xl font-novaReg text-primary">50 countries</h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Home;