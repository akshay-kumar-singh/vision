import React from 'react';
import styles from './MilesCalculator.module.css';
import { FaPlane } from 'react-icons/fa';

const GrayContainer = () => (
  <div className={styles.grayContainer}>
    <span className={styles.rewardText}>You will be rewarded with</span>
    <div className={styles.rewardDetails}>
      <FaPlane className={styles.planeIcon} />
      <span className={styles.milesAmount}>40,000 Asia Miles</span>
    </div>
    <button className={styles.applyButton}>Apply Now</button>
    <p className={styles.travelText}>
      Embark on a journey of a lifetime with your Asia Miles. Whether it's exploring exotic destinations, enjoying luxurious accommodations, or indulging in unique experiences, your miles can take you to places you've always dreamed of. From stunning beaches to vibrant cities, let your miles unlock unforgettable adventures. Start planning your next travel escapade today and make the most out of your rewards!
    </p>
  </div>
);

export default GrayContainer;
