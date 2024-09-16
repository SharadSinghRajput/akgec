'use client'; // Add this line to mark the component as a Client Component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
 // Import Swiper styles
import { Scrollbar, A11y, Autoplay } from 'swiper'; // Import necessary Swiper modules

export default function Home() {
  return (
    <>
      <div className="max-w-[1350px] w-full mx-auto p-6 bg-background text-foreground mb-6">
        <Swiper
          spaceBetween={50}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          modules={[Scrollbar, A11y, Autoplay]} 
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
           
           
            1280: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="w-full h-96 bg-cover bg-center p-6"
              style={{ backgroundImage: 'url(/image/left-box-bg.webp)' }} 
            >
              <div className="w-4/5 p-6">
                <h2 className="text-4xl font-bold mb-2 text-white">
                  Chandigarh University has Welcomed Students from more than 50 Countries
                </h2>
                <p className="text-white mb-4">
                  With more than 100+ Bachelors, Masters, and Doctoral programs to choose from, CU is one of the highly preferred destinations for International Students.
                </p>
                <a href="#" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded">
                  EXPLORE MORE →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-96 bg-cover bg-center p-6" style={{ backgroundImage: 'url(/image/placements-bg.webp)' }}>
              <div className="absolute inset-0 bg-red-600 opacity-70"></div>
              
              <div className="relative w-4/5 p-6">
                <h2 className="text-4xl font-bold mb-2 text-white">A Guide to Discover. Learn. Empower.</h2>
                <p className="text-zinc-200 mb-4">Career Guide 2024</p>
                <a href="#" className="bg-white text-red-600 hover:bg-zinc-200 py-2 px-4 rounded">
                  VIEW MORE →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="w-full h-96 bg-cover bg-center p-6"
              style={{ backgroundImage: 'url(/image/future-career-bg.webp)' }}
            >
              <div className="w-4/5 p-6">
                <h2 className="text-4xl font-bold mb-2 text-white">A Guide to Discover. Learn. Empower.</h2>
                <p className="text-zinc-200 mb-4">Career Guide 2024</p>
                <a href="#" className="bg-white text-red-500 hover:bg-zinc-200 py-2 px-4 rounded">
                  VIEW MORE →
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative w-full h-96 bg-cover bg-center p-6" style={{ backgroundImage: 'url(/image/right-box-bg.webp)' }}>
              {/* Red light overlay using Tailwind built-in color */}
              <div className="absolute inset-0 bg-red-600 opacity-70"></div>
              
              <div className="relative w-4/5 p-6">
                <h2 className="text-4xl font-bold mb-2 text-white">A Guide to Discover. Learn. Empower.</h2>
                <p className="text-zinc-200 mb-4">Career Guide 2024</p>
                <a href="#" className="bg-white text-red-600 hover:bg-zinc-200 py-2 px-4 rounded">
                  VIEW MORE →
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  );
}
