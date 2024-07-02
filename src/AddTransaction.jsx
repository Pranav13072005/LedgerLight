import React, { useState } from 'react';
import './AddTransaction.css';
import transactionImg from './transaction.jpg';

const AddTransaction = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      date,
      category,
      description,
      type,
    };
    addTransaction(newTransaction);
    setAmount('');
    setDate('');
    setCategory('');
    setDescription('');
    setType('income');
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <p className='desc'>"Ready to take control of your finances? Our streamlined process makes it easy to log your expenses and income. Just follow these simple steps to keep track of where your money goes."</p>
      <div className='hero'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
      <div className='section-right'>
          <img src={transactionImg} alt="transaction" className='timg'/>
      </div>
      </div>
    </div>
  );
};

export default AddTransaction;