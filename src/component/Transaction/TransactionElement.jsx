import React from "react";
import PropTypes from "prop-types";

const TransactionElement = ({ data }) => {
  const { type, amount, currency } = data;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionElement;

TransactionElement.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
