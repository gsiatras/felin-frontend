"use client";

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js'; // Import hls.js
import styles from '../../styles/b2c/bigContainer.module.css';

const BigContainer = ({ title, subtitle, background, videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc); // Load the HLS source
      hls.attachMedia(videoRef.current); // Attach the media
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play(); // Start playing when the manifest is parsed
      });

      return () => {
        hls.destroy(); // Clean up on component unmount
      };
    }
  }, [videoSrc]);

  return (
    <div className={styles.bigContainer} style={{ backgroundImage: `url(${background})` }}>
      {videoSrc && (
        <video
          className={styles.video}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={background} // Use background as the poster image
        >
          <source src={videoSrc} type="application/x-mpegURL" /> {/* HLS MIME type */}
          Your browser does not support the video tag.
        </video>
      )}
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{title}</h2>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default BigContainer;



