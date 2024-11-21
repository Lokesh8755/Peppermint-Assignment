// src/components/TransactionList.js
import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div >
      <h3>Transaction History</h3>
      <ul style={{listStyle:"none"}}>
        {transactions.map((transaction) => (
          <li  key={transaction.id}>
            {transaction.description} - ₹{transaction.amount} (
            {transaction.type})
            <button onClick={() => deleteTransaction(transaction.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
