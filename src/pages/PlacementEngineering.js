"use client";

import React from "react";
import LogoSlider from "./Components/LogoSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

const PlacementEngineering = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Samridhi Jain",
      quote:
        "I Samridhi Jain got placed in 3 dream companies that is Marvell India, Bank of America and Dell. This day involved lot of hard work. I must thank Chandigarh University for the amazing mentorship. The story started when I was looking to upgrade my skills while I was on a job, as on several occasions I felt that I lacked the latest knowledge to move ahead. At CU, they not only provide you with the best of theoretical inputs but also ensure that you receive ample amount of practical exposure. This way you don’t just have the technical know-how of your field but also understand how to use that knowledge. I also thank the placement department for helping me out.",
      image: "/image/student/1.png",
      company: "Marvell",
    },
    {
      id: 2,
      name: "Simran",
      quote:
        "My sincere gratitude and thanks to the AIT-CSE Department. The Environment CU provided me to study and learn was impeccable and it is one of the main reasons why I succeeded and landed a job in Bank of America. My course was detailed and interesting. Overall learning in Chandigarh Univesity has been an important stepping stone in my career.",
      image: "/image/student/2.png",
      company: "Bank of America",
    },
    {
      id: 3,
      name: "Royal Kaushal",
      quote:
        "I'm very grateful to Chandigarh university for providing me a tremendous career building platform. Department of career development played a very crucial role throughout the journey. Chandigarh university helped me in my personal as well as professional growth. Working in industry-collaborated laboratory is one unique experience. It makes for a memorable learning when you get to experiment on latest machines. The faculty here are very supportive and helpful and above all they have loads of experience and knowledge which they are quite happy to share with us. I am proud to be a part of CU Family.",
      image: "/image/student/3.png",
      company: "Intel",
    },
    {
      id: 4,
      name: "MAYANK TRIPATHI",
      quote:
        "I found the decision to study at Chandigarh University as one of the worthy decisions of my life. Experienced faculties, approachable management, and extensive practical exposure are the assets of this university that have helped us all through",
      image: "/image/student/1.png",
      company: "Cognizant",
    },
    {
      id: 5,
      name: "Simranpreet kour",
      quote:
        "Chandigarh University delivers every opportunity you require to secure a good employment opportunity with your ideal company. Whether it's honing active soft skills through seminars, the opportunity to attend technical workshops, or any other assistance students need, Chandigarh University and the faculty of the department are always willing to assist in an extremely helpful manner. At the conclusion of each day, I found that this place is where dreams come true and where one embarks on a journey of self-discovery.",
      image: "/image/student/2.png",
      company: "Dell Technologies",
    },
  ];


  return (
    <>
      <section>
        <div className="w-full flex justify-center items-center h-[450px] max-lg:h-80 bg-cover bg-center bg-[#cccccc] bg-blend-multiply bg-[url('https://www.cuchd.in/placements/img/placement-engineering-banner.jpg')]">
          <div className="text-white text-center mt-20 max-w-2xl max-md:max-w-lg max-sm:max-w-sm max-sm:px-2">
            <h3 className="text-xl tracking-wide font-novaReg max-sm:text-[18px]">
              University with Best Placements
            </h3>
            <h1 className="text-5xl max-md:text-4xl max-md:font-novaSemi max-sm:text-3xl tracking-tight font-novaBold">
              Engineering Placements in Punjab
            </h1>
          </div>
        </div>
        <main className="">
          <div className="h-full mx-auto max-w-[1250px] max-xl:max-w-[1000px] max-lg:max-w-[600px] max-sm:max-w-[5x00px] py-5 grid grid-cols-2 max-lg:grid-cols-1 gap-5">
            <div className="max-w-2xl max-sm:px-2 ">
              <h1 className="leading-none text-4xl tracking-wide font-novaBold max-w-md">
                Engineering Placements at Chandigarh University A Glance
              </h1>
              <p className="text-sm leading-4 my-5">
                Campus Placements for the session Batch 2023-24 saw some big
                names such as Microsoft, Amazon, IBM, Hewlett Packard, SAP Labs,
                Samsung, L&T, Arcesium, Wipro, Flipkart recruiting engineering
                students from Chandigarh University. A record number of 3750
                engineering students were selected during the campus placements
                in which more than 240 multinational companies participated. In
                total there was a jump of 30% in number of total companies
                visiting the CU campus for campus placements of engineering
                students while there was jump of 70% in the number of core
                branch companies which selected the fresh talent.
              </p>
              <p className="text-sm leading-4">
                Moreover the total number of offers made to the engineering
                students also saw a rise of 60% in comparison to last year. Of
                the total 240 Engineering sector companies, more than 400+ MNC’s
                offered pay-package of more than 5 LPA while number of companies
                offering package of more than 10 LPA touched 100+ this year. On
                the merits of their hard work and potential, the brilliant
                students of Chandigarh University have set a new benchmark by
                securing an international package of Rs. 1.7 CR and a national
                package of Rs. 54.75 LPA.
              </p>
            </div>

            <div className="grid grid-cols-3 max-sm:px-2 text-white">
              <div className="max-xl:hidden max-lg:block">
                <img
                  className="h-full w-full object-cover"
                  src="https://www.cuchd.in/placements/img/pl-engg-img-3.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-2 max-xl:hidden max-lg:block">
                <img
                  className="h-full w-full object-cover"
                  src="https://www.cuchd.in/placements/img/pl-engg-img-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-start-1 row-start-3">
                <img
                  className="h-full w-full object-cover"
                  src="https://www.cuchd.in/placements/img/pl-engg-img-5.jpg"
                  alt=""
                />
              </div>
              <div className="col-start-1 row-start-2 bg-[#1c1f52] flex justify-start py-6 px-5 max-sm:px-2 items-center flex-col text-center">
                <h1 className="text-4xl font-bold max-sm:text-2xl">350</h1>
                <p className="text-[13px] leading-4 max-sm:text-[10px]">
                  Multi-Nationals select 3750 Engineers during Batch 2023-24
                </p>
              </div>
              <div className="col-start-2 row-start-2 bg-[#74ae3d] flex justify-start py-6 px-5 max-sm:px-2 items-center flex-col text-center">
                <h1 className="text-4xl font-bold max-sm:text-2xl">50</h1>
                <p className="text-[13px] leading-4 max-sm:text-[10px]">
                  Companies offering package of Rs. 15 LPA or more.
                </p>
              </div>
              <div className="row-span-2 col-start-3 row-start-2 bg-[#0173bc] flex justify-start pt-5 px-5 max-sm:px-2 max-sm:py-3 items-center flex-col text-center">
                <h1 className="text-4xl font-bold max-sm:text-2xl">118</h1>
                <p className="text-[13px] leading-4 max-sm:text-[10px]">
                  Core Engineering Companies select 1097 students from
                  Mechanical, Automobile, Electrical, Electronics &
                  Communication and Civil Engineering branches.
                </p>
              </div>
              <div className="h-60 row-span-2 row-start-3 bg-[#00a362] flex justify-start pt-5 px-5 items-center max-sm:py-3 flex-col text-center">
                <h1 className="text-4xl font-bold max-sm:text-2xl">500</h1>
                <p className="text-[13px] leading-4 max-sm:text-[10px]">
                  Top Fortune 500 Companies select Engineering students in
                  Campus Placements (Microsoft, Amazon, Hewlett Packard, Bank of
                  America, NOKIA, Deloitte, IBM, DELL, SAP Labs)
                </p>
              </div>
              <div className="col-start-3 row-start-4 bg-[#f47621] flex justify-start py-6 px-5 items-center max-sm:py-3 flex-col text-center">
                <h1 className="text-4xl font-bold max-sm:text-2xl">100</h1>
                <p className="text-[13px] leading-4 max-sm:text-[10px]">
                  Companies offering 10 LPA or more salary package made 100+
                  selections
                </p>
              </div>
              <div className="h-44 row-span-2 col-start-1 row-start-4 bg-[#5c5c5c] flex justify-start pt-5 px-5 max-sm:py-3 items-center flex-col text-center">
                <h1 className="text-4xl font-bold max-sm:text-2xl">50</h1>
                <p className="text-[13px] leading-4 max-sm:text-[10px]">
                  MNCs among the India's Top 100 companies have made 500+
                  offers.
                </p>
              </div>
            </div>
          </div>
        </main>
        <section className="mx-auto max-w-6xl max-xl:max-w-5xl max-lg:max-w-2xl max-md:max-w-xl grid grid-cols-2 max-lg:grid-cols-1 gap-5 pb-10 px-4 max-md:px-2">
          <div className="flex flex-col justify-between shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
            <div className="p-6 max-sm:p-4">
              <span className="text-[#df8934] text-xl font-medium">
                Placements
              </span>
              <h1 className="text-3xl font-bold leading-none">
                Computer Science and IT branches leads campus placements at CU
              </h1>
              <p className="text-[13px] leading-4 mt-3">
                On the merits of their hard work and potential in terms of
                Computer Science Engineering, the brilliant students of
                Chandigarh University have set a new benchmark by securing an
                international package of Rs. 1.7 CR and a national package of
                Rs. 54.75 LPA. IT giants such as Microsoft, IBM, SAP Labs,
                Hewlett Packard visited CU and recruited more than 2030 CSE/IT
                Engineering students. World’s top IT giant Microsoft selected
                Computer Science and IT Engineering students consecutively for
                last three years, while number the selections have increased
                three times and touched 15. India’s leading IT Company Wipro
                (394), Capgemini (217), Mindtree (101) while the global IT giant
                IBM also selected record number of 196 engineering students
                which is highest number of selections made in any campus in
                North India.
              </p>
            </div>
            <div className="flex w-full text-white">
              <div className="flex-1 flex justify-center items-center flex-col text-center bg-center bg-contain py-8 max-sm:py-4 bg-[#261172] bg-blend-multiply bg-[url('https://www.cuchd.in/placements/img/pl-inn-1.jpg')]">
                <span className="block text-center text-4xl max-sm:text-2xl font-bold">
                  122
                </span>
                <p className="text-center text-xs max-w-20">Total Companies</p>
              </div>
              <div className="flex-1 flex justify-center items-center flex-col bg-[#00a362] py-5">
                <span className="block text-center text-4xl max-sm:text-2xl font-bold">
                  2030
                </span>
                <p className="text-center text-xs max-w-20">Student Selected</p>
              </div>
              <div className="flex-1 flex justify-center items-center flex-col bg-[#5c5c5c] py-5">
                <span className="block text-center text-4xl max-sm:text-2xl font-bold">
                  1.7 <span className="text-xl max-sm:text-base -ml-2">CR</span>
                </span>
                <p className="text-center text-xs max-w-28">
                  International Highest Package
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
            <div className="p-6 max-sm:p-4">
              <span className="text-[#df8934] text-xl font-medium">
                Placements
              </span>
              <h1 className="text-3xl font-bold leading-none">
                Mechanical, Mechatronics, Aerospace and Automobile Engineering
              </h1>
              <p className="text-[13px] leading-4 mt-3">
                More than 115 companies selected 530 students from Mechanical,
                Aerospace, Mechatronics & Automobile Engineering branch offering
                pay packages up-to 9 LPA. Top Automobile and aviation companies
                which included Mahindra & Mahindra, Ashok Leyland, Essar Group,
                Jamna Autos, Indigo Airlines, TAFE, Royal Enfield, Hyundai, John
                Deere, MRF have selected Automobile Engineering students while
                companies like Reliance Industries, Godrej, Sanmar Group, Jindal
                Steel, Asahi Glass, Tata Power, Tata Technologies, Schindler
                have recruited students from Mechanical Engineering.
              </p>
            </div>
            <div className="flex w-full text-white">
              <div className="flex-1 flex justify-center items-center flex-col text-center bg-center bg-contain py-8 max-sm:py-4 bg-[#261172] bg-blend-multiply bg-[url('https://www.cuchd.in/placements/img/pl-inn-1.jpg')]">
                <span className="block text-center text-4xl max-sm:text-2xl font-bold">
                  122
                </span>
                <p className="text-center text-xs max-w-20">Total Companies</p>
              </div>
              <div className="flex-1 flex justify-center items-center flex-col bg-[#00a362] py-5">
                <span className="block text-center text-4xl max-sm:text-2xl font-bold">
                  2030
                </span>
                <p className="text-center text-xs max-w-20">Student Selected</p>
              </div>
              <div className="flex-1 flex justify-center items-center flex-col bg-[#5c5c5c] py-5">
                <span className="block text-center text-4xl max-sm:text-2xl font-bold">
                  1.7 <span className="text-xl max-sm:text-base -ml-2">CR</span>
                </span>
                <p className="text-center text-xs max-w-28">
                  International Highest Package
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
            <div className="p-6 max-sm:p-4">
              <span className="text-[#df8934] text-xl font-medium">
                Placements
              </span>
              <h1 className="text-3xl font-bold leading-none ">
                Civil Engineering, Petroleum and Chemical Placements
              </h1>
              <p className="text-[13px] leading-4 mt-3">
                Number of MNCs for the selection of Civil and Chemical
                Engineering students touched 35 which selected more than 178
                students during campus placement session. International
                Construction Company, Leighton selected more than 15 Civil
                Engineering students during campus placements. Top names like
                L&T Constructions, Samsung Engineering, Shapoorji Pallonji,
                Eveready Industries, Mahindra Susten, Deepak Nitrate, ATS
                Infrastructure selected the Civil and Chemical Engineering
                students. The salary package for Civil & Chemical touched scaled
                a new high and the highest package of 15 LPA was offered to the
                students.
              </p>
            </div>
            <div className="flex w-full text-white">
              <div className="flex-1 flex justify-center items-center flex-col text-center bg-center bg-contain py-8 max-sm:py-4 bg-[#261172] bg-blend-multiply bg-[url('https://www.cuchd.in/placements/img/pl-inn-1.jpg')]">
                <span className="block text-center text-4xl font-bold max-sm:text-2xl">
                  122
                </span>
                <p className="text-center text-xs max-w-20">Total Companies</p>
              </div>
              <div className="flex-1 flex justify-center items-center flex-col bg-[#00a362] py-5">
                <span className="block text-center text-4xl font-bold max-sm:text-2xl">
                  2030
                </span>
                <p className="text-center text-xs max-w-20">Student Selected</p>
              </div>
              <div className="flex-1 flex justify-center items-center flex-col bg-[#5c5c5c] py-5">
                <span className="block text-center text-4xl font-bold max-sm:text-2xl">
                  1.7 <span className="text-xl max-sm:text-base -ml-2">CR</span>
                </span>
                <p className="text-center text-xs max-w-28">
                  International Highest Package
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
            <div className="p-6 max-sm:p-4">
              <span className="text-[#df8934] text-xl font-medium">
                Placements
              </span>
              <h1 className="text-3xl font-bold leading-none">
                Electrical and Electronics & Communication Engineering
              </h1>
              <p className="text-[13px] leading-4 mt-3">
                While talking about placements of Electronics & Communication
                and Electrical branches, Vice-Chancellor said, "More than 37
                companies recruited 628 engineering students from these branches
                and the highest package offered touched 10 LPA". On one hand
                selection of Electronics & Communication Engineering students
                were done by top notch telecom & mobile manufacturing companies
                which included Bharti Airtel, Reliance Communication, Verizon,
                Lava while electronics and home appliance companies like
                Panasonic, Samsung also selected the students from these
                branches.
              </p>
            </div>
            <div className="flex w-full text-white">
              <div className="flex-1 flex justify-center items-center flex-col text-center bg-center bg-contain py-8 max-sm:py-4 bg-[#261172] bg-blend-multiply bg-[url('https://www.cuchd.in/placements/img/pl-inn-1.jpg')]">
                <span className="block text-center text-4xl font-bold max-sm:text-2xl">
                  122
                </span>
                <p className="text-center text-xs max-w-20">Total Companies</p>
              </div>
              <div className="flex-1 flex justify-center items-center flex-col bg-[#00a362] py-5">
                <span className="block text-center text-4xl font-bold max-sm:text-2xl">
                  2030
                </span>
                <p className="text-center text-xs max-w-20">Student Selected</p>
              </div>
              <div className="flex-1 flex justify-center items-center flex-col bg-[#5c5c5c] py-5">
                <span className="block text-center text-4xl font-bold max-sm:text-2xl">
                  1.7 <span className="text-xl max-sm:text-base -ml-2">CR</span>
                </span>
                <p className="text-center text-xs max-w-28">
                  International Highest Package
                </p>
              </div>
            </div>
          </div>
        </section>
        <LogoSlider />
        <section className="bg-[#1c1f52] w-full ">
          <div className="max-w-6xl max-xl:max-w-4xl max-lg:max-w-3xl mx-auto h-full flex justify-start pt-10 items-center flex-col text-white bg-center bg-contain bg-[url('https://www.cuchd.in/placements/img/world-map.png')]">
            <span className="text-[#d58544] text-3xl max-sm:text-2xl">Reviews</span>
            <h1 className="text-5xl font-bold max-sm:text-4xl">Student Stories</h1>
            <div className="relative w-full flex justify-center items-center">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {reviewsData.map((review) => (
                  <SwiperSlide key={review.id}>
                    <div className="my-10 text-center flex flex-col items-center mx-10 max-sm:mx-5">
                      <p className="max-w-3xl max-md:text-sm">{review.quote}</p>
                      <div className="flex flex-col items-center mt-10">
                        <img
                          className="h-20 w-20 object-cover object-top rounded-full"
                          src={review.image}
                          alt={review.name}
                        />
                        <div className="mt-4 uppercase text-center">
                          <h4 className="font-bold">{review.name}</h4>
                          <small>{review.company}</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-next custom-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  className="w-8 h-8 max-sm:w-6 max-sm:h-6"
                >
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <div className="swiper-button-prev custom-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  className="w-8 h-8 max-sm:w-6 max-sm:h-6"
                >
                  <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#bb2225]">
          <div className="max-w-[1400px] max-xl:max-w-[1000px] max-lg:max-w-[700px] max-md:max-w-xl max-sm:max-w-sm text-white mx-auto grid grid-cols-3 max-md:grid-cols-1">
            <div className="px-5 max-lg:px-0 max-sm:px-3 py-10">
              <h1 className="text-3xl max-xl:text-2xl font-bold max-lg:text-xl leading-none max-w-72">
                University Placement Tracker
              </h1>
              <ul className="leading-9 max-xl:text-[14px] max-xl:leading-7 pt-5">
                <li>
                  <a
                    href="/highest-package-offered"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Highest Package Offered</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/students-placed"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Students Placed</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/companies-visited"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>No. of Companies Visited</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/campus-placements-covid"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Campus Placements during COVID-19 times</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/job-roles-offered"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Various Job Roles Offered to Students</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/student-diversity"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>
                      Explore Student Diversity throughout the countries
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-[#023e94] max-sm:px-3 px-10 max-lg:px-4 py-10">
              <h1 className="text-3xl max-xl:text-2xl font-bold leading-none max-lg:text-xl max-w-80">
                On-Campus Placement Packages
              </h1>
              <ul className="leading-9 max-xl:text-[14px] max-xl:leading-7 pt-5">
                <li>
                  <a
                    href="/highest-package-offered"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Packages above 25 Lacs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/students-placed"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Packages above 20 Lacs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/companies-visited"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Packages above 15 Lacs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/campus-placements-covid"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Packages above 10-15 Lacs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/job-roles-offered"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Packages above 7-10 Lacs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/student-diversity"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Packages above 5-6 Lacs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/student-diversity"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Stipend Slab (Range)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="py-10 max-lg:px-3 max-sm:px-3 px-10">
              <h1 className="text-3xl max-xl:text-2xl max-lg:text-xl font-bold leading-none max-w-72">
                University Placement analysis
              </h1>
              <ul className="leading-9 max-xl:text-[14px] max-xl:leading-7 pt-5">
                <li>
                  <a
                    href="/engineering-placement"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Engineering Placement</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/management-placement"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Management Placement</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/hotel-management-placement"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Hotel Management Placement</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/pharma-sciences-placement"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Pharma Sciences Placement</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/physics-placement"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Physics Placement</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/placement-tracker"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Placement Tracker</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/register-joint-placement"
                    className="flex items-center space-x-2 hover:underline"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.2 512.2"
                      className="fill-white"
                      height={16}
                      width={16}
                    >
                      <g>
                        <path d="M509,248.2L295.5,35.4c-3.1-3-7.6-3.9-11.6-2.3c-4,1.7-6.6,5.5-6.6,9.9v117.3H10.7C4.8,160.3,0,165.1,0,171v170.7c0,5.9,4.8,10.7,10.7,10.7h266.7v116.9c0,4.3,2.6,8.2,6.6,9.9c1.3,0.6,2.7,0.8,4.1,0.8c2.8,0,5.5-1.1,7.6-3.1l213.5-213.4c2-2,3.1-4.7,3.1-7.6C512.2,252.9,511,250.2,509,248.2z" />
                      </g>
                    </svg>
                    <span>Register for Joint Placement Program</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default PlacementEngineering;