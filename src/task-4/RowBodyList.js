import React from 'react';
import styles from './TransactionHistory.module.css';

const RowBodyList = ({ items }) => (
  <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <tr key={id} className={styles.tr}>
        <td className={styles.td}>{type}</td>
        <td className={styles.td}>{amount}</td>
        <td className={styles.td}>{currency}</td>
      </tr>
    ))}
  </tbody>
);

export default RowBodyList;
