"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

const FootPrints = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const slides1 = [
        { img: "/image/footprints/image11.jpg", title: "Slide 1" },
        { img: "/image/footprints/image22.jpg", title: "Slide 2" },
    ];

    const slides2 = [
        { img: "/image/footprints/image33.jpg", title: "Slide 3" },
        { img: "/image/footprints/image44.jpg", title: "Slide 4" },
    ];

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <section className="max-w-[1400px] mx-auto px-4">
            <div className="text-center pb-6 max-md:pb-5 max-sm:pb-4">
                <h3 className="text-4xl font-bold text-blue-900 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">Footprints</h3>
            </div>
            <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] py-10 rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 px-8 max-md:px-8 max-sm:px-4 max-md:mb-6 max-sm:mb-4">
                        <p className="text-black font-novaBold text-2xl max-md:text-xl max-sm:text-lg text-left mb-4">“A creative adult is a child who refused to die.”</p>
                        <div className="w-full space-y-4 text-gray-700 text-justify">
                            <p className="text-lg max-md:text-base max-sm:text-sm font-novaReg">
                                Staying true to the motto of creative explorations, Team Footprints is the creative society of the college. The society encapsulates four major domains: Arts, Literature, Photography, and Designing. Being
                                present at the helm of every cultural event in the college, Team Footprints is unarguably the backbone of the creative and cultural aspect of AKGEC.
                            </p>

                            <div className="font-novaBold">
                                Links:
                                <a href="https://www.facebook.com/fpupdates" target="_blank" rel="noopener noreferrer" className="text-blue-600 px-2 py-1 rounded-md transition-colors duration-300">
                                    www.facebook.com/fpupdates
                                </a>
                                ,{" "}
                                <a href="https://www.facebook.com/sakshamsamachar" target="_blank" rel="noopener noreferrer" className="text-blue-600 px-2 py-1 rounded-md transition-colors duration-300">
                                    www.facebook.com/sakshamsamachar
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-6 md:px-12">
                        <Swiper
                            effect={"cube"}
                            grabCursor={true}
                            loop={true}
                            cubeEffect={{
                                shadow: false,
                                slideShadows: false,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCube, Autoplay]}
                            className="mySwiper w-full h-[300px] md:h-[500px]"
                        >
                            {slides1.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                                        <img src={slide.img} alt={slide.title} className="w-full h-full object-contain" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row mt-12 gap-8 px-6 md:px-12 mb-4">
                    <div className="md:w-2/5 w-full">
                        <Swiper
                            effect={"cube"}
                            grabCursor={true}
                            loop={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCube, Autoplay]}
                            className="mySwiper w-full lg:w-96"
                        >
                            {slides2.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                                        <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="md:w-3/5 w-full space-y-4">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Activities/Event</h3>
                        {[
                            {
                                title: "Poster Making",
                                description:
                                    "Visual arts has always been one of the most powerful forms of expression. When words fail to describe, art fills in the void. Team Footprints has been the platform to raise social issues by conducting Anti Ragging and BDC Poster Making Competitions to promote social issues, culminating art at its highest form.",
                            },
                            {
                                title: "Mushaira",
                                description:
                                    '“कुछ अनगिनत क़िस्से है मेरी कलम में क़ैद,\nकुछ मंच है जो आज भी बंजारे रहे”\n\n“Mushaira" has been one of the biggest platforms in the college that bring out the poetic best of the literatis. The institution has witnessed some of the unforgettable poets who have set the bars to a whole new level by their powerful performances in Mushaira, and the event is always a feast to the ears of the listeners.',
                            },
                            {
                                title: "Cultural Day",
                                description: "A day where creativity feasts over the clouds of the institution, Team Footprints paints the creativity all arounds with events such as T-shirt painting, Face Painting, and Open Mic.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="border-b pb-4">
                                <button onClick={() => toggleDropdown(index)} className="w-full text-left text-xl font-bold text-gray-800 flex justify-between items-center">
                                    {item.title}
                                    <span>{activeDropdown === index ? "-" : "+"}</span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeDropdown === index ? "max-h-[1000px]" : "max-h-0"}`}>
                                    <p className="mt-2 text-gray-700 whitespace-pre-line">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FootPrints;
