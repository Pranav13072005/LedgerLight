import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Dashboard from './Dashboard';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import FilterSearch from './FilterSearch';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Dashboard transactions={[]}/>
      <AddTransaction addTransaction={() => {}} />
      <FilterSearch setFilter={() => {}} />
      <TransactionList
        transactions={[]}
        editTransaction={() => {}}
        deleteTransaction={() => {}}
        filter={{}}
      />
    </div>
  );
};

export default App;