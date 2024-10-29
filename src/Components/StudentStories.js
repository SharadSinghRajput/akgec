'use client';

import React, {useState, useEffect, useRef} from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
      "name": "AARAV KAPOOR",
      "company": "GOOGLE",
      "image": "/image/placement/test-1.jpg",
      "quote": "I Aarav Kapoor secured placements in three amazing companies: Google, Amazon, and Microsoft.",
      "desc": "The environment at AKG College was exceptional, providing me with the resources and support needed to succeed. The detailed and engaging curriculum played a crucial role in helping me land a job at Google. My time at AKG College has been a pivotal step in my career."
    },
    {
      "name": "PRIYA SHARMA",
      "company": "JP MORGAN",
      "image": "/image/placement/test-2.jpg",
      "quote": "I am deeply grateful to the AKG College faculty for their support.",
      "desc": "The environment at AKG College was exceptional, providing the perfect space for me to study and learn. This played a key role in my success and helped me secure a position at JP Morgan. The detailed and engaging curriculum has been instrumental in my career development."
    },
    {
      "name": "RAVI MEHRA",
      "company": "ACCENTURE",
      "image": "/image/placement/test-3.jpg",
      "quote": "Choosing to study at AKG College was one of the best decisions of my life.",
      "desc": "The supportive environment at AKG College was crucial to my success in landing a job at Accenture. The comprehensive and engaging coursework made my learning experience truly valuable and has been a significant stepping stone in my career."
    },
    {
      "name": "NEHA AGGARWAL",
      "company": "WIPRO",
      "image": "/image/placement/test-4.jpg",
      "quote": "Studying at AKG College was a pivotal choice for my career.",
      "desc": "The learning environment at AKG College was outstanding and directly contributed to my success in securing a role at Wipro. The detailed course content kept me engaged and has greatly influenced my professional journey."
    },
    {
      "name": "KARAN SINGH",
      "company": "TCS",
      "image": "/image/placement/test-5.jpg",
      "quote": "Enrolling at AKG College was one of the most rewarding decisions I made.",
      "desc": "The incredible support from faculty and the dynamic environment at AKG College were vital in helping me land my job at TCS. The curriculum was thorough and captivating, laying a strong foundation for my career."
    },
    {
      "name": "SNEHA VERMA",
      "company": "INFOSYS",
      "image": "/image/placement/test-2.jpg",
      "quote": "I consider my time at AKG College as one of the best investments in my future.",
      "desc": "The nurturing atmosphere at AKG College allowed me to thrive academically and secure a position at Infosys. The engaging course structure and faculty support have been crucial elements in shaping my career."
    }
  ]

const StudentStories = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef(null);


  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 4000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

    const slideVariants = {
        hiddenRight: {
          x: "100%",
          opacity: 0,
        },
        hiddenLeft: {
          x: "-100%",
          opacity: 0,
        },
        visible: {
          x: "0%",
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
        exit: {
          x: direction > 0 ? "-100%" : "100%",
          opacity: 0,
          scale: 0.8,
          transition: {
            duration: 0.5,
          },
        },
      };
    
      const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
          prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
        );
      };
    
      const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
          prevIndex - 3 < 0 ? testimonials.length - 3 : prevIndex - 3
        );
      };
      
  return (
    <div className="relative grid grid-cols-1 overflow-hidden pt-20 h-[570px]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="flex gap-4 col-span-1 transition-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide one card at a time
        >
          {testimonials
            .slice(currentIndex, currentIndex + 1)
            .map((testimonial, index) => (
              <div
                key={index}
                className="p-10 text-center max-w-3xl mx-auto flex flex-col justify-top items-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 object-cover rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold mb-2.5">
                  {testimonial.name}
                </h3>
                <h5 className="text-gray-600 text-base">
                  {testimonial.company}
                </h5>
                <span className="mb-4 text-lg font-novaBold text-gray-800">
                  "{testimonial.quote}"
                </span>
                <p className="text-sm font-novaReg mb-4 text-gray-800">
                  {testimonial.desc}
                </p>
              </div>
            ))}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default StudentStories;
