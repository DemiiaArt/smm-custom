import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './Swiper.scss';

import Card from "./Card.jsx";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const SwiperCards = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card tarif="silver" />
        </SwiperSlide>
        <SwiperSlide>
          <Card tarif="gold" />
        </SwiperSlide>
        <SwiperSlide>
          <Card tarif="platinum" />
        </SwiperSlide>
        <SwiperSlide>
          <Card tarif="diamond" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          {/* <span ref={progressContent}></span> */}
        </div>
      </Swiper>
    </>
  );
};
export default SwiperCards;
