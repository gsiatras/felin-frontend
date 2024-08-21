"use client";

import React, { useRef, useState } from 'react';
import styles from '../../../styles/merchant/homepages/home4.module.css'; 
import '../../../styles/globals.css';  

const Home4 = () => {
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
        <div className={styles["felin-fourth-page"]}>
            <div className={styles["felin-fourth-page__content"]}>
                <div className={styles["felin-fourth-page__box-container"]}>
                    <div className={styles["felin-fourth-page__box"]}>
                        <div className={styles["felin-fourth-page__box-image-container"]}>
                            <video 
                                id="video4" 
                                ref={videoRef} 
                                src="/videos/merchants.mp4" 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                width="100%" 
                                height="auto"
                                className={styles["felin-third-page__box-image"]}
                            >
                                Your browser does not support the video tag.
                            </video>
                            <button 
                                id="fourthPageVideoControlButton" 
                                className={styles["video-control-button"]}
                                onClick={toggleVideoPlayback}
                            >
                                {isPlaying ? (
                                    <svg 
                                        id="fourthPagePlayPauseIcon" 
                                        width="24" 
                                        height="24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className={styles["feather feather-pause"]} 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 19h4V5H6zm8-14h4v14h-4z"></path> 
                                    </svg>
                                ) : (
                                    <svg 
                                        id="fourthPagePlayPauseIcon" 
                                        width="24" 
                                        height="24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className={styles["feather feather-play"]} 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 3l14 9-14 9V3z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className={styles["felin-fourth-page__box-text-container"]}>
                            <h2 className={styles["felin-fourth-page__box-subtitle"]}>Πώς λειτουργεί η FELiN</h2>
                            <p className={styles["felin-fourth-page__box-text"]}>
                                Η FELIN δεν ειναι μια εφαρμογή μόνο Β2Β. Ειναι ένα Οικοσύστημα εφαρμογών που θα βελτιώσει κάθε τομέα της επιχείρησής σου.
                            </p>
                            <div className={styles["felin-home-page__button-wrapper"]}>
                                <a href="signup" className={styles["felin-home-page__button"]}>						
                                    <span>Αναπτύξτε την επιχείρησή σας</span>
                                </a> 
                            </div> 
                        </div>
                    </div>
                    <div className={styles["felin-fourth-page__box"]}>
                        <div className={styles["felin-fourth-page__box-text-container"]}>
                            <h2 className={styles["felin-fourth-page__box-subtitle"]}>Η ομάδα εξυπηρέτησης πελατών μας στηρίζει τη δική σας επιτυχία</h2>
                            <p className={styles["felin-fourth-page__box-text"]}>Η ομάδα εξυπηρέτησης πελατών είναι στη διάθεσή σας και των πελατών σας καθημερινά, όλο το 24ωρο, για να σας βοηθήσει σε λίγα λεπτά με ό,τι χρειάζεστε.</p>
                            <div className={styles["felin-home-page__button-wrapper"]}>
                                <a href="signup" className={styles["felin-home-page__button"]}>						
                                    <span>Ξεκινήστε</span>
                                </a> 
                            </div> 
                        </div>
                        <div className={styles["felin-fourth-page__box-image-container"]}>
                            <img src="img/felin-customer-support.jpg" alt="Image 1" className={styles["felin-third-page__box-image"]}/>
                        </div>
                    </div>
                    <div className={styles["felin-fourth-page__box"]}>
                        <div className={styles["felin-fourth-page__box-image-container"]}>
                            <img src="img/wolt-data.webp" alt="Image 1" className={styles["felin-third-page__box-image"]}/>
                        </div>
                        <div className={styles["felin-fourth-page__box-text-container"]}>
                            <h2 className={styles["felin-fourth-page__box-subtitle"]}>Επιχειρηματικά δεδομένα που βοηθούν στην ανάπτυξή σας</h2>
                            <p className={styles["felin-fourth-page__box-text"]}>H FELIN σας παρέχει προσαρμοσμένα εργαλεία για να αναπτύξετε την επιχείρησή σας. 
                                Αποκτήστε πρόσβαση σε χρήσιμες πληροφορίες, και ανακαλύψτε δεδομένα που μπορούν να σας βοηθήσουν να αναπτύξετε την επιχείρησή σας.</p>
                            <div className={styles["felin-home-page__button-wrapper"]}>
                                <a href="signup" className={styles["felin-home-page__button"]}>						
                                    <span>Εγγραφείτε τώρα</span>
                                </a> 
                            </div> 
                        </div>
                    </div>
                    <div className={styles["felin-fourth-page__box"]}>
                        <div className={styles["felin-fourth-page__box-text-container"]}>
                            <h2 className={styles["felin-fourth-page__box-subtitle"]}>Εσείς κάνετε αυτό που ξέρετε καλύτερα και εμείς αναλαμβάνουμε τα υπόλοιπα</h2>
                            <p className={styles["felin-fourth-page__box-text"]}>Η FELIN διαχειρίζεται την υποστήριξη πελατών. Μπορείτε να επικεντρωθείτε στη λειτουργία της επιχείρησής σας και εμείς θα αναλάβουμε τα υπόλοιπα.</p>
                            <div className={styles["felin-home-page__button-wrapper"]}>
                                <a href="signup" className={styles["felin-home-page__button"]}>						
                                    <span>Ξεκινήστε</span>
                                </a> 
                            </div> 
                        </div>
                        <div className={styles["felin-fourth-page__box-image-container"]}>
                            <img src="img/felin-3.png" alt="Image 1" className={styles["felin-third-page__box-image"]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home4;
