import React from 'react';
import InfoContainer from './InfoContainer';
import DestinationList from './DestinationList';
import SeeMore from './SeeMore';
import Disclaimer from './Disclaimer';
import styles from './DestinationShowcase.module.css';

const DestinationShowcase = () => {
  const destinationsFirstGroup = [
    {
      image: '/city1.jpg',
      alt: 'Australia',
      name: 'Australia',
      miles: '40,000',
      cities: ['Sydney', 'Brisbane', 'Perth'],
    },
    {
      image: '/city2.jpg',
      alt: 'Middle East',
      name: 'Middle East',
      miles: '40,000',
      cities: ['Dubai'],
    },
  ];

  const destinationsSecondGroup = [
    {
      image: '/city3.jpg',
      alt: 'Europe',
      name: 'Europe',
      miles: '54,000',
      cities: ['London', 'Zurich', 'Frankfurt', 'Paris', 'Amsterdam'],
    },
    {
      image: '/city4.jpg',
      alt: 'New Zealand',
      name: 'New Zealand',
      miles: '54,000',
      cities: ['Auckland', 'Christchurch'],
    },
  ];

  return (
    <div className={styles.destinationShowcase}>
      <h2 className={styles.title}>Discover Anything but Average Destinations</h2>

      <div className={styles.whiteContainer}>
        <InfoContainer
          leftText="16 Destinations Within Reach"
          rightText="Sorted by Highest to Lowest Miles"
        />

        <DestinationList destinations={destinationsFirstGroup} />

        <SeeMore />

        <InfoContainer leftText="4 Destinations Within Reach" />

        <DestinationList destinations={destinationsSecondGroup} />

        <SeeMore />

        <Disclaimer />
      </div>
    </div>
  );
};

export default DestinationShowcase;
