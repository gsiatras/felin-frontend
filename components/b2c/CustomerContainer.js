import React from 'react';
import styles from '../../styles/b2c/customerContainer.module.css'; 
import Switch from '@mui/material/Switch';

const CustomerContainer = ({ imageSrc, title, code }) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles["mid-wrapper"]}>
        <div className={styles.mid}>
            <div className={styles.text}>
                <h2 className={styles.title}>
                    {title}
                </h2>
            </div>
            <div className={styles["button-wrapper"]}>
                <Switch  disabled defaultChecked />
            </div>
        </div>
        <div className={styles.lower}>
            <svg width="16px" height="16px" viewBox="0 0 1024 1024" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"></path><path fill="#000000" d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"></path></g></svg>
            <span>
                {code}
            </span>
        </div>
    </div>

      </div>
  );
};

export default CustomerContainer;