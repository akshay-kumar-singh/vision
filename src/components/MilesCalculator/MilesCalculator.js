import React, { useState } from 'react';
import Header from './Header';
import SectionHeader from './SectionHeader';
import CurrencyButtons from './CurrencyButtons';
import AmountSection from './AmountSection';
import LineWithCircle from './LineWithCircle';
import GrayContainer from './GrayContainer';
import DepositOptions from './DepositeOptions';
import styles from './MilesCalculator.module.css';

const MilesCalculator = () => {
  const [applyingFrom, setApplyingFrom] = useState('Online');
  const [currency, setCurrency] = useState('HKD');
  const [fundsOption, setFundsOption] = useState('New Funds');
  const [durationOption, setDurationOption] = useState('6 Months');

  return (
    <div className={styles.milesCalculator}>
      <Header />

      <div className={styles.optionsContainer}>
        <SectionHeader label="Applying From">
          <div className={styles.optionButtons}>
            <span
              className={`${styles.option} ${applyingFrom === 'Online' ? styles.active : ''}`}
              onClick={() => setApplyingFrom('Online')}
            >
              Online
            </span>
            <span
              className={`${styles.option} ${applyingFrom === 'In Branch' ? styles.active : ''}`}
              onClick={() => setApplyingFrom('In Branch')}
            >
              In Branch
            </span>
          </div>
        </SectionHeader>

        <div className={styles.depositSection}>
          <span className={styles.label}>How much to deposit?</span>
          <CurrencyButtons
            currencies={['USD', 'HKD', 'RMB']}
            activeCurrency={currency}
            onClick={setCurrency}
          />
          <AmountSection amount="100,000" onEdit={() => alert('Edit amount')} />
        </div>

        <LineWithCircle />

        <DepositOptions
          fundsOption={fundsOption}
          setFundsOption={setFundsOption}
          durationOption={durationOption}
          setDurationOption={setDurationOption}
        />
      </div>

      <GrayContainer />
    </div>
  );
};

export default MilesCalculator;
