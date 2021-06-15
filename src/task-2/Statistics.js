import React from 'react';
import StatisticList from './StatisticList';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.Statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <StatisticList stats={stats} />
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
