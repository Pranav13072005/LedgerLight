import React, { useState } from 'react';
import './FilterSearch.css';

const FilterSearch = ({ setFilter }) => {
  const [dateRange, setDateRange] = useState(['', '']);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const handleFilter = () => {
    setFilter({ date: dateRange, category, type });
  };

  return (
    <div className="filter-search">
      <h2>Filter & Search</h2>
      <div className="form-group">
        <label>Date Range</label>
        <input type="date" value={dateRange[0]} onChange={(e) => setDateRange([e.target.value, dateRange[1]])} />
        <input type="date" value={dateRange[1]} onChange={(e) => setDateRange([dateRange[0], e.target.value])} />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterSearch;