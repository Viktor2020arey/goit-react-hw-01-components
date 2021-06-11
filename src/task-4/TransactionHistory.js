import React from "react";
import RowBodyList from "./RowBodyList";

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <RowBodyList items={items} />
  </table>
);

export default TransactionHistory;
