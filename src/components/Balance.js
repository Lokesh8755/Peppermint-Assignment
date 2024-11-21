// src/components/Balance.js
import React from 'react';

const Balance = ({ transactions }) => {
  const totalIncome = transactions
    .filter((item) => item.type === 'Income')
    .reduce((acc, item) => acc + item.amount, 0);

  const totalExpense = transactions
    .filter((item) => item.type === 'Expense')
    .reduce((acc, item) => acc + item.amount, 0);

  const netBalance = totalIncome - totalExpense;

  return (
    <div>
      <h2>Net Balance: ₹{netBalance}</h2>
      <h3>Total Income: ₹{totalIncome}</h3>
      <h3>Total Expenses: ₹{totalExpense}</h3>
    </div>
  );
};

export default Balance;
