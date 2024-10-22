import React from 'react';
import styles from '../../../styles/b2c/homepages/home4.module.css'; 
import '../../../styles/globals.css';  
import Carousel from '../Carousel';
import SocialContainer from '../SocialContainer'; 

const Home4 = () => {
    const categories = [
        { 
          imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/categories/images/bd53aa76-a78c-11ed-945c-8a3ba19b31e4_a339d909_1bd4_41b1_a730_737ab8b466b1.png-md?w=600', 
          title: 'Follow us on Facebook', 
          subtitle: 'Felin on Facebook',
          link: 'https://www.facebook.com/Felin.Greece'
        },
        { 
          imageSrc: 'https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/categories/images/a8c86286-d549-11ee-95b4-062f680f9b39_937aad6f_34ab_4a7b_89d0_f22c5afb988a.jpg-md?w=600', 
          title: 'Follow us on Instagram', 
          subtitle: 'Felin on Instagram',
          link: 'https://www.instagram.com/felin.greece'
        },
    ];

    const categoryComponents = categories.map((category, index) => (
        <SocialContainer 
            key={index} 
            imageSrc={category.imageSrc} 
            title={category.title}
            subtitle={category.subtitle}
            link={category.link} 
        />
    ));

    return (
        <div className={styles["felin-fourth-page"]}>
            <div className={styles["felin-fourth-page__content"]}>
                <div className={styles["felin-fourth-page__content__lower"]}>
                    <Carousel 
                        items={categoryComponents} 
                        title="Let&apos;s be social!"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home4;
