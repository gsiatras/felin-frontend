"use client";

import React, { useState } from 'react';
import styles from '../../styles/merchant/faq.module.css'; 
import '../../styles/globals.css';  

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles["felin-faq"]}>
            <h1 className={styles["felin-faq__heading"]}>
                Συχνές ερωτήσεις
            </h1>
            <div className={styles["felin-faq__container"]}>
                {faqItems.map((item, index) => (
                    <div key={index} className={styles["felin-faq__item"]}>
                        <div 
                            className={styles["felin-faq__question"]}
                            onClick={() => toggleAnswer(index)}
                        >
                            <p>{item.question}</p>
                            <svg
                                className={styles["felin-faq__arrow"]}
                                width="18px"
                                height="18px"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{
                                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}
                            >
                                <path
                                    d="M6 9l6 6 6-6"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        {openIndex === index && (
                            <div className={styles["felin-faq__answer"]}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const faqItems = [
    {
        question: 'Ποιες είναι οι χρεώσεις και οι προμήθειες που θα χρεώσει η FELiN την επιχείρησή μου;',
        answer: 'Η FELiN σας χρεώνει προμήθεια από τις παραγγελίες που πραγματοποιήθηκαν μέσω της πλατφόρμας. Δεν υπάρχουν χρεώσεις για τη συμμετοχή σας και μπορείτε να διακόψετε τη συνεργασία όποτε θελήσετε.'
    },
    {
        question: 'Πότε πληρώνομαι αφού οι πελάτες κάνουν παραγγελία στην FELiN;',
        answer: 'Η FELiN προσφέρει ευέλικτες πληρωμές, ανάλογα με τις προτιμήσεις σας. Μπορείτε να επιλέξετε να πληρώνεστε κάθε δύο εβδομάδες, μία φορά το μήνα ή ακόμα και μία φορά κάθε έξι ημέρες.'
    },
    {
        question: 'Πώς μπορώ να ξέρω αν η FELiN είναι κατάλληλη για την επιχείρησή μου;',
        answer: 'Μεγάλοι ή μικροί, έμποροι διαφόρων μεγεθών μπορούν να χρησιμοποιήσουν τη FELiN για να αυξήσουν τις πωλήσεις τους. Εάν η FELiN λειτουργεί στην πόλη σας, εγγραφείτε τώρα για να ξεκινήσετε.'
    }
];

export default Faq;
