import React from 'react';
import './Dashboard.css';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsGraphDownArrow } from "react-icons/bs";
import { PiPiggyBankDuotone } from "react-icons/pi";

const Dashboard = ({ transactions }) => {
  const totalIncome = transactions.filter((txn) => txn.type === 'income').reduce((acc, txn) => acc + txn.amount, 0);
  const totalExpenses = transactions.filter((txn) => txn.type === 'expense').reduce((acc, txn) => acc + txn.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p className='desc'>"Get a clear and concise overview of your finances at a glance. Dive into your spending habits with interactive charts and detailed summaries, and stay on top of your financial goals like never before."</p>
      <div className="summary">
        <div className="summary-item">
          <h2>Total Income </h2>
          <FaMoneyBillTrendUp className='icons'/>
          <p className='amount'>${totalIncome.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h2>Total Expenses</h2>
          <BsGraphDownArrow className='icons'/>
          <p className='amount'>${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h2>Balance</h2>
          <PiPiggyBankDuotone className='icons'/>
          <p className='amount'>${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;