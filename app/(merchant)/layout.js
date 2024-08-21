"use client";

import React, { useState } from 'react';
import Header from '@/components/merchant/Header';
import '../../styles/globals.css';  
import '../../styles/bootstrap/bootstrap.css'
import Footer from '@/components/Footer';
import SmallHeader from '@/components/merchant/SmallHeader';
import SideBar from '@/components/merchant/Sidebar';

export default function RootLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <title>Merchant - FELiN</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body className="felin-dashboard">
        <Header />
        <SmallHeader toggleSidebar={toggleSidebar} />
        <main className="felin-main-content-home">
          {isSidebarVisible && <SideBar />}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

