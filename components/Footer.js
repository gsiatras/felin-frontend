"use client";

import styles from '../styles/footer.module.css'; 
import React, { useState } from 'react';

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    // Toggle the list open/close state based on section id
    const toggleList = (sectionId) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };

    return (
        <footer className={styles["felin-footer"]}>
            <div className={styles["felin-footer__content"]}>
                <div className={styles["felin-footer__main"]}>
                    <div className={styles["felin-footer__section--brand"]}>
                        <h1 className={styles["felin-footer___logo_title"]}>FELiN</h1>
                        <div className={styles["felin-footer__brand-logos"]}>
                            <a href="#" className={styles["felin-footer__logo-link"]}>
                                <img className={styles["felin-footer__logo-image"]} src="icons/Download_on_the_App_Store_Badge.svg" alt="Apple App Store"/>
                            </a>
                            <a href="#" className={styles["felin-footer__logo-link"]}>
                                <img className={styles["felin-footer__logo-image"]} src="icons/google-play-badge-logo-svgrepo-com.svg" alt="Google Play Store"/>
                            </a>
                        </div>
                    </div>
                    {['coop', 'comp', 'prod', 'links', 'social'].map(sectionId => (
                        <div 
                            key={sectionId} 
                            className={`${styles["felin-footer__section"]} ${openSection === sectionId ? styles["open"] : ''}`} 
                            id={sectionId}
                        >
                            <div onClick={() => toggleList(sectionId)} className={styles["felin-footer__title"]}>
                                <h3>{sectionId === 'coop' ? 'Συνεργασία με τη FELiN' :
                                    sectionId === 'comp' ? 'Εταιρία' :
                                    sectionId === 'prod' ? 'Προϊόντα' :
                                    sectionId === 'links' ? 'Χρήσιμα links' :
                                    'Ακολούθησε μας'}
                                </h3>
                                <svg className={styles["felin-footer__arrow"]} width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <ul className={`${styles["felin-footer__list"]} ${openSection === sectionId ? styles["open"] : ''}`}>
                                {sectionId === 'coop' && (
                                    <>
                                        <li className={styles["felin-footer__item"]}><a href="merchant" className={styles["felin-footer__link"]}>Για εμπόρους</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Για συνεργάτες</a></li>
                                    </>
                                )}
                                {sectionId === 'comp' && (
                                    <>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Σχετικά με εμάς</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Τι αντιπροσωπεύουμε</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Εργασία</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Υπευθυνότητα</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Ασφάλεια</a></li>
                                    </>
                                )}
                                {sectionId === 'links' && (
                                    <>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Υποστήριξη</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Media</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Επικοινωνία</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Προγραμματιστές</a></li>
                                    </>
                                )}
                                {sectionId === 'social' && (
                                    <>
                                        <li className={styles["felin-footer__item"]}><a href="url" className={styles["felin-footer__link"]}>Instagram</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Facebook</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>X</a></li>
                                        <li className={styles["felin-footer__item"]}><a href="#" className={styles["felin-footer__link"]}>Linkedin</a></li>
                                    </>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={styles["felin-footer__section--additional"]}>
                <div className={styles["felin-footer__additional-links"]}>
                    <div className={styles["felin-footer__additional-link-row"]}>
                        <span>
                            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            Ελλάδα
                        </span>
                        <span>
                            <svg width="16px" height="16px" viewBox="0 0 512 512" fill="#000000">
                                <title>earth-filled</title>
                                <g fill="#ffffff" transform="translate(42.666667, 42.666667)">
                                    <path d="M213.333333,3.55271368e-14 C331.15408,3.55271368e-14 426.666667,95.5125867 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C209.750636,42.6666667 206.193723,42.7770611 202.66581,42.994634 L202.666667,91.0419601 L106.666667,170.666667 L58.5047006,141.436482 C48.3410689,163.286656 42.6666667,187.647331 42.6666667,213.333333 C42.6666667,280.812182 81.8284453,339.144307 138.664049,366.841756 L138.666667,313.749333 L96.8405175,271.925462 L84.8227238,211.836494 L101.5154,178.451142 L162.069333,202.666667 L233.251151,202.666667 L245.697346,289.790033 L198.893251,383.397727 C203.653732,383.79656 208.469775,384 213.333333,384 C273.542462,384 326.46952,352.821748 356.85013,305.72962 L322.730667,192 L291.444982,192 L265.650607,127.514062 L294.529796,69.755682 L342.398824,101.663555 C311.105166,65.5267525 264.888879,42.6666667 213.333333,42.6666667 Z" />
                                </g>
                            </svg>
                            Ελληνικά
                        </span>
                        <span>
                            <svg fill="#ffffff" width="16px" height="16px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>light</title> <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"></path> </g></svg>                        
                            Ανοιχτόχρωμο
                        </span>
                        <span>
                            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M12 12V13.4522M12 13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19M12 13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                            Προσβασιμότητα
                        </span>
                    </div>
                    <div className={styles["felin-footer__additional-link-row"]}>
                        <span>Δήλωση προσβασιμότητας</span>
                        <span>&apos;Οροι χρήσης υπηρεσίας</span>
                        <span>Δήλωση προστασίας προσωπικών δεδομένων</span>
                        <div className={styles["felin-footer__additional-footer"]}>
                            <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21.82C17.1086 21.82 21.25 17.6786 21.25 12.57C21.25 7.46137 17.1086 3.32001 12 3.32001C6.89137 3.32001 2.75 7.46137 2.75 12.57C2.75 17.6786 6.89137 21.82 12 21.82Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.5291 9.03003C14.5937 8.09167 13.3241 7.56293 11.9991 7.56C11.1771 7.55982 10.3677 7.76234 9.6426 8.1496C8.9175 8.53685 8.29908 9.09687 7.84206 9.78015C7.38504 10.4634 7.10349 11.2489 7.02242 12.0669C6.94135 12.8849 7.06326 13.7103 7.37728 14.47C7.69129 15.2297 8.18779 15.9003 8.82277 16.4223C9.45776 16.9443 10.2116 17.3018 11.0177 17.463C11.8238 17.6241 12.6571 17.584 13.444 17.3463C14.231 17.1086 14.9471 16.6805 15.5291 16.1" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <span>FELiN 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
