import React from "react";
import { Swiper, SwiperSlide, Swiperslide } from "swiper/react";

const Banner = () => {
   return (
      <div className='relative w-full'>
         <Swiper
            direction='vertical'
            slidesPerView={1}
            loop={true}
            speed={1000}
            modules={[autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className='w-full xl:h-96 bg-dry lg:h-64 h-48'
         >
            {Movies.slice(0, 6).map((movie, index) => (
               <SwiperSlide
                  key={index}
                  className='relative rounded overflow-hidden'
               >
                  <img
                     src={`/images/movies/${movie.image}`}
                     alt={movie.title}
                     className='w-full h-full object-cover'
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Banner;
