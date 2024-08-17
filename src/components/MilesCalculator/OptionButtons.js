import React from 'react';
import styles from './MilesCalculator.module.css';

const OptionButtons = ({ options, activeOption, onClick }) => (
  <div className={styles.optionButtons}>
    {options.map(option => (
      <span
        key={option}
        className={`${styles.option} ${activeOption === option ? styles.active : ''}`}
        onClick={() => onClick(option)}
      >
        {option}
      </span>
    ))}
  </div>
);

export default OptionButtons;
