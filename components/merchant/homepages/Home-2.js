"use client";

import React, { useRef, useState } from 'react';
import styles from '../../../styles/merchant/homepages/home2.module.css'; 
import '../../../styles/globals.css';  

const Home2 = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleVideoPlayback = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={styles["felin-second-page"]}>
            <div className={styles["felin-second-page__content"]}>
                <div className={styles["felin-second-page__main_content"]}>
                    <h1 className={styles["felin-second-page__heading"]}>
                        <span className={styles["bolder"]}>Νο1</span>
                        <br></br>
                        πλατφόρμα Β2Β 
                        <br></br>H
                        στην Ελλάδα
                    </h1>
                    <p className={styles["felin-second-page__text1"]}>
                        Συνεργαστείτε με την FELiN για να προσωποποιήσετε και να αυξήσετε τις πωλήσεις σας
                    </p>
                    <p className={`${styles["felin-second-page__text1"]} ${styles["smaller"]}`}>
                        Κάντε εγγραφή τώρα και σε ένα μόνο λεπτό είστε έτοιμοι να δέχεστε παραγγελίες από τους πελάτες σας
                    </p>
                    <div className="felin-home-page__button-wrapper">
                        <a href="signup" className="felin-home-page__button">						
                            <span>Εγγραφή</span>
                        </a> 
                    </div> 
                </div>
                <div className={styles["felin-second-page__video"]}>
                    <button 
                        id="videoControlButton" 
                        className={styles["video-control-button"]}
                        onClick={toggleVideoPlayback}
                    >
                        {isPlaying ? (
                            <svg id="playPauseIcon" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles["feather feather-pause"]} viewBox="0 0 24 24">
                                <path d="M6 19h4V5H6zm8-14h4v14h-4z"></path>
                            </svg>
                        ) : (
                            <svg id="playPauseIcon" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles["feather feather-play"]} viewBox="0 0 24 24">
                                <path d="M5 3l14 9-14 9V3z"></path>
                            </svg>
                        )}
                    </button>
                    <video 
                        id="video" 
                        ref={videoRef} 
                        src="videos/merchant_generic.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        width="100%" 
                        height="auto"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Home2;
