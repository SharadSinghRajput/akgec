'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';

const Natureclub = () => {
    const slides = [
        { img: '/image/nature-club/1.jpg', title: 'Event 1' },
        { img: '/image/nature-club/2.jpg', title: 'Event 2' },
        { img: '/image/nature-club/3.jpg', title: 'Event 3' },
        { img: '/image/nature-club/4.jpg', title: 'Event 4' },
        // { img: '/images/5.jpg', title: 'Event 5' },
        // { img: '/images/6.jpg', title: 'Event 6' },
    ];

    return (
        <section className="max-w-[1400px] mx-auto px-4">
            <div className='py-3'>
                <div className="text-center py-6 max-lg:py-5 max-md:py-4 max-sm:py-3">
                    <h3 className="text-4xl font-bold text-blue-900 max-md:text-3xl max-sm:text-2xl">Nature Club</h3>
                </div>

                <div className="flex flex-col md:flex-row md:gap-8 items-center max-md:gap-6 max-sm:gap-4">
                    <div className="text-base lg:w-1/2 w-full space-y-4 text-gray-700 text-justify max-sm:text-sm max-sm:space-y-2">
                        <p>
                            In view of the increasing problems of global warming, deforestation, ozone layer depletion,
                            pollution, and many more due to modern development, it is believed globally that the awareness
                            about the present status of the environment to sensitize people about the inherent relationships
                            with Nature has become very important.
                        </p>
                        <p>
                            With the above objective, Value Education Cell, AKGEC has established ‘Nature Club’ which is
                            committed not only to spreading awareness about the problems but also to motivate students to
                            find solutions to the problems in the light of inherent relationships. The effort will improve
                            the competence of students to contribute towards the sustainability of nature and avoid environmental
                            degradation in their individual capacity as well as in groups.
                        </p>
                        <p>
                            The club organized the event VASUDHA-2K19 during 15-19 April, 2019. During the event, various
                            competitions like Poster Making and Creative Ideas on enrichment, protection, and right utilization
                            of nature and Best Out of Waste were organized. The club celebrated International Earth Day on
                            22 April, 2019.
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full md:order-none order-last">
                        <Swiper
                            effect={'cube'}
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
                            className="mySwiper w-10/12"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                                        <img
                                            src={slide.img}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Natureclub;
