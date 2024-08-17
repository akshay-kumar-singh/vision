import React from 'react';
import styles from './MilesCalculator.module.css';

const SectionHeader = ({ label, children }) => (
  <div className={styles.sectionHeader}>
    <span className={styles.label}>{label}</span>
    {children}
  </div>
);

export default SectionHeader;
