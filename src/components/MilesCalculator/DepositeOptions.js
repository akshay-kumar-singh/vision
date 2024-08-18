import React from 'react';
import SectionHeader from './SectionHeader';
import styles from './DepositOptions.module.css';
import radioStyles from './RadioGroup.module.css';

const DepositOptions = ({ fundsOption, setFundsOption, durationOption, setDurationOption }) => {
  return (
    <div className={styles.depositOptionsContainer}>
      <div className={styles.sectionHeadersRow}>
        <SectionHeader label="Set up Time Deposit with" />
        <SectionHeader label="Duration of Deposit" />
      </div>

      <div className={styles.radioButtonsRow}>
        <div className={radioStyles.radioGroup}>
          <div
            className={`${radioStyles.optionItem} ${fundsOption === 'New Funds' ? radioStyles.activeOption : ''}`}
          >
            <input
              type="radio"
              id="new-funds"
              name="funds"
              checked={fundsOption === 'New Funds'}
              onChange={() => setFundsOption('New Funds')}
            />
            <label htmlFor="new-funds">New Funds</label>
          </div>
          <div
            className={`${radioStyles.optionItem} ${fundsOption === 'Existing Funds' ? radioStyles.activeOption : ''}`}
          >
            <input
              type="radio"
              id="existing-funds"
              name="funds"
              checked={fundsOption === 'Existing Funds'}
              onChange={() => setFundsOption('Existing Funds')}
            />
            <label htmlFor="existing-funds">Existing Funds</label>
          </div>
        </div>

        <div className={radioStyles.radioGroup}>
          <div
            className={`${radioStyles.optionItem} ${durationOption === '6 Months' ? radioStyles.activeOption : ''}`}
          >
            <input
              type="radio"
              id="six-months"
              name="duration"
              checked={durationOption === '6 Months'}
              onChange={() => setDurationOption('6 Months')}
            />
            <label htmlFor="six-months">6 Months</label>
          </div>
          <div
            className={`${radioStyles.optionItem} ${durationOption === '12 Months' ? radioStyles.activeOption : ''}`}
          >
            <input
              type="radio"
              id="twelve-months"
              name="duration"
              checked={durationOption === '12 Months'}
              onChange={() => setDurationOption('12 Months')}
            />
            <label htmlFor="twelve-months">12 Months</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositOptions;
