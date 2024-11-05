"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThreeSlides from "@/Components/ThreeSlides";

const statisticsData = [
  { number: '20+', sub: 'COE', text: 'Center of Excellence' },
  { number: '60', sub: 'Research Centers', text: '67 Funded Projects Ongoing' },
  { number: '15', sub: 'Crores', text: 'Annual Research Budget' },
];

const slides = [
  {
    id: 1,
    title: "Aerospace",
    description: "AKG University introduces 'CUSAT', North India's premier Student Satellite Designing and Training program, marking its pioneering step in advanced aerospace engineering education."
  },
  {
    id: 2,
    title: "Inauguration",
    description: "Union Defence Minister Rajnath Singh inaugurated the Kalpana Chawla Centre for Research in Space Science and Technology (KCCRST) at AKG University on January 3, 2022."
  },
  {
    id: 3,
    title: "ISRO",
    description: "India's four astronaut-designates for the Gaganyaan mission undergo rigorous training at ISRO's crew training facility, covering simulators, microgravity familiarization, survival, flying practice, and Yoga sessions."
  },
  {
    id: 4,
    title: "Aerospace",
    description: "AKG University introduces 'CUSAT', North India's premier Student Satellite Designing and Training program, marking its pioneering step in advanced aerospace engineering education."
  },
  {
    id: 5,
    title: "Inauguration",
    description: "Union Defence Minister Rajnath Singh inaugurated the Kalpana Chawla Centre for Research in Space Science and Technology (KCCRST) at AKG University on January 3, 2022."
  },
  {
    id: 6,
    title: "ISRO",
    description: "India's four astronaut-designates for the Gaganyaan mission undergo rigorous training at ISRO's crew training facility, covering simulators, microgravity familiarization, survival, flying practice, and Yoga sessions."
  }
];

