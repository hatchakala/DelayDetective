import React from 'react';
import './index.css';
import Header from './components/Header';
import MonthSelector from './components/MonthSelector';
import { useState, useEffect } from 'react';

function App() {

  const [currentNum, setCurrentNum] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/route').then(res => res.json()).then(data => {
      setCurrentNum(data.number);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <MonthSelector />
      <p>
        currentNum: {currentNum}
      </p>
    </div>
  );
}

export default App;
