// src/components/AddTransaction.js
import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      type,
    };

    addTransaction(newTransaction);
    setAmount('');
    setDescription('');
    setType('Income');
  };

  return (
    <form onSubmit={handleSubmit} >
      <h3>Add Transaction</h3>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{margin:"4px",}}
      />
      <select value={type}  onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button type="submit" style={{margin:"4px",}}>Add</button>
    </form>
  );
};

export default AddTransaction;
