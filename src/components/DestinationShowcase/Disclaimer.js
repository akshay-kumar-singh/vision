import React from 'react';
import styles from './Disclaimer.module.css';

const Disclaimer = () => {
  return (
    <div className={styles.disclaimerContainer}>
      <span className={styles.disclaimerText}>
        <strong>Disclaimer:</strong> this is the best travel site in the world
      </span>
    </div>
  );
};

export default Disclaimer;
