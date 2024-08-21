import React from 'react';
import styles from '../../../styles/merchant/homepages/home6.module.css'; 
import '../../../styles/globals.css';  

const Home6 = () => {
    return (
        <div className={styles["felin-sixth-page"]}>
            <div className={styles["felin-sixth-page__content"]}>
                <div className={styles["felin-sixth-page__first_content"]}>
                    <h1 className={styles["felin-sixth-page__heading"]}>
                        Το FELiN App διατηρεί τις παραγγελίες σας σε τάξη
                    </h1>
                    <p className={styles["felin-sixth-page__text1"]}>
                        Μπορείτε να παρακολουθείτε τις παραγγελίες σας στο FELiN App από το tablet ή το κινητό σας. 
                        Το μόνο που χρειάζεται να κάνετε εσείς και το προσωπικό σας 
                        είναι να ετοιμάσετε τη παραγγελία και να τη παραδώσετε στους πελάτες σας.            
                    </p>
                </div>
                <div className={styles["felin-sixth-page__second_content"]}>
                    <div className={styles["felin-sixth-page__media-container"]}>
                        <div className={styles["felin-sixth-page__second_content__video__wrapper"]}>
                            <div className={styles["felin-sixth-page__second_content__video"]}>
                                <video src="videos/merchant-tablet-stores.mp4"
                                crossorigin="anonymous"
                                playsinline 
                                preload="metadata"
                                autoplay
                                muted
                                ></video>
                            </div>
                        </div>
                        <div>
                            <div className={styles["felin-sixth-page__second_content__tablet__wrapper"]}>
                                <img src="img/wolt-tablet.webp" alt="Image 2" className={styles["felin-sixth-page__box-tablet-image"]}/>
                            </div> 
                        </div>  
                    </div>
                </div>  
            </div>      
        </div>
    );
}

export default Home6;