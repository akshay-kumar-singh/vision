import React from 'react';
import styles from './InfoContainer.module.css';

const InfoContainer = ({ leftText, rightText }) => {
  return (
    <div className={styles.infoContainer}>
      <span className={`${styles.infoText} ${styles.boldText} ${styles.align}`}>{leftText}</span>
      <span className={`${styles.infoText} ${styles.boldText}`}>{rightText}</span>
    </div>
  );
};

export default InfoContainer;
