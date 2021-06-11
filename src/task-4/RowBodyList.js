import React from "react";

const RowBodyList = ({ items }) => (
  <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))}
  </tbody>
);

export default RowBodyList;
