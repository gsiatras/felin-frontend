"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/merchant/smallHeader.module.css'; 
import styles2 from '../../styles/merchant/header.module.css'; 

const SmallHeader = ({ toggleSidebar }) => {
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const submenuRef = useRef(null);
    const menuButtonRef = useRef(null);

    // Toggle the submenu
    const toggleSubmenu = () => {
        setOpenSubmenu(prev => !prev);
    };

    // Close the submenu if clicked outside
    const handleClickOutside = (event) => {
        if (submenuRef.current && !submenuRef.current.contains(event.target) && 
            menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
            setOpenSubmenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className={styles["felin-small-header-home"]}>
            <div className={styles["felin-small-header-home__wrapper"]}>
                <div className={styles["felin-small-header-home__wrapper_left"]}>
                    <a href="/">
                        <h1>FELiN</h1>					
                    </a>  
                    <li className={`${styles2["felin-header-home__menu__item"]} ${styles2["has-children"]} ${styles2["merchant"]}`}>
                        <a 
                            href="#" 
                            className={`${styles2["felin-header-home__menu__link"]} ${styles2["merchant"]}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleSubmenu();
                            }}
                            ref={menuButtonRef}
                        >
                            <span>Για εμπόρους</span>
                            <svg className={styles2["icon"]} width="800px" height="800px" viewBox="0 0 1024 1024" version="1.1">
                                <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" />
                            </svg>
                        </a>  
                        <ul 
                            className={`${styles2["felin-header-home__submenu"]} ${openSubmenu ? styles2["open"] : styles2["submenu-hidden"]}`}
                            ref={submenuRef}
                        >
                            <li className={`${styles2["felin-header-home__submenu__item"]} ${styles2["merchant"]}`}>
                                <a href="#" className={`${styles2["felin-header-home__menu__link"]} ${styles2["merchant"]}`}>Για εμπόρους</a>
                            </li>
                            <li className={`${styles2["felin-header-home__submenu__item"]} ${styles2["merchant"]}`}>
                                <a href="#" className={`${styles2["felin-header-home__menu__link"]} ${styles2["merchant"]}`}>Για συνεργάτες</a>
                            </li>
                        </ul>
                    </li>
                </div>
                <button 
                    className={`${styles["felin-btn"]} ${styles2["felin-btn__toggle-sidebar-home"]}`}
                    onClick={toggleSidebar}
                >
                    <svg width="22px" height="22px" viewBox="0 0 20 20" fill="none">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill="#000000" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
                        </g>
                    </svg>
                </button>
            </div>     
        </header>
    );
}

export default SmallHeader;
