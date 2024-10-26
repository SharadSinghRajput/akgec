"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const cardDetails = [
  {
    id: 1,
    title: "Honored at the Tech Startups Conclave & Awards 2022",
    subheading: "Ishu Bansal",
    img: "/image/home/IshuBansal.jpg",
  },
  {
    id: 2,
    title:
      "The AKGEC Robotics club is a student chapter formed on 8'MAY '2013",
    subheading: "Robotics Club",
    img: "/image/home/RoboticsHome.jpg",
  },
  {
    id: 3,
    title: "Explore ICI Membership Benefits and Advanced Concrete Technology",
    subheading: " A Grand Inaugural Ceremony",
    img: "/image/home/ICI4.jpg",
  },
  {
    id: 4,
    title: "Developing Top Engineers and Technicians for a Thriving Industry",
    subheading: "ISTE",
    img: "/image/home/iste.jpg",
  },
  {
    id: 4,
    title: "SAE International: A Century of Engineering Excellence",
    subheading: "SAE International",
    img: "/image/home/Aacar2.jpg",
  },
];

export default function SlickSlider() {

  return (
    <section className="h-full bg-[#F3F3F3] py-8 ">
      <div className="break1:max-w-[1500px] break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto">
        <header className="text-center mb-8 max-xl:mb-5">
          <h1 className="text-[42px] font-novaReg max-md:text-2xl max-sm:text-xl max-sm:px-4 text-gray-700">
            A Glimpse into Our <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent">Vibrant Journey</span>
          </h1>
        </header>
        <div className="grid grid-cols-12">
          <div className="col-span-4 max-lg:col-span-12 max-lg:mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-lg:grid-cols-2 max-lg:px-10 max-sm:px-5">
              <article className="border-r border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl xl:text-5xl  font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700 ">
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
                    <span className="text-gray-600 font-novaLight text-xl -ml-2 pr-5  max-2xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
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
                    <span className="text-gray-600 font-novaLight text-xl -ml-2 max-2xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
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
                {cardDetails?.map((item) => (
                  <SwiperSlide key={item.id} className="mb-10">
                    <article className="relative h-[22rem] w-full max-sm:h-80 max-sm:w-72 max-2xl:w-64 max-2xl:h-80 max-xl:w-52 max-xl:h-72 max-lg:h-96 max-lg:w-80 max-md:w-60 max-md:h-80 bg-white rounded-3xl shadow-md overflow-hidden flex items-end">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-5%" />
                      <figure className="relative p-10">
                        <blockquote>
                          <p className="relative text-xs uppercase text-white">{item.subheading}</p>
                        </blockquote>
                        <figcaption className="mt-3 border-t border-white/20 pt-2">
                          <p className="font-novaReg">
                            <span className="bg-gradient-to-r text-sm line-clamp-2 from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                              {item.title}
                            </span>
                          </p>
                        </figcaption>
                      </figure>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
