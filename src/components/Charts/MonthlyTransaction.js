import React from 'react';

const MonthlyTransaction = (props) => {
  return (
    <div className="flex rounded-sm justify-center">
      <h1>{props.month} TRANSACTIONS</h1>
    </div>
  );
};

export default MonthlyTransaction;
