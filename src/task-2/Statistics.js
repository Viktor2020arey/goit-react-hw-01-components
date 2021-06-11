import React from "react";

import StatisticList from "./StatisticList";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <StatisticList stats={stats} />
  </section>
);

export default Statistics;
