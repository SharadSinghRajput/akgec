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
      <div className="max-w-[1350px] mx-auto">
        <header className="text-center mb-8 max-xl:mb-5">
          <h1 className="text-4xl font-extralight max-md:text-2xl max-sm:text-xl max-sm:px-4">
            A Glimpse into Our Vibrant Journey
          </h1>
        </header>
        <div className="grid grid-cols-10">
          <div className="col-span-3 max-lg:col-span-10 max-lg:mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-lg:grid-cols-2 max-lg:px-20 max-sm:px-5">
              <article className="border-r border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-4xl font-extralight mb-1 max-lg:text-3xl max-lg:mb-3 text-gray-800 ">
                  282
                </h2>
                <span className="bg-yellow-500 text-white py-1 px-2 text-sm uppercase font-semibold rounded-md">
                  Companies
                </span>
                <p className="mt-2 text-gray-500 text-sm font-light max-md:text-xs">
                  For 2023-24 campus placements{" "}
                </p>
              </article>

              <article className="border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-4xl font-extralight mb-1 max-lg:text-3xl max-lg:mb-3 text-gray-800">
                  1406
                </h2>
                <span className="bg-yellow-500 text-white py-1 px-2 text-sm uppercase font-semibold rounded-md">
                  placements
                </span>
                <p className="mt-2 text-gray-500 text-sm font-light max-md:text-xs">
                  Offered in 2023-24 <br /> Batch
                </p>
              </article>

              <article className="border-r border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-4xl font-extralight mb-1 max-lg:text-3xl max-lg:mb-3 text-gray-800">
                  33.80{" "}
                  <span className="text-gray-600 text-3xl font-extralight -ml-2 max-2xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
                    LPA
                  </span>
                </h2>
                <span className="bg-cyan-600 text-white py-1 px-2 text-sm uppercase font-semibold rounded-md">
                  Engineering
                </span>
                <p className="mt-2 text-gray-500 text-sm font-light max-md:text-xs">
                  Highest Package <br />
                  Offered{" "}
                </p>
              </article>

              <article className="p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-4xl font-extralight mb-1 max-lg:text-3xl max-lg:mb-3 text-gray-800">
                  1.13{" "}
                  <span className="text-gray-600 text-3xl font-extralight -ml-2 max-lg:-ml-2 max-lg:text-xl max-2xl:text-2xl max-md:text-lg max-sm:text-base">
                    CR
                  </span>
                </h2>
                <span className="bg-cyan-600 text-white py-1 px-2 text-sm uppercase font-semibold rounded-md">
                  Engineering
                </span>
                <p className="mt-2 text-gray-500 text-sm font-light max-md:text-xs">
                  Highest Package in <br />
                  International
                </p>
              </article>
            </div>
          </div>
          <div className="col-span-7 ml-5 max-lg:col-span-10">
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
                  1024: { slidesPerView: 3, spaceBetween: 10 },
                }}
              >
                {cardDetails.map((item) => (
                  <SwiperSlide key={item.id} className="">
                    <article className="relative h-80 w-64 max-sm:h-80 max-sm:w-72 max-2xl:w-64 max-2xl:h-80 max-xl:w-52 max-xl:h-72 max-lg:h-96 max-lg:w-80 max-md:w-60 max-md:h-80 bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                        <span className="uppercase text-[10px]">
                          {item.subheading}
                        </span>
                        <h3 className="text-[16px] font-semibold mb-2">
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
        <div className="grid grid-cols-10 mt-5">
          <div className="col-span-3 max-lg:col-span-10 max-lg:mb-4">
            <aside className="h-full">
              <div className="max-lg:px-20 max-md:px-14 max-sm:px-1 h-full">
                <section className="swiper-container h-full">
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
                      <SwiperSlide key={item.id} className="h-full">
                        <article className="bg-[#FFFFFF] leading-none rounded-lg shadow-md overflow-hidden p-5 h-full">
                          <h5 className="text-xs uppercase font-normal">
                            Upcoming Events
                          </h5>
                          <div className="">
                            <h3 className="text-sm font-semibold">
                              {item.title}
                            </h3>
                            <a
                              className="text-[#FBB03B] text-xs font-bold uppercase w-full block text-right"
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
          <div className="col-span-7 ml-5 max-lg:col-span-10 max-lg:mb-4 max-lg:ml-0">
            <section className="bg-[#1b9fb1] rounded-xl flex justify-between max-lg:flex-col gap-3 items-center max-lg:mx-20 max-sm:mx-2">
              <div className="flex justify-between items-center max-lg:p-4">
                <figure className="pl-2">
                  <img
                    src="https://www.akgec.ac.in/wp-content/themes/twentysixteen/img/AKGEC_1_0.png"
                    alt="UNA Logo"
                    className="w-40 max-2xl:w-52 max-xl:w-40 max-lg:w-32"
                  />
                </figure>
                <div className="py-1 ml-3">
                  <h2 className="uppercase text-center font-bold text-lg max-2xl:text-[14px] max-xl:text-[14px] max-sm:text-[12px] text-white">
                    AKGEC University is the{" "}
                    <span className="text-orange-300">
                      Official Coordination Office for UNA
                    </span>{" "}
                    in India
                  </h2>
                </div>
              </div>
              <figure className="h-full w-full max-2xl:h-48">
                <img
                  className="rounded-xl max-2xl:h-full ml-auto max-lg:w-full max-lg:ml-0 object-cover"
                  src="https://www.cuchd.in/latest-assets/images/una-bg.webp"
                  alt="UNA Background"
                />
              </figure>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};