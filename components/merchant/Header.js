"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/merchant/header.module.css'; 

const Header = () => {
    // State to keep track of the currently open submenu
    const [openSubmenu, setOpenSubmenu] = useState(null);

    // Ref to the menu container
    const menuRef = useRef(null);

    // Toggle the submenu based on the clicked menu item
    const toggleSubmenu = (submenuId) => {
        setOpenSubmenu(openSubmenu === submenuId ? null : submenuId);
    };

    // Handle clicks outside the menu to close submenus
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenSubmenu(null);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the menu
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className={styles["felin-header-home"]}>
            <div className={styles["felin-header-home__wrapper"]}>
                <nav className={styles["felin-header-home__menu-wrapper"]} ref={menuRef}>
                    <a href="/">
                        <h1>FELiN</h1>					
                    </a>  
                    <li className={`${styles["felin-header-home__menu__item"]} ${styles["has-children"]} ${styles["merchant"]}`}>
                        <a 
                            className={`${styles["felin-header-home__menu__link"]} ${styles["merchant menu-toggle"]}`}
                            onClick={() => toggleSubmenu('merchant')}>
                            <span>Για εμπόρους</span>
                            <svg className={styles["icon"]} width="800px" height="800px" viewBox="0 0 1024 1024" version="1.1" >
                                <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" />
                            </svg>
                        </a>  
                        <ul className={`${styles["felin-header-home__submenu"]} ${openSubmenu === 'merchant' ? styles["open"] : styles["submenu-hidden"]}`}>
                            <li className={`${styles["felin-header-home__submenu__item"]} ${styles["merchant"]}`}>
                                <a href="#" className={`${styles["felin-header-home__menu__link"]} ${styles["merchant"]}`}>Για εμπόρους</a>
                            </li>
                            <li className={`${styles["felin-header-home__submenu__item"]} ${styles["merchant"]}`}>
                                <a href="#" className={`${styles["felin-header-home__menu__link"]} ${styles["merchant"]}`}>Για συνεργάτες</a>
                            </li>
                        </ul>
                    </li>
                </nav>
                <nav className={styles["felin-header-home__menu-wrapper"]} ref={menuRef}>
                    <a href="signin" className={styles["felin-header-home__menu__home"]}>					
                        <span>Σύνδεση</span>
                    </a>  
                    <ul className={styles["felin-header-home__menu"]}>
                        <li className={`${styles["felin-header-home__menu__item"]} ${styles["has-children"]}`} id="prod">
                            <a 
                                className={`${styles["felin-header-home__menu__link"]} ${styles["menu-toggle"]}`}
                                onClick={() => toggleSubmenu('prod')}>
                                <span>Προϊόντα</span>
                                <svg className={styles["icon"]} width="800px" height="800px" viewBox="0 0 1024 1024"  version="1.1" >
                                    <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" />
                                </svg>
                            </a>  
                            <ul className={`${styles["felin-header-home__submenu"]} ${openSubmenu === 'prod' ? styles["open"] : styles["submenu-hidden"]}`}>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="index" className={styles["felin-header-home__menu__link"]}>Marketplace</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="index-2" className={styles["felin-header-home__menu__link"]}>Καμπάνιες</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="index-2" className={styles["felin-header-home__menu__link"]}>Διαφημήσεις</a>
                                </li>
                            </ul>
                        </li>
                        <li className={`${styles["felin-header-home__menu__item"]} ${styles["has-children"]}`} id="sol">
                            <a 
                                className={`${styles["felin-header-home__menu__link"]} ${styles["menu-toggle"]}`}
                                onClick={() => toggleSubmenu('sol')}>
                                <span>Λύσεις</span>
                                <svg className={styles["icon"]} width="800px" height="800px" viewBox="0 0 1024 1024"  version="1.1" >
                                    <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" />
                                </svg>
                            </a>  
                            <ul className={`${styles["felin-header-home__submenu"]} ${openSubmenu === 'sol' ? styles["open"] : styles["submenu-hidden"]}`}>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="pricing" className={styles["felin-header-home__menu__link"]}>Καμπάνιες</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Αναλυτικά στοιχεία και πληροφορίες</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>FELiN Ads</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Integrations</a>
                                </li>
                            </ul>
                        </li>
                        <li className={`${styles["felin-header-home__menu__item"]} ${styles["has-children"]}`} id="shops">
                            <a 
                                className={`${styles["felin-header-home__menu__link"]} ${styles["menu-toggle"]}`}
                                onClick={() => toggleSubmenu('shops')}>
                                <span>Τύποι επιχειρήσεων</span>
                                <svg className={styles["icon"]} width="800px" height="800px" viewBox="0 0 1024 1024" version="1.1" >
                                    <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" />
                                </svg>
                            </a>  
                            <ul className={`${styles["felin-header-home__submenu"]} ${styles["more_items"]} ${openSubmenu === 'shops' ? styles["open"] : styles["submenu-hidden"]}`}>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="pricing" className={styles["felin-header-home__menu__link"]}>Mini Market</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Super Market</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Γενικό εμπόρειο</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Κάβες</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Ηλεκτρονικά</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Κρέας - Ψάρια</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Pet Stores</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Είδη σπιτιού - Διακόσμισης</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Είδη Δώρων</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Ανθοπωλεία</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Παιδικά Βρεφικά</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Auto - Moto</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Επαγγελματικά Β2Β</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Είδη Πληροφορικής</a>
                                </li>
                                <li className={styles["felin-header-home__submenu__item"]}>
                                    <a href="faq" className={styles["felin-header-home__menu__link"]}>Παιχνίδια</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav> 
            </div>
        </header>
    );
}

export default Header;
