import React from 'react';
import styles from './MilesCalculator.module.css';
import { FaPencilAlt } from 'react-icons/fa';

const AmountSection = ({ amount, onEdit }) => (
  <div className={styles.amountSection}>
    <span className={styles.amount}>{amount}</span>
    <FaPencilAlt className={styles.pencilIcon} onClick={onEdit} />
  </div>
);

export default AmountSection;
