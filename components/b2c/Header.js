"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/b2c/header.module.css'; 

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const headerRef = useRef(null);

  // Close search bar when clicking outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [headerRef]);

  return (
    <header className={styles["felin-header-home"]} ref={headerRef}>
        <div className={styles["felin-header-home__content"]}>
            <div className={styles["felin-header-home__wrapper"]}>
                <nav className={styles["felin-header-home__menu-wrapper"]}>
                    <a href="#">
                        <h1>FELiN</h1>					
                    </a>  
                    <li className={`${styles["felin-header-home__menu__item"]} ${styles["location"]} ${isFocused ? styles["hide"] : ''}`}>
                      <a className={`${styles["felin-header-home__menu__link"]} ${styles["location"]}`}>
                        <div className={styles["felin-header-home__menu__link__location-pin"]}>
                          <svg fill="#000000" height="16px" width="16px" viewBox="0 0 32 32">
                            <circle cx="16" cy="13" r="2"></circle>
                            <path d="M16,3C10.5,3,6,7.5,6,13c0,8.4,9,15.5,9.4,15.8c0.2,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C17,28.5,26,21.4,26,13C26,7.5,21.5,3,16,3z M16,17c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S18.2,17,16,17z"></path>
                          </svg>                              
                        </div>
                        <span>Ρόδος</span>
                        <svg className="icon" width="16px" height="16px" viewBox="0 0 1024 1024" version="1.1">
                          <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" />
                        </svg>
                      </a>  
                    </li>
                </nav>                  
                <nav className={`${styles["felin-header-home__menu-wrapper"]} ${styles["middle"]}`}>
                    <div 
                      className={`${styles["felin-header-home__search-form"]} ${isFocused ? styles["focused"] : ''}`}
                      onClick={() => setIsFocused(true)}
                    >
                      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                        <g id="SVGRepo_iconCarrier">
                          <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                      </svg>      
                      <input 
                        type="text" 
                        name="search" 
                        placeholder="Αναζήτηση στη FELiN..." 
                        className={styles["felin-header-home__search-input"]}
                        onFocus={() => setIsFocused(true)}
                        // onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                        onChange={(e) => setSearchText(e.target.value)} 
                        value={searchText}
                      />
                      <svg className={`${styles["felin-header-home__clear-icon"]} ${searchText ? styles["show"] : ''}`} onClick={() => setSearchText('')} width="24px" height="24px" viewBox="0 0 16 16" version="1.1"  fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path fill="#444" d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path>
                        </g>
                      </svg>
                    </div>
                </nav>
                <nav className={`${styles["felin-header-home__menu-wrapper"]} ${styles["right-nav"]}`}>
                    <a className={`${styles["felin-header-home__menu__link"]} ${styles["livechat"]} ${isFocused ? styles["hide"] : ''}`}>
                        <div className={styles["felin-header-home__menu__link__livechat"]}>
                            <svg fill="#000000" width="64px" height="64px" viewBox="0 0 64 64">
                              <path d="M53.72,11.02H28.65c-3.74,0-6.78,2.5-6.78,5.57v2.39H9.73c-3.44,0-6.23,2.3-6.23,5.13V39.93c0,2.83,2.79,5.13,6.23,5.13h2.42l8.21,7.65a.977.977,0,0,0,.68.27.953.953,0,0,0,.4-.08,1.011,1.011,0,0,0,.6-.92V45.06H32.35c3.44,0,6.23-2.3,6.23-5.13V39.7h1.6v7.76a1,1,0,0,0,.61.92.881.881,0,0,0,.39.08,1.039,1.039,0,0,0,.69-.26L51,39.7h2.72c3.74,0,6.78-2.5,6.78-5.58V16.59C60.5,13.52,57.46,11.02,53.72,11.02ZM36.58,39.93c0,1.7-1.94,3.13-4.23,3.13H21.04a1,1,0,0,0-1,1v5.62l-6.82-6.35a1,1,0,0,0-.68-.27H9.73c-2.33,0-4.23-1.4-4.23-3.13V24.11c0-1.72,1.9-3.13,4.23-3.13H21.87V34.12c0,3.08,3.04,5.58,6.78,5.58h7.93ZM58.5,34.12c0,1.97-2.15,3.58-4.78,3.58H50.6a1.014,1.014,0,0,0-.68.26l-7.74,7.21V38.7a.99.99,0,0,0-1-1H28.65c-2.63,0-4.78-1.61-4.78-3.58V16.59c0-1.97,2.15-3.57,4.78-3.57H53.72c2.63,0,4.78,1.6,4.78,3.57Z"></path>
                              <path d="M31.11,21.44a3.745,3.745,0,1,0,3.75,3.75A3.751,3.751,0,0,0,31.11,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.75,1.75,0,0,1,31.11,26.93Z"></path>
                              <path d="M41.18,21.44a3.745,3.745,0,1,0,3.75,3.75A3.749,3.749,0,0,0,41.18,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.741,1.741,0,0,1,41.18,26.93Z"></path>
                              <path d="M51.26,21.44a3.745,3.745,0,1,0,3.75,3.75A3.751,3.751,0,0,0,51.26,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.743,1.743,0,0,1,51.26,26.93Z"></path>
                            </svg>
                        </div>
                        <span>Live Chat</span>
                    </a>
                    <a href="signin" className={`${styles["felin-header-home__menu__item"]} ${isFocused ? styles["hide"] : ''}`}>					
                        <span>Σύνδεση</span>
                    </a>  
                    <a href="signup" className={`${styles["felin-header-home__menu__item"]} ${isFocused ? styles["hide"] : ''}`}>					
                        <span>Εγγραφή</span>
                    </a>
                    <svg className={`${styles["close-icon"]} ${isFocused ? styles["show"] : ''}`} onClick={() => setTimeout(() => setIsFocused(false), 200)} width="24px" height="24px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" fill="rgba(32, 33, 37, 0.12)" fill-opacity="0.24"></circle> <path d="M16 8L8 16" stroke="#222222" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 8L16 16" stroke="#222222" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </nav>
            </div>
            <div className={`${styles["felin-header-home__search-content"]} ${isFocused ? styles["show"] : ''}`}>
                Search results
            </div>
        </div>
    </header>
  );
};

export default Header;



