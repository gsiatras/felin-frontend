import React from 'react';
import styles from '../../../styles/merchant/homepages/home5.module.css'; 
import '../../../styles/globals.css'
import '../../../styles/globals.css';  ;  
import Faq from '../Faq';

const Home5 = () => {
    return (
        <div className={styles["felin-fifth-page"]}>
            <div className={styles["felin-fifth-page__content"]}>
                <div className={styles["felin-fifth-page__first_content"]}>
                    <h1 className={styles["felin-fifth-page__heading"]}>
                        Εγγραφείτε σήμερα - Ξεκινήστε εύκολα
                    </h1>
                    <p className={styles["felin-fifth-page__text1"]}>
                        Συνεργαστείτε με την FELiN για να προσωποποιήσετε και να αυξήσετε τις πωλήσεις σας
                        <br></br>
                        Κάντε εγγραφή τώρα και σε ένα μόνο λεπτό είστε έτοιμοι να δέχεστε παραγγελίες από τους πελάτες σας
                        <br></br>
                    </p>
                    <div className="felin-home-page__button-wrapper">
                        <a href="signup" className="felin-home-page__button">						
                            <span>Εγγραφή</span>
                        </a> 
                    </div> 
                </div>
                    <Faq/>
                <div className={styles["felin-fifth-page__faq"]}>
                </div>
                

            </div>
        </div>
    );
}

export default Home5;