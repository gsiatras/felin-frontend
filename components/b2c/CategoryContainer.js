import React from 'react';
import styles from '../../styles/b2c/categoryContainer.module.css'; 

const CategoryContainer = ({ imageSrc, title, count }) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles.text}>
        <h1>
            {title}
        </h1>
        <span>
            {count} καταστήματα
        </span>
    </div>
    </div>
  );
};

export default CategoryContainer;
