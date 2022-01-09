import React from "react";
import PropTypes from "prop-types";

import TransactionElement from "./TransactionElement";

import { TransactionTable } from "./Transaction.styled";

const TransactionHistory = ({ data }) => {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map((el) => (
          <TransactionElement data={el} key={el.id} />
        ))}
      </tbody>
    </TransactionTable>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
