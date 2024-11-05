"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {  Autoplay } from "swiper/modules";


const PlacementSlider = ({placement, delay}) => {
  return (
    <div>
        <Swiper
                slidesPerView={1}
                autoplay={{ delay: delay, disableOnInteraction: false }}
                loop={true}
                modules={[ Autoplay]}
                className="mySwiper"
              >
                {placement?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <article className="max-xl:w-max mx-auto cursor-grab">
                      <img
                      className=""
                        src={item}
                        alt="placement"
                      />
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
    </div>
  )
}

export default PlacementSlider