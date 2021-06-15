import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

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

RowBodyList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default RowBodyList;
