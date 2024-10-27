import React from 'react';
import './MonthSelector.css';

function MonthSelector(props) {
  return (
    <div>
      <div className="month-selector">
        <label htmlFor="line">Rail Line:</label>
        <select
          id="line"
          name="line"
          onChange={e => props.changeLine(e.target.value)}
        >
          {['Atlantic City Rail Line', 'Main-Bergen Line', 'Montclair Boonton Line', 'Morris and Essex Line', 'Northeast Corridor', 'North Jersey Coast Line', 'Pascack Valley Line', 'Raritan Valley Line'].map((line) => (
            <option key={line} value={line}>{line}</option>
          ))}
        </select>
      </div>
      <div className="month-selector">
        <label htmlFor="month">Month:</label>
        <select
          id="month"
          name="month"
          onChange={e => props.changeMonth(e.target.value)}
        >
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MonthSelector;

