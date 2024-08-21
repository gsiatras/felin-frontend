import '../../styles/bootstrap/bootstrap.css'
import '../../styles/globals.css';
import Head from 'next/head';
import Header from '../../components/b2c/Header';
import Footer  from '../../components/Footer'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <Head>
        <title>FELiN</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body className="felin-dashboard">
        <Header/>
        <main className="felin-main-content-home">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

