"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const TopCard = () => {
    return (
        // 
        <div className="relative bg-gray-100">
            <div className="block lg:hidden">
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
            <div className="lg:block hidden py-20 bg-gray-200">
                <h2 className="text-[42px] font-novaReg text-center text-black">
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent">Achievements</span> &
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent"> Milestones</span></h2>
                <p className="max-w-3xl mx-auto text-xl font-novaReg text-center">This section showcases our <strong>Notable Achievements & Significant Milestones</strong>, reflecting our dedication, growth, and commitment to excellence over time.</p>
                <div className="mt-5 md:flex items-center justify-center">
                    <div className="flex flex-wrap justify-between gap-2">
                        <div className="flex-1 p-2">
                            <img
                                src="/image/card-1.jpg"
                                alt="card-top"
                                className=" h-48 rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                            />
                        </div>
                        <div className="flex-1 p-2">
                            <img
                                src="/image/card-2.jpg"
                                alt="card-top"
                                className=" h-48 rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                            />
                        </div>
                        <div className="flex-1 p-2">
                            <img
                                src="/image/card-1.jpg"
                                alt="card-top"
                                className=" h-48 rounded-2xl transform hover:scale-105 focus:scale-105 transition duration-300 ease-in-out mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



export default TopCard;