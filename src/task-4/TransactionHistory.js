import React from 'react';
import RowBodyList from './RowBodyList';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <section className={styles.section}>
    <table className={styles.transaction__history}>
      <thead>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <RowBodyList items={items} />
    </table>
  </section>
);

export default TransactionHistory;
