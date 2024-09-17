"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function SlickSlider() {
  const cardDetails = [
    {
      id: 1,
      title: "Honored at the Tech Startups Conclave & Awards 2022",
      subheading: "Ishu Bansal",
      img: "https://www.akgec.ac.in/wp-content/uploads/2022/03/IshuBansal.jpg",
    },
    {
      id: 2,
      title:
        "The AKGEC Robotics club is a student chapter formed on 8'MAY '2013",
      subheading: "Robotics Club",
      img: "https://www.akgec.ac.in/wp-content/uploads/2022/11/RoboticsHome.jpg",
    },
    {
      id: 3,
      title: "Explore ICI Membership Benefits and Advanced Concrete Technology",
      subheading: " A Grand Inaugural Ceremony",
      img: "https://www.akgec.ac.in/wp-content/uploads/2022/12/ICI4.jpg",
    },
    {
      id: 4,
      title: "Developing Top Engineers and Technicians for a Thriving Industry",
      subheading: "ISTE",
      img: "https://www.akgec.ac.in/wp-content/uploads/2019/06/iste.jpg",
    },
    {
      id: 4,
      title: "SAE International: A Century of Engineering Excellence",
      subheading: "SAE International",
      img: "https://www.akgec.ac.in/wp-content/uploads/2023/09/Aacar2.jpg",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title:
        "2024 1st International Conference on Advanced Computing & Emerging Technologies (ACET)",
      btn: "Read More",
    },
    {
      id: 2,
      title:
        "2nd International Conference on Advancements and Key Challenges in Green Energy and Computing (AKGEC 2024)",
      btn: "Read More",
    },
  ];

  return (
    <section className="h-full bg-[#F3F3F3] py-8 ">
      <div className="break1:max-w-[1650px] break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto">
        <header className="text-center mb-8 max-xl:mb-5">
          <h1 className="text-[42px] font-novaReg max-md:text-2xl max-sm:text-xl max-sm:px-4 text-gray-700">
            A Glimpse into Our <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent">Vibrant Journey</span>
          </h1>
        </header>
        <div className="grid grid-cols-12">
          <div className="col-span-4 max-lg:col-span-12 max-lg:mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-lg:grid-cols-2 max-lg:px-20 max-sm:px-5">
              <article className="border-r border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl  xl:text-5xl  font-novaThin mb-2   max-lg:text-3xl max-lg:mb-3 text-gray-700 ">
                  282
                </h2>
                <span className="bg-gradient-to-tr from-amber-500 to-red-600 text-white py-1.5 mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                  Companies
                </span>
                <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                  For 2023-24 campus <br /> placements{" "}
                </p>
              </article>

              <article className="border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl  xl:text-5xl  font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                  1406
                </h2>
                <span className="bg-gradient-to-tr from-amber-500 to-red-600 text-white py-1.5 mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                  placements
                </span>
                <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                  Offered in <br /> 2023-24 Batch
                </p>
              </article>

              <article className="border-r border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl  xl:text-5xl  font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                  <span className="whitespace-nowrap">
                    33.80{" "}
                    <span className="text-gray-600 text-xl -ml-1   max-2xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
                      LPA
                    </span>
                  </span>
                </h2>
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-1.5 mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                  Engineering
                </span>
                <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                  Highest Package <br />
                  Offered{" "}
                </p>
              </article>

              <article className="p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl  xl:text-5xl  font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                  <span className="whitespace-nowrap">
                    1.13{" "}
                    <span className="text-gray-600 text-xl -ml-1  max-2xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
                      CR
                    </span>
                  </span>
                </h2>
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-1.5 mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                  Engineering
                </span>
                <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                  Highest Package in <br />
                  International
                </p>
              </article>
            </div>
          </div>
          <div className="ml-5 col-span-8 max-lg:col-span-12">
            <section className="max-lg:px-16 max-sm:px-0">
              <Swiper
                slidesPerView={1}
                spaceBetween={5}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                  400: { slidesPerView: 2, spaceBetween: 20 },
                  450: { slidesPerView: 2 },
                  640: { slidesPerView: 2 },
                  789: { slidesPerView: 2 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
              >
                {cardDetails.map((item) => (
                  <SwiperSlide key={item.id} className="mb-10">
                    <article className="relative h-[22rem] w-full max-sm:h-80 max-sm:w-72 max-2xl:w-64 max-2xl:h-80 max-xl:w-52 max-xl:h-72 max-lg:h-96 max-lg:w-80 max-md:w-60 max-md:h-80 bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                      <div className="absolute bottom-0 left-0 w-full py-4 px-6 text-white">
                        <span className="uppercase font-novaReg text-[10px]">
                          {item.subheading}
                        </span>
                        <h3 className="text-lg font-novaBold leading-none mb-2">
                          {item.title}
                        </h3>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-10 gap-5 ">
          <div className="col-span-4 max-lg:col-span-12 max-lg:mb-4">
            <aside className="m-2">
              <div className="max-lg:px-20 max-md:px-14 max-sm:px-1 h-full ">
                <section className="swiper-container ">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper h-full"
                  >
                    {upcomingEvents.map((item) => (
                      <SwiperSlide key={item.id} className="h-full mb-10">
                        <article className="bg-[#FFFFFF] leading-nonen overflow-hidden p-5 h-full shadow-sm rounded-lg">
                          <h5 className="text-sm bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent uppercase font-novaBold">
                            Upcoming Events
                          </h5>
                          <div className="mt-5">
                            <h3 className="text-lg font-novaSemi leading-none">
                              {item.title}
                            </h3>
                            <a
                              className="mt-5 bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent text-[15px] font-novaBold uppercase w-full block text-right"
                              href="#"
                            >
                              {item.btn}
                            </a>
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </section>
              </div>
            </aside>
          </div>
          <div className=" m-2 col-span-8 max-lg:col-span-12 max-lg:mb-4 max-lg:px-4 max-lg:ml-0 ">
            <section className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 flex justify-center items-center">
                  <img
                    src="https://www.akgec.ac.in/wp-content/themes/twentysixteen/img/AKGEC_1_0.png"
                    alt="UNA Logo"
                    className="w-28 aspect-square"
                  />
                </div>
                <div className="col-span-5 flex justify-center items-center">
                  <h2 className="uppercase text-center max-w-96 font-novaBold leading-5 text-xl max-2xl:text-[18px] max-xl:text-[14px] max-sm:text-[12px] text-white">
                    AKGEC hosts ACET 2024: <span className="text-orange-300"> 1st International Conference </span> on Advanced Computing and Emerging Technologies
                  </h2>
                </div>
                <div className="col-span-5">
                  <img
                    className="rounded-xl max-2xl:h-full h-[150px] w-full ml-auto max-lg:w-full max-lg:ml-0 object-cover"
                    src="/image/ajay-kumar-garg-750x375-1.jpg"
                    alt="UNA Background"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
