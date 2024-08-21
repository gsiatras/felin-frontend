"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/merchant/sidebar.module.css'; 

const SideBar = () => {
    return (
        <div className={styles["felin-sidebar-home"]}>
            <div className={styles["felin-sidebar-home__wrapper"]}>
                <nav className={styles["felin-sidebar-home__menu-wrapper"]}>
                    <a href="signin" className={styles["felin-sidebar-home__menu__home"]}>					
                        <span>Σύνδεση</span>
                    </a>  
                    <li className={styles["felin-sidebar-home__menu__item felin-sidebar-home__menu__divider"]}></li>
                    <ul className={styles["felin-sidebar-home__menu"]}>
                        <li className={styles["felin-sidebar-home__menu__item"]}>
                            <span className={styles["felin-sidebar-home__menu__heading"]}>Προϊόντα</span>
                            <ul className={styles["felin-sidebar-home__submenu"]}>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="index" className={styles["felin-sidebar-home__menu__link"]}>Marketplace</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="index-2" className={styles["felin-sidebar-home__menu__link"]}>Καμπάνιες</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="index-2" className={styles["felin-sidebar-home__menu__link"]}>Διαφημήσεις</a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles["felin-sidebar-home__menu__item"]}>
                            <span className={styles["felin-sidebar-home__menu__heading"]}>Λύσεις</span>
                            <ul className={styles["felin-sidebar-home__submenu"]}>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="pricing" className={styles["felin-sidebar-home__menu__link"]}>Αναλυτικά στοιχεία και πληροφορίες</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>FELiN Ads</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Integrations</a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles["felin-sidebar-home__menu__item"]}>
                            <span className={styles["felin-sidebar-home__menu__heading"]}>Τύποι επιχειρήσεων</span>
                            <ul className={styles["felin-sidebar-home__submenu"]}>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="pricing" className={styles["felin-sidebar-home__menu__link"]}>Mini Market</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Super Market</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Γενικό εμπόρειο</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Κάβες</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Ηλεκτρονικά</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Κρέας - Ψάρια</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Pet Stores</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Είδη σπιτιού - Διακόσμισης</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Είδη Δώρων</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Ανθοπωλεία</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Παιδικά Βρεφικά</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Auto - Moto</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Επαγγελματικά Β2Β</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Είδη Πληροφορικής</a>
                                </li>
                                <li className={styles["felin-sidebar-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-sidebar-home__menu__link"]}>Παιχνίδια</a>
                                </li>
                            </ul>
                        </li>                
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SideBar;
