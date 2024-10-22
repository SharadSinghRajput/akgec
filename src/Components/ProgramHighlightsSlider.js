'use client';

import React, { useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const cardDetails = [
    {
      id: 1,
      title: "Honored at the Tech Startups Conclave & Awards 2022",
      subheading: "Ishu Bansal",
      img: "/image/home/IshuBansal.jpg",
    },
    {
      id: 2,
      title:
        "The AKGEC Robotics club is a student chapter formed on 8'MAY '2013",
      subheading: "Robotics Club",
      img: "/image/home/RoboticsHome.jpg",
    },
    {
      id: 3,
      title: "Explore ICI Membership Benefits and Advanced Concrete Technology",
      subheading: " A Grand Inaugural Ceremony",
      img: "/image/home/ICI4.jpg",
    },
    {
      id: 4,
      title: "Developing Top Engineers and Technicians for a Thriving Industry",
      subheading: "ISTE",
      img: "/image/home/iste.jpg",
    },
    {
      id: 4,
      title: "SAE International: A Century of Engineering Excellence",
      subheading: "SAE International",
      img: "/image/home/Aacar2.jpg",
    },
  ];

const ProgramHighlightsSlider = () => {
    const sliderRef = useRef(null);
    const [autoSlideInterval, setAutoSlideInterval] = useState(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const autoScroll = () => {
        if (sliderRef.current) {
            const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
            if (sliderRef.current.scrollLeft >= maxScrollLeft) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scroll('right');
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(autoScroll, 3000);
        setAutoSlideInterval(interval);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleManualScroll = (direction) => {
        scroll(direction);
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            const newInterval = setInterval(autoScroll, 3000);
            setAutoSlideInterval(newInterval);
        }
    };

    return (
        <section className="relative">
            <div className="relative">
                <ul
                    ref={sliderRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {cardDetails.map((highlight) => (
                        <li key={highlight.id} className="flex-shrink-0 snap-start mr-5 last:mr-0">
                            <div className="relative flex aspect-[12/16] w-72 shrink-0 flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[4/5] sm:w-[18rem]">
                                <img
                                    alt={highlight.subheading}
                                    src={highlight.img}
                                    className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                                />
                                <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-5%" />
                                <figure className="relative p-10">
                                    <blockquote>
                                        <p className="relative text-sm uppercase text-white">{highlight.subheading}</p>
                                    </blockquote>
                                    <figcaption className="mt-3 border-t border-white/20 pt-2">
                                        <p className="text-base font-normal">
                                            <span className="bg-gradient-to-r line-clamp-2 from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                                                {highlight.title}
                                            </span>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    className="absolute -left-10 top-1/2 -translate-y-1/2 bg-black/80 p-1 rounded-full"
                    onClick={() => handleManualScroll('left')}
                >
                    <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                    className="absolute -right-10 top-1/2 -translate-y-1/2 bg-black/80 p-1 rounded-full"
                    onClick={() => handleManualScroll('right')}
                >
                    <ChevronRight className="h-6 w-6 text-white" />
                </button>
            </div>
        </section>
    )
}

export default ProgramHighlightsSlider