import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from '../../styles/b2c/carouselFull.module.css';

const SwipperButtonsFull = () => {
  const swiper = useSwiper();

  return (
    <div className={styles["swiper-nav-btns"]}>
      <button onClick={() => swiper.slidePrev()} className={styles.button}>
        <span className={styles.arrowLeft}>&#8592;</span>
      </button>
      <button onClick={() => swiper.slideNext()} className={styles.button}>
        <span className={styles.arrowRight}>&#8594;</span>
      </button>
    </div>
  );
};
export default SwipperButtonsFull;