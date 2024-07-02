import React from 'react';
import './Header.css';
import headerImage from './header-image.png'; // Add your header image here

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
            Welcome to 
            <br/>
            <span className='title'>Ledger<span className='blue'>Light.</span></span>
        </h1>
        <p>
          "LedgerLight is your personal finance manager. Track your income and expenses,
          categorize transactions, and gain insights into your spending habits with ease."
        </p>
      </div>
      <div className="header-image">
        <img src={headerImage} alt="Finance Management" />
      </div>
    </header>
  );
};

export default Header;