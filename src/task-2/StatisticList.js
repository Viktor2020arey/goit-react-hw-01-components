import React from 'react';

import styles from './Statistics.module.css';

const StatisticList = ({ stats }) => (
  <ul className={styles.list}>
    {stats.map(({ id, label, percentage }) => (
      <li className={styles.item} key={id}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
);

export default StatisticList;
