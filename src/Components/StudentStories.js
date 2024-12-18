'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    "name": "Arjun Singh",
    "company": "GOOGLE",
    "image": "/image/placement/test-1.jpg",
    "quote": "I Aarav Kapoor secured placements in three amazing companies: Google, Amazon, and Microsoft.",
    "desc": "The environment at AKG University was exceptional, providing me with the resources and support needed to succeed. The detailed and engaging curriculum played a crucial role in helping me land a job at Google. My time at AKG University has been a pivotal step in my career."
  },
  {
    "name": "Atul Sadiwal",
    "company": "JP MORGAN",
    "image": "/image/placement/test-2.jpg",
    "quote": "I am deeply grateful to the AKG University faculty for their support.",
    "desc": "The environment at AKG University was exceptional, providing the perfect space for me to study and learn. This played a key role in my success and helped me secure a position at JP Morgan. The detailed and engaging curriculum has been instrumental in my career development."
  },
  {
    "name": "Aarohi Jain",
    "company": "ACCENTURE",
    "image": "/image/placement/test-3.jpg",
    "quote": "Choosing to study at AKG University was one of the best decisions of my life.",
    "desc": "The supportive environment at AKG University was crucial to my success in landing a job at Accenture. The comprehensive and engaging coursework made my learning experience truly valuable and has been a significant stepping stone in my career."
  },
  {
    "name": "Ashutosh Sharma",
    "company": "WIPRO",
    "image": "/image/placement/test-4.jpg",
    "quote": "Studying at AKG University was a pivotal choice for my career.",
    "desc": "The learning environment at AKG University was outstanding and directly contributed to my success in securing a role at Wipro. The detailed course content kept me engaged and has greatly influenced my professional journey."
  },
  {
    "name": "Pankaj Jat",
    "company": "TCS",
    "image": "/image/placement/test-5.jpg",
    "quote": "Enrolling at AKG University was one of the most rewarding decisions I made.",
    "desc": "The incredible support from faculty and the dynamic environment at AKG University were vital in helping me land my job at TCS. The curriculum was thorough and captivating, laying a strong foundation for my career."
  },
  {
    "name": "Sneha Verma",
    "company": "INFOSYS",
    "image": "/image/placement/test-3.jpg",
    "quote": "I consider my time at AKG University as one of the best investments in my future.",
    "desc": "The nurturing atmosphere at AKG University allowed me to thrive academically and secure a position at Infosys. The engaging course structure and faculty support have been crucial elements in shaping my career."
  },
  {
    "name": "Shyam Joshi",
    "company": "GOOGLE",
    "image": "/image/placement/test-1.jpg",
    "quote": "I Aarav Kapoor secured placements in three amazing companies: Google, Amazon, and Microsoft.",
    "desc": "The environment at AKG University was exceptional, providing me with the resources and support needed to succeed. The detailed and engaging curriculum played a crucial role in helping me land a job at Google. My time at AKG University has been a pivotal step in my career."
  },
  {
    "name": "Ankit Prajapat",
    "company": "JP MORGAN",
    "image": "/image/placement/test-2.jpg",
    "quote": "I am deeply grateful to the AKG University faculty for their support.",
    "desc": "The environment at AKG University was exceptional, providing the perfect space for me to study and learn. This played a key role in my success and helped me secure a position at JP Morgan. The detailed and engaging curriculum has been instrumental in my career development."
  },
]

const StudentStories = () => {
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative px-4 py-8 md:px-6 lg:px-8">
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[360px] mr-4 md:mr-6 last:mr-0 py-4"
            >
              <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                <div className="flex gap-4 border-b border-gray-100 pb-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 line-clamp-5">{testimonial.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-20 -top-5 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-1 rounded-full hidden md:block"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="absolute right-8 -top-5 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-1 rounded-full hidden md:block"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default StudentStories;
