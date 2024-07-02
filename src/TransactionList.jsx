import React from 'react';
import './TransactionList.css';

const TransactionList = ({ transactions, editTransaction, deleteTransaction, filter }) => {
  const filteredTransactions = transactions.filter((txn) => {
    const filterByDate = filter.date ? new Date(txn.date) >= new Date(filter.date[0]) && new Date(txn.date) <= new Date(filter.date[1]) : true;
    const filterByCategory = filter.category ? txn.category === filter.category : true;
    const filterByType = filter.type ? txn.type === filter.type : true;
    return filterByDate && filterByCategory && filterByType;
  });

  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <ul>
        {filteredTransactions.map((txn) => (
          <li key={txn.id}>
            <span>{txn.date}</span>
            <span>{txn.category}</span>
            <span>{txn.description}</span>
            <span>${txn.amount.toFixed(2)}</span>
            <span>{txn.type}</span>
            <button onClick={() => editTransaction(txn.id, txn)}>Edit</button>
            <button onClick={() => deleteTransaction(txn.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;