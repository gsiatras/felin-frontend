import React from 'react';
import styles from '../../../styles/b2c/homepages/home3.module.css'; 
import '../../../styles/globals.css';  
import Carousel from '../Carousel';
import CustomerContainer from '../CustomerContainer'; 

const Home3 = () => {
    const customers = [
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/2ad06722-8dfd-11ee-8643-ca5200ca17c1_4a264b6b_878b_4422_a5c9_c3ceeb51e179.png', title: 'My market',  code: '123432' },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/524dd47c-cf09-11ee-b14a-7e98123efd22_6d8c14f4_a045_42e1_9603_e5d191050f85.png', title: 'Κρητικός',  code: '132443' },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/778fcfee-2188-11ee-9e1e-3a4c6f1f42b3_925bb6b0_b067_45c5_a9db_96be19efc32e.avif', title: 'Παιχνίδια Μουστάκας',  code: '124322' },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/7bb0d4ae-cf09-11ee-bd9c-8246b7748bce_ac7ba68b_8563_434b_b8e6_42e262b66aab.png', title: '24shopen',  code: '324234' },
        { imageSrc: 'https://imageproxy.wolt.com/mes-image/cf1c6495-c700-43a2-98cc-7b861b82ff51/5fe07021-ae5b-4d21-95db-5df3ecd7f18c', title: 'Κωτσόβολος',  code: '134462' },
        { imageSrc: 'https://imageproxy.wolt.com/mes-image/5be9a33c-b685-4a01-963b-2d8368f4e898/b72e1e5d-0ee0-457a-847b-83924c99bdee', title: 'Γρηγόρης',  code: '143678' },
        { imageSrc: 'https://imageproxy.wolt.com/mes-image/705c00d0-5136-4d2a-bce3-e0835e20329d/a357fba9-eafa-4fac-afb5-19be9f01e3d1', title: 'Il Toto Cafe, ',  code: '143265'},
    ];

    const customerComponents = customers.map((customer, index) => (
        <CustomerContainer 
            key={index} 
            imageSrc={customer.imageSrc} 
            title={customer.title}
            code={customer.code}
        />
    ));

    return (
        <div className={styles["felin-third-page"]}>
            <div className={styles["felin-third-page__content"]}>
                <div className={styles["felin-third-page__content__lower"]}>
                    <Carousel 
                        items={customerComponents} 
                        title="Τα καταστήματά μου"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home3;