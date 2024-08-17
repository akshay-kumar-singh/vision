import React, { useState } from 'react';
import Header from './Header';
import SectionHeader from './SectionHeader';
import OptionButtons from './OptionButtons';
import CurrencyButtons from './CurrencyButtons'; 
import AmountSection from './AmountSection';
import LineWithCircle from './LineWithCircle';
import GrayContainer from './GrayContainer';
import styles from './MilesCalculator.module.css';

const MilesCalculator = () => {
  const [applyingFrom, setApplyingFrom] = useState('Online');
  const [currency, setCurrency] = useState('HKD');

  return (
    <div className={styles.milesCalculator}>
      <Header />

      <div className={styles.optionsContainer}>
        <SectionHeader label="Applying From">
          <OptionButtons
            options={['Online', 'In Branch']}
            activeOption={applyingFrom}
            onClick={setApplyingFrom}
          />
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

        <div className={styles.additionalSections}>
          <div className={styles.textSection}>
            <span className={styles.label}>Set up Time Deposit with</span>
            <OptionButtons
              options={['New Funds', 'Existing Funds']}
              activeOption="New Funds"
              onClick={() => {}}
            />
          </div>
          <div className={styles.textSection}>
            <span className={styles.label}>Duration of Deposit</span>
            <OptionButtons
              options={['6 Months', '12 Months']}
              activeOption="6 Months"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <GrayContainer />
    </div>
  );
};

export default MilesCalculator;
