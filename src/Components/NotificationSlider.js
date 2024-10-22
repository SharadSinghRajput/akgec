import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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

const NotificationSlider = () => {
    return (
        <section className='bg-gray-200 py-2'>
            <div className="max-w-[1500px] m-auto px-2 grid grid-cols-12  gap-5">
                <div className="col-span-4 max-lg:col-span-12 max-lg:mb-4">
                    <aside className="">
                        <div className="max-lg:px-20 max-md:px-14 max-sm:px-1 h-full ">
                            <section className="swiper-container ">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    // pagination={{ clickable: true }}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    loop={true}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper h-full"
                                >
                                    {upcomingEvents?.map((item) => (
                                        <SwiperSlide key={item.id} className="h-full">
                                            <article className="bg-[#FFFFFF] leading-nonen overflow-hidden p-5 min-h-52 shadow-sm rounded-lg">
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
                <div className="col-span-8 max-lg:col-span-12 h-full max-lg:mb-4 max-lg:px-4 max-lg:ml-0 ">
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
                                    className="rounded-xl max-2xl:h-full h-full w-full ml-auto max-lg:w-full max-lg:ml-0 object-cover"
                                    src="/image/ajay-kumar-garg-750x375-1.jpg"
                                    alt="UNA Background"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default NotificationSlider