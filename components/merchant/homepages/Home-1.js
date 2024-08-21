import React from 'react';
import styles from '../../../styles/merchant/homepages/home1.module.css'; 
import '../../../styles/globals.css';  

const Home1 = () => {
    return (
        <div className={styles["felin-first-page"]}>
            <div className={styles["felin-first-page__content"]}>
                <div className={styles["felin-text-button__wrapper"]}>
                    <h1 className={styles["felin-first-page__title"]}>FELiN Ads</h1>
                    <p className={styles["felin-first-page__text"]}>
                        Τo FELiN Ads είναι ένα νέο εργαλείο το οποίο αξιοποιεί δεδομένα από τις προτιμήσεις του κοινού και προσφέρει 
                        μεγαλύτερη προβολή για το brand, την επιχείρηση ή τα προϊόντα σας εντός και εκτός της εφαρμογής μας.
                        <br></br>
                    </p>
                    <div className={styles["felin-first-page__trusted_by"]}>
                        <h1>Trusted by</h1>
                        <div className={styles["felin-trusted-by__icons"]}>
                            <div className={styles["felin-trusted-by__icon"]}>
                                <img src="icons/facebook.svg" alt="Facebook" className={styles["white-icon"]}/>
                                <span className={styles["icon-name"]}>Facebook</span>
                            </div>
                            <div className={styles["felin-trusted-by__icon"]}>
                                <img src="icons/instagram.svg" alt="Instagram" className={styles["white-icon"]}/>
                                <span className={styles["icon-name"]}>Instagram</span>
                            </div>
                            <div className={styles["felin-trusted-by__icon"]}>
                                <img src="icons/google-icon.svg" alt="Google" className={styles["white-icon"]}/>
                                <span className={styles["icon-name"]}>Google</span>
                            </div>
                            <div className={styles["felin-trusted-by__icon"]}>
                                <img src="icons/openai.svg" alt="OpenAI" className={styles["white-icon"]}/>
                                <span className={styles["icon-name"]}>OpenAI</span>
                            </div>
                        </div>
                    </div>			  
                    <div className={styles["felin-home-page__button-wrapper"]}>
                        <a href="signup" className={styles["felin-home-page__button"]}>						
                            <span>Ξεκινήστε</span>
                        </a> 
                    </div> 
                    <p className={styles["felin-first-page__text-2"]}>
                        ✔ Δωρεάν Εγγραφή
                        <br></br>
                        ✔ Δωρεάν Push Notification
                        <br></br>
                    </p>
                </div>
                <div className={styles["felin-first-page__image"]}>
                    <img src="img/felin-adds.jpg" className={styles["felin-first-page__image-img"]}/>
                </div>
            </div>
        </div>

    );
}

export default Home1;