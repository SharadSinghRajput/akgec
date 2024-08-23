import dynamic from 'next/dynamic';
import 'swiper/swiper-bundle.css'; // Import Swiper's full bundle CSS

// Import Swiper and SwiperSlide components dynamically with SSR disabled
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper';

export default function Achievements() {
  const achievements = [
    {
      title: "Education Excellence Award",
      description: "Greetings from ASSOCHAM! We congratulate Ajay Kumar Garg Engineering College for winning the ASSOCHAM Award, recognizing its excellence and immense contribution to education.",
      imgSrc: "/image/slider-home/akg-slider-img-1.jpg",
      logoSrc: "/image/slider-home/akg-slider-img-1.jpg",
    },
    {
      title: "Education Excellence Award",
      description: "Greetings from ASSOCHAM! We congratulate Ajay Kumar Garg Engineering College for winning the ASSOCHAM Award, recognizing its excellence and immense contribution to education.",
      imgSrc: "/image/slider-home/akg-slider-img-1.jpg",
      logoSrc: "/image/slider-home/akg-slider-img-1.jpg",
    },
    {
      title: "Education Excellence Award",
      description: "Greetings from ASSOCHAM! We congratulate Ajay Kumar Garg Engineering College for winning the ASSOCHAM Award, recognizing its excellence and immense contribution to education.",
      imgSrc: "/image/slider-home/akg-slider-img-1.jpg",
      logoSrc: "/image/slider-home/akg-slider-img-1.jpg",
    },
    {
      title: "Education Excellence Award",
      description: "Greetings from ASSOCHAM! We congratulate Ajay Kumar Garg Engineering College for winning the ASSOCHAM Award, recognizing its excellence and immense contribution to education.",
      imgSrc: "/image/slider-home/akg-slider-img-1.jpg",
      logoSrc: "/image/slider-home/akg-slider-img-1.jpg",
    },
    // Add more achievements as needed
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Excellence and Achievement!
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Explore a journey filled with groundbreaking accomplishments and extraordinary moments that have shaped our legacy. Discover the stories behind each milestone and be inspired by the path of innovation and success.
          </p>
        </div>

        {/* Render Swiper */}
        {typeof window !== 'undefined' && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {achievements.map((achievement, index) => (
              <SwiperSlide key={index}>
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="h-56 w-1/2 object-cover"
                    src={achievement.imgSrc}
                    alt={achievement.title}
                  />
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <img className="h-12" src={achievement.logoSrc} alt={achievement.title} />
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-semibold">
                        {achievement.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-normal">
                        {achievement.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 flex items-center"
                      >
                        <span className="mr-2">Learn more</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path d="M10 4a1 1 0 10-2 0v1H4v12h4v1a1 1 0 102 0v-1h10V5H10V4zM5 6v10h14V6H5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
