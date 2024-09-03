"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper";

export const TopCard = () => {
    return (
        <div className="relative">
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
                            className="w-full h-auto border rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/image/card-2.jpg"
                            alt="card-top"
                            className="w-full h-auto border rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Default Layout for Larger Screens */}
            <div className="hidden md:flex items-center justify-center p-8">
                <div className="flex flex-row gap-8">
                    <div className="flex-1 p-2">
                        <img
                            src="/image/card-1.jpg"
                            alt="card-top"
                            className="w-full h-60 border rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out"
                        />
                    </div>
                    <div className="flex-1 p-2">
                        <img
                            src="/image/card-2.jpg"
                            alt="card-top"
                            className="w-full h-60 border rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
