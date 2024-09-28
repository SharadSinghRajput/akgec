import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const ThreeSlides = ({slides}) => {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="w-full relative py-20">
                <h2 className="text-center text-2xl font-novaBold uppercase">Latest Research News</h2>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 3000, // Change this to set the delay between slides
                        disableOnInteraction: false, // Set to true if you want to stop autoplay after user interactions
                    }}
                    navigation={{
                        nextEl: '#slider-button-right',
                        prevEl: '#slider-button-left',
                    }}
                    className="multiple-slide-carousel"
                >
                    {slides?.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="rounded-2xl shadow-cardShadow flex flex-col justify-center items-center flex-grow p-8 my-10 min-h-52 bg-white">
                                <div className="relative w-full mb-4">
                                    <div className="absolute -top-10 left-0 right-0 bg-gray-500 text-white text-center py-1 px-4 rounded-t-2xl transform -skew-x-12">
                                        <span className="inline-block transform skew-x-12 font-novaBold uppercase">{slide.title}</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-left leading-4">{slide.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div id="slider-button-left" className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md cursor-pointer z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div id="slider-button-right" className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md cursor-pointer z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default ThreeSlides