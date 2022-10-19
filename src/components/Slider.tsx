import React, { useState } from "react";
import "swiper/css/bundle";
import "../assets/scss/Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

export const Slider = (currentSlides) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const slides = currentSlides.currentSlides.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="slide">
        <span>{item[0]}</span>
        <p>{item[1]}</p>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={3}
        navigation={{
          prevEl,
          nextEl,
          disabledClass: "disabled_swiper_button",
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
