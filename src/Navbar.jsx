import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png'; // Add your logo image here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="LedgerLight Logo" />
        <p>Ledger<span className='blue'>Light</span></p>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#dashboard">Dashboard</a>
        <a href="#add-transaction">Add Transaction</a>
        <a href="#transaction-list">Transactions</a>
        <a href="#filter-search">Filter/Search</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon">&#9776;</span>
      </div>
    </nav>
  );
};

export default Navbar;