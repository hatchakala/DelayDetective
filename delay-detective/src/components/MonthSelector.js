import React from 'react';
import './MonthSelector.css';

function MonthSelector() {
  return (
    <div className="month-selector">
      <label htmlFor="month">Month:</label>
      <select id="month" name="month">
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
    </div>
  );
}

export default MonthSelector;
