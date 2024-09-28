"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const TopCard = () => {
    return (
        // 
        <div className="relative bg-[#F3F3F3]">
            {/* Swiper Slider for Mobile */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    navigation
                >
                    <SwiperSlide>
                        <img
                            src="/image/card-1.jpg"
                            alt="card-top"
                            className="w-3/4 h-auto border rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/image/card-2.jpg"
                            alt="card-top"
                            className="w-3/4 h-auto border rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Default Layout for Larger Screens */}
            <div className="hidden h-56 md:flex items-center justify-center  relative">
                <div className="flex flex-row gap-8 absolute -top-6">
                    <div className="flex-1 p-2">
                        <img
                            src="/image/card-1.jpg"
                            alt="card-top"
                            className=" h-48 border rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                        />
                    </div>
                    <div className="flex-1 p-2">
                        <img
                            src="/image/card-2.jpg"
                            alt="card-top"
                            className=" h-48 border rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};



export default TopCard;