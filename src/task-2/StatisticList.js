import React from "react";

const StatisticList = ({ stats }) => (
  <ul>
    {stats.map(({ id, label, percentage }) => (
      <li key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    ))}
  </ul>
);

export default StatisticList;