const Research = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length); // Loop back to start
  };

  return (
    <>
      <section className="bg-BG14 bg-cover w-full h-[90vh]">
        <div className="flex h-full max-w-7xl mx-auto pt-20 px-3">
          <div className="flex justify-end w-full my-auto -mx-4">
            <div className="w-9/12 px-3">
              <div className="max-w-[440px]">
                <div className="mb-6">
                  <h2 className="text-[32px] font-novaReg text-white mb-2">Innovation &
                    <span className="text-[32px] font-novaReg text-[#f7a600]"> Entrepreneurship</span>
                  </h2>
                </div>
                <p className="font-novaBold text-lg text-white mb-4 leading-[1.20]">Firmly established as a rapidly rising hub of excellence for innovation and entrepreneurship, AKG University actively nurtures and empowers handpicked creative ideas across diverse fields, transforming them into valuable and viable business opportunities.</p>
                <div className="mb-6 max-w-64">
                  <a className="py-1 px-3 mb-4 mr-4 font-novaBold text-white" href="tbi.php">AKG TBI</a>
                  <a className="py-1 px-3 mb-4 mr-4 font-novaBold text-white" href="tbi.php">IEDC</a>
                  <a className="py-1 px-3 mr-4 font-novaBold text-white inline-block" href="tbi.php">APJ Abdul Kalam Conclave.</a>
                </div>
                <div className="flex flex-wrap flex-row -mx-3">
                  <div className="px-3 border-r-white border-r-2">
                    <div className="flex flex-col w-32">
                      <h2 className="text-5xl text-white mb-2 font-novaBold">120</h2>
                      <span className="font-novaBold text-[#f7a600] uppercase">Startups</span>
                    </div>
                  </div>
                  <div className="pl-12 pr-3">
                    <div className="flex flex-col ">
                      <h2 className="text-5xl text-white mb-2 font-novaBold">2300+</h2>
                      <span className="font-novaBold text-[#f7a600] uppercase">Patents</span>
                    </div>
                  </div>
                  <div className="px-3 w-full flex">
                    <a className="py-[9px] px-6 mt-12 border rounded-xl bg-[#f7a600] border-none text-white text-sm font-novaBold uppercase" href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full px-3">
              <div className="max-w-[430px]">
                <div className="mb-6">
                  <h1 className="mb-2"><span className="text-[#f7a600] font-novaReg text-[40px] text-center">Research</span></h1>
                </div>
                <p className="font-novaBold text-lg text-white mb-4 leading-[1.20]">A beacon of innovation & education, AKG fosters research, experiential learning, and industry ties for students' future success. With substantial funding, 50 research groups, 30 advanced labs, and numerous patents, AKG sets remarkable standards in academia & research.</p>
                <div className="flex flex-wrap w-full">
                  <div className="col-span-12 w-full px-3">
                    <div className="flex flex-col w-full mb-4">
                      <h3 className="text-[42px] text-white mb-2 w-full font-novaBold">420</h3>
                      <span className="text-[#f7a600] font-novaBold leading-none uppercase w-full">Million INR<br /> received as grants in<br /> last 5 years</span>
                    </div>
                  </div>
                  <div className="w-[55%] px-4 border-r-2">
                    <div className="flex flex-col pr-4 w-full">
                      <h3 className="text-[42px] text-white font-novaBold mb-2 w-full">9000+</h3>
                      <span className="text-[#f7a600] font-novaBold leading-none text-sm uppercase w-full">Published in Referred Journals</span>
                    </div>
                  </div>
                  <div className="w-[45%] pl-6">
                    <div className="flex flex-col">
                      <h3 className="text-[42px] text-white mb-2 w-full font-novaBold">70</h3>
                      <span className="text-[#f7a600] font-novaBold leading-none uppercase w-full">Center of Research</span>
                    </div>
                  </div>
                  <div className="px-3 w-full flex">
                    <a href="research.php" className="py-[9px] px-6 mt-12 border rounded-xl bg-[#f7a600] text-white text-sm font-novaBold uppercase">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-7xl mx-auto h-full flex gap-10">
          <div className="w-[35%] relative bg-blue-600 py-20 flex flex-col gap-5 text-white px-5">
            <h2 className="text-4xl font-novaBold">About Research</h2>
            <p className="leading-5 font-novaLight ">The research landscape at AKGU University is extensive and impactful. Scholars at the university engage in research across diverse fields, striving to enhance human knowledge through rigorous inquiry, innovation, and insight. AKGU University is acknowledged by the Department of Scientific and Industrial Research (DSIR) for its contributions to scientific advancement.</p>
            <a className="w-fit py-2.5 px-6 border rounded-xl bg-[#f7a600] border-none text-white text-sm font-novaBold uppercase" href="#">Read More</a>
          </div>
          <div className="w-[65%] flex items-center gap-20">
            <div className="grid grid-cols-2 md:grid-cols-1">
              {statisticsData?.map((item, index) => (
                <div key={index} className="p-3">
                  <h2 className="text-4xl font-novaBold">
                    {item.number}
                    <sub className="text-sm font-novaBold ml-1 uppercase align-bottom">{item.sub}</sub>
                  </h2>
                  <span className="font-novaBold uppercase leading-none">{item.text}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="relative">
                <Image
                  src="/image/research/research-female.jpg"
                  alt="Research Video"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-current">
                      <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-novaBold text-center mb-6">Know About Us</h1>
          <div className="space-y-6 text-center">
            <p className="leading-5 font-novaLight text-lg">
              AKG University research is strengthened by additional 52 Crore of funded research by the government bodies and corporates.
              The research is conceded at both in the department itself and at University Centre for Research & Development and at the 60 Research
              centers within the campus. AKG University Research fraternity includes teaching staff members, scholars, postgraduate and
              undergraduate student & international scholars. The university has tie ups with the prominent national and international institutions for
              joint research and guidance. University is also focusing on the innovation and patents. The innovation and entrepreneurship activities is
              carried out at AKG University Technology Business Incubator.
            </p>
            <p className="leading-5 font-novaLight text-lg">
              Technology Business Incubator is an innovative platform offering mentorship and financial support to passionate individuals aspiring to
              be entrepreneurs. TBI is accelerating the development of young entrepreneurial start-ups from early to mid-stage entrepreneurial
              development. AKG University filed 2400+ Patents, which is second highest number of patent filed by any institution/organization
              in India.
            </p>
          </div>
        </div>
      </section>

      <ThreeSlides slides={slides} />

      <section className="max-w-4xl mx-auto">
      <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/image/research/student-1.jpg"
            alt="Students presenting Queen Belt"
            width={400}
            height={200}
            className="w-full h-64  object-cover"
          />
          <div className="p-4 mb-10">
            <h2 className="text-xl font-novaBold mb-2">AKG University students invent 'King Belt' for women's safety</h2>
            <p className="leading-5 font-novaLight">
              At a time when rape cases are increasing at an alarming rate, a group of students from AKG
              University have invented a device for women's safety. The students have invented.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/image/research/student-2.jpg"
            alt="Student with app-based cycle"
            width={400}
            height={200}
            className="w-full h-64 object-cover"
          />
          <div className="p-4 mb-10">
            <h2 className="text-xl font-novaBold mb-2">AKG University student invents app-based, battery-operated</h2>
            <p className="leading-5 font-novaLight">
              A university student in AKG invented an application-based battery-operated for the
              students living in hostel to travel to their classes.Spot can be traced through.
            </p>
          </div>
        </div>
      </div>
    </div>
      </section>

    </>
  );
}

export default Research;