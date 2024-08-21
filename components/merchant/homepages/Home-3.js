import React from 'react';
import styles from '../../../styles/merchant/homepages/home3.module.css'; 
import '../../../styles/globals.css';  

const Home3 = () => {
    return ( 
        <div className={styles["felin-third-page"]}>
            <div className={styles["felin-third-page__content"]}>
                <h1 className={styles["felin-third-page__heading"]}>
                    Γιατί να συνεργαστείτε μαζί μας;
                </h1>
                <div className={styles["felin-third-page__box-container"]}>
                    <div className={`${styles["felin-third-page__box"]} ${styles["box-green"]}`}>
                        <div className={styles["felin-third-page__box-image-container"]}>
                            <img src="img/felin_adapt.png" alt="Image 1" className={styles["felin-third-page__box-image"]}/>
                        </div>
                        <h2 className={styles["felin-third-page__box-subtitle"]}>Αναπτυχθείτε με την FELiN</h2>
                        <p className={styles["felin-third-page__box-text"]}>Βοηθάμε τις Β2Β επιχειρήσεις να αναπτυχθούν μεθοδικά και 
                            να πραγματοποιήσουν το όραμά τους με έναν πιο οργανικό και ανθρώπινο τρόπο.Εργαζόμαστε με ζήλο για βοηθήσουμε τις επιχειρήσεις 
                            να αναπτυχθούν σωστά και μακροπρόθεσμα.Σχεδιάζουμε στρατηγικές που εστιάζουν στην ανάπτυξη του brand σου, την αύξηση της ορατότητας και τη βελτίωση των πωλήσεων. 
                            Ανάπτυξε και διαχειρίσου τις σχέσεις με νέους και υπάρχοντες πελάτες.</p>
                    </div>

                    <div className={`${styles["felin-third-page__box"]} ${styles["box-blue"]}`}>
                        <div className={styles["felin-third-page__box-image-container"]}>
                            <img src="img/felin-more-orders.png" alt="Image 2" className={styles["felin-third-page__box-image"]}/>
                        </div>
                        <h2 className={styles["felin-third-page__box-subtitle"]}>Αυξήστε τις παραγγελίες σας</h2>
                        <p className={styles["felin-third-page__box-text"]}>Με την FELiN, μπορείτε να αυξήσετε τις παραγγελίες σας προσεγγίζοντας  νέους πελάτες αλλα και τους ενεργούς πελάτες σας. 
                            Η εγγραφή στο felin είναι δωρεάν και η τιμολόγηση γίνεται βάσει (Cost Per Order) στην παραγγελεία . Επιπλέον, οι διαφημίσεις της FELiN σας βοηθούν να αυξήσετε την προβολή σας 
                            και να λάβετε ακόμη περισσότερες παραγγελίες εντός της εφαρμογής.Η υπηρεσία Felin  είναι ένα έξυπνο «μέσο» για να προσεγγίσετε νέους πελάτες και να αναπτύξετε την επιχείρησή σας.</p>
                    </div>
                    <div className={`${styles["felin-third-page__box"]} ${styles["box-purple"]}`}>
                        <div className={styles["felin-third-page__box-image-container"]}>
                            <img src="img/felin-more-clients.png" alt="Image 3" className={styles["felin-third-page__box-image"]}/>
                        </div>
                        <h2 className={styles["felin-third-page__box-subtitle"]}>Προσεγγίστε περισσότερους πελάτες</h2>
                        <p className={styles["felin-third-page__box-text"]}>Απογειώστε άμεσα τις πωλήσεις σας με την την πιο ολοκληρωμένη πλατφόρμα ηλεκτρονικού εμπορίου. 
                            Bελτιστοποιήστε τις διαδικασίες διαχείρισης πελατειακών σχέσεων και πωλήσεων, εξασφαλίζοντας κάθε φορά επιτυχημένη αλληλεπίδραση με τον πελάτη.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home3;