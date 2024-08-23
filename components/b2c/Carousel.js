"use client";

import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../../styles/b2c/carousel.module.css';
import SwipperButtons from './SwipperButtons';

const Carousel = ({ items, title }) => {
  return (
    <div className={styles["felin-swiper-container"]}>
      <Swiper
        className={styles["swiper-wrapper"]}
        modules={[Navigation]}
        spaceBetween={20} 
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        slidesPerView={6}
        breakpoints={{
          1024: {
            slidesPerView: 6,
            spaceBetween: 15, 
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 12, 
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10, 
          },
          0: {
            slidesPerView: 3,
            spaceBetween: 5, 
          }
        }}
      >
        <div className={styles["felin-swipper-heading"]}>
          <h1>
            {title}
          </h1>
          <SwipperButtons/>
      </div>
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles['swiper-slide']}>
          {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

