import React from 'react';
import styles from '../../../styles/b2c/homepages/home2.module.css'; 
import '../../../styles/globals.css';  
import CarouselFull from '../CarouselFull';
import BigContainer from '../BigContainer'; 

const campaigns = [
  { imageSrc: 'https://discovery-cdn.wolt.com/content_editor/banners/images/10513ac2-7e2e-11ee-9f82-06ef56f69952_e9b069d8_bcc4_4e37_bec4_2ed746018340.png', title: '', subtitle: '', videoSrc: 'https://prod-videos.wolt.com/discovery/86e1b4fd-3a0e-4802-993a-9937fb444c8e-360.m3u8' },
  { imageSrc: 'https://www.smart-sales.gr/wp-content/uploads/2023/07/ppl_6.png', title: 'MoBiforce', subtitle: 'Business Optimal Software' },
  { imageSrc: 'https://discovery-cdn.wolt.com/content_editor/banners/images/10513ac2-7e2e-11ee-9f82-06ef56f69952_e9b069d8_bcc4_4e37_bec4_2ed746018340.png', videoSrc: 'https://prod-videos.wolt.com/discovery/bf638d47-ff4a-41fd-92fd-1c28f7781405-360.m3u8' },
  { imageSrc: 'https://discovery-cdn.wolt.com/content_editor/banners/images/10513ac2-7e2e-11ee-9f82-06ef56f69952_e9b069d8_bcc4_4e37_bec4_2ed746018340.png', videoSrc: 'https://prod-videos.wolt.com/discovery/0f6fa1fa-21a5-4d52-8e07-2642e23dfe4c-360.m3u8' },
];

const campaignComponents = campaigns.map((campaign, index) => (
  <BigContainer 
    key={index} 
    background={campaign.imageSrc} 
    title={campaign.title}
    subtitle={campaign.subtitle}
    videoSrc={campaign.videoSrc} 
  />
));

const Home2 = () => {
  return (
    <div className={styles["felin-second-page"]}>
      <div className={styles["felin-second-page__content"]}>
        <div className={styles["felin-second-page__content__lower"]}>
          <CarouselFull 
            items={campaignComponents} 
            title="Καμπάνιες και Φυλλάδια"
          />
        </div>
      </div>
    </div>
  );
}

export default Home2;

