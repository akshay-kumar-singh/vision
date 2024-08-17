import React from 'react';
import styles from './MilesCalculator.module.css';

const CurrencyButtons = ({ currencies, activeCurrency, onClick }) => (
  <div className={styles.currencyButtons}>
    {currencies.map(currency => (
      <span
        key={currency}
        className={`${styles.currency} ${activeCurrency === currency ? styles.active : ''}`}
        onClick={() => onClick(currency)}
      >
        {currency}
      </span>
    ))}
  </div>
);

export default CurrencyButtons;
