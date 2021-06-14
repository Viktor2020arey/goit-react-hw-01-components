import React from 'react';
import StatisticList from './StatisticList';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.Statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <StatisticList stats={stats} />
  </section>
);

export default Statistics;
