"use client";

import '../../styles/bootstrap/bootstrap.css'
import '../../styles/globals.css';
import Head from 'next/head';
import Header from '../../components/b2c/Header';
import Footer  from '../../components/Footer'; 
import React, { useState, useRef, useEffect } from 'react';


export default function RootLayout({ children }) {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleBlurToggle = (shouldBlur) => {
    setIsBlurred(shouldBlur);
    if (shouldBlur) {
      document.body.classList.add('blur-active');
    } else {
      document.body.classList.remove('blur-active');
    }
  };

  return (
    <html lang="en" dir="ltr">
      <Head>
        <title>FELiN</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body className="felin-dashboard">
        <Header onBlurToggle={handleBlurToggle}/>
        <main className={`felin-main-content-home ${isBlurred ? 'blur-active' : ''}`}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

