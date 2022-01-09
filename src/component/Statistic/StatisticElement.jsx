import PropTypes from "prop-types";
import { StatisticItem } from "./statistic.styled";

const StatisticElement = ({ statistic: { label, percentage } }) => {
  return (
    <StatisticItem className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticItem>
  );
};

export default StatisticElement;

StatisticElement.propTypes = {
  statistic: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
