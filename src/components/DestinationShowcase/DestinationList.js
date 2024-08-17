import React from 'react';
import DestinationCard from './DestinationCard';
import styles from './DestinationList.module.css';

const DestinationList = ({ destinations }) => {
  return (
    <div className={styles.imageContainer}>
      {destinations.map((destination, index) => (
        <DestinationCard
          key={index}
          image={destination.image}
          alt={destination.alt}
          name={destination.name}
          miles={destination.miles}
          cities={destination.cities}
        />
      ))}
    </div>
  );
};

export default DestinationList;
