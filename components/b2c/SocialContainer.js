import React from 'react';
import styles from '../../styles/b2c/categoryContainer.module.css'; 

const SocialContainer = ({ imageSrc, title, subtitle, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
      <div className={styles.container}>
        <img src={imageSrc} alt={title} className={styles.image} />
        <div className={styles.text}>
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>
      </div>
    </a>
  );
};

export default SocialContainer;
