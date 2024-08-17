import React from 'react';
import styles from './DestinationCard.module.css';

const DestinationCard = ({ image, alt, name, miles, cities }) => {
  return (
    <div className={styles.destinationCard}>
      <img src={image} alt={alt} className={styles.cityImage} />
      <div className={styles.destinationDetails}>
        <div className={styles.destinationHeader}>
          <h3 className={styles.destinationName}>{name}</h3>
          <p className={styles.miles}>
            {miles} <span className={styles.milesLabel}>Miles</span>
          </p>
        </div>
        <div className={styles.cityListContainer}>
          {cities.map((city, index) => (
            <span key={index} className={styles.cityItem}>
              {city}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
