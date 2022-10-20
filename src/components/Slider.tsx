import React, { useState } from 'react';
import 'swiper/css/bundle';
import '../assets/scss/Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { SlidersType } from '../components/App';

export const Slider: React.FC<{ currentSlides: SlidersType }> = ({
   currentSlides,
}) => {
   const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
   const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

   const slides = currentSlides.slides.map((item, index) => (
      <SwiperSlide key={index}>
         <div className="slide">
            <span>{item[0]}</span>
            <p>{item[1]}</p>
         </div>
      </SwiperSlide>
   ));
   return (
      <div className="slider">
         <div className="slider-title">{currentSlides.title}</div>
         <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={window.innerWidth > 320 ? 3 : 2}
            navigation={{
               prevEl,
               nextEl,
               disabledClass: 'disabled_swiper_button',
            }}
         >
            {slides}
         </Swiper>
         <span
            className="slider-button prev-button"
            ref={(node) => setPrevEl(node)}
         ></span>
         <span
            className="slider-button next-button"
            ref={(node) => setNextEl(node)}
         ></span>
      </div>
   );
};
