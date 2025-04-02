import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ServiceData } from "../data/datos";

export default function SliderPrincipal() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {ServiceData.map((item) => (
          <SwiperSlide
            key={item.title}
            modules={[Navigation]}
            className="mySwiper"
          >
            <div
              className="flex flex-col gap-8  h-[400px]  border-2 border-red-800"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage}) ` }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
