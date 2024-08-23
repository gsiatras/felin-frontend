import React from 'react';
import styles from '../../../styles/b2c/homepages/home1.module.css'; 
import '../../../styles/globals.css';  
import Carousel from '../Carousel';
import CategoryContainer from '../CategoryContainer'; // Adjust path as needed

const Home1 = () => {
    const categories = [
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/categories/images/bd53aa76-a78c-11ed-945c-8a3ba19b31e4_a339d909_1bd4_41b1_a730_737ab8b466b1.png-md?w=600', title: 'Supermarkets', count: 10 },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/categories/images/a8c86286-d549-11ee-95b4-062f680f9b39_937aad6f_34ab_4a7b_89d0_f22c5afb988a.jpg-md?w=600', title: 'Mini Markets', count: 10 },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/categories/43da6aaa-4779-11ec-bda2-16dadda4b025_8536d8e7_98b3_48e7_a823_a9a281ffc642.jpg-md?w=600', title: 'Φαρμακεία', count: 10 },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/categories/1d44f874-46ed-11ec-830e-ca83da4845d9_945ba138_32fc_4340_a005_302a5a071655.jpg-md?w=600', title: 'Είδη για κατοικίδια', count: 10 },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/categories/images/d6d2d152-a78c-11ed-8f9a-3a15d3068e15_924a787e_b338_446d_ac29_f848d3c28c65.png-md?w=600', title: 'Φρούτα & Λαχανικά', count: 10 },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/categories/7c7b9b24-46f0-11ec-9441-be09fcc76cfb_bd37eb65_f8d9_4824_a236_419fe7b8b22a.jpg-md?w=600', title: 'Κάβες', count: 10 },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/categories/4c7b9e08-c5b7-11ea-a087-8a5eba4fdbce_04778292_1347_4802_91ed_50d71a0de773.jpg-md?w=600', title: 'Ανθοπωλεία', count: 10},
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/categories/db624ce8-477a-11ec-b661-f2ea60bfba0f_e19a3fa2_32cd_49eb_be13_008ad57496c1.jpg-md?w=600', title: 'Κρέας & Ψάρια', count: 10 },
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/categories/eee1e246-46ea-11ec-9441-be09fcc76cfb_f6c7229e_ab29_45aa_9a4d_12871668b7d7.jpg-md?w=600', title: 'Δώρα', count: 10},
        { imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/categories/images/4b7f534e-d54b-11ee-acf8-1291b5cd1916_945017be_7b00_4b82_8e93_fb12d570da2c.jpg-md?w=600', title: 'Οργανικά & Βιολογικά', count: 10 },
    ];

    const categoryComponents = categories.map((category, index) => (
        <CategoryContainer 
            key={index} 
            imageSrc={category.imageSrc} 
            title={category.title}
            count={category.count} 
        />
    ));

    return (
        <div className={styles["felin-first-page"]}>
            <div className={styles["felin-first-page__content"]}>
                <div className={styles["felin-first-page__content__upper"]}>
                    <h1>Καταστήματα Β2Β</h1>
                </div>
                <div className={styles["felin-first-page__content__lower"]}>
                    <Carousel 
                        items={categoryComponents} 
                        title="Κατηγορίες"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home1;
