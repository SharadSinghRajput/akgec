import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';


const SliderOne = ({slidesData}) => {
    
  return (
    <div className="max-w-[1500px] w-full mx-auto p-6 max-sm:p-1 bg-background text-foreground mb-6">
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }} 
        modules={[Scrollbar, A11y, Autoplay]}
        breakpoints={{
          680: { slidesPerView: 1 },
          1100: { slidesPerView: 2 },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`relative w-full h-[500px] max-sm:h-72 bg-cover bg-center p-6 max-sm:p-2`} style={{ backgroundImage: `url(${slide.imageUrl})` }}>
              {slide.overlay && <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent-900/20"></div>}
              <div className="relative p-6 max-sm:p-0">
                <h2 className={`text-4xl max-sm:text-2xl max-w-xs font-novaReg mb-2 ${slide.text} `}>{slide.title}</h2>
                <p className={`${slide.text} max-w-md max-sm:text-xs mb-5`}>{slide.description}</p>
                <Link href={slide.linkUrl} className={`${slide.buttonClass} py-2 max-sm:text-sm font-novaSemi px-4 rounded`}>
                  {slide.linkText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderOne;
