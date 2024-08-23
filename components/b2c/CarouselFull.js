"use client";

import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  // Import the autoplay styles
import styles from '../../styles/b2c/carouselFull.module.css';
import SwipperButtonsFull from './SwiperButtonsFull';

const CarouselFull = ({ items, title }) => {
  return (
    <div className={styles["felin-swiper-container"]}>
      <Swiper
        className={styles["swiper-wrapper"]}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,  
          disableOnInteraction: false, 
        }}
        loop={true}  
        spaceBetween={20}  
        slidesPerView={2}  
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          }
        }}
        onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
        onSlideChange={() => console.log('Slide changed')}
      >
        <div className={styles["felin-swipper-heading"]}>
          <h1>{title}</h1>
          <SwipperButtonsFull/>
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

export default CarouselFull;

