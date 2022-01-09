import React from "react";
import PropTypes from "prop-types";

import StatisticElement from "./StatisticElement";
import { StatisticList } from "./statistic.styled";

const Statistic = (props) => {
  return (
    <StatisticList className="stat-list">
      {props.stat.map((el) => (
        <StatisticElement statistic={el} key={el.id} />
      ))}
    </StatisticList>
  );
};
export default Statistic;

Statistic.propType = {
  el: PropTypes.shape({
    "el.id": PropTypes.string.isRequired,
  }),
};
