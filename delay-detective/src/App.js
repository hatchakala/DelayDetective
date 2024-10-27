import React from 'react';
import './index.css';
import Header from './components/Header';
import MonthSelector from './components/MonthSelector';
import { useState, useEffect } from 'react';

function App() {

  const [currentNum, setCurrentNum] = useState(0);
  const [predictDelay, setPredictDelay] = useState(0);
  const [predictNum, setPredictNum] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/route?line=Atlantic City Rail Line&month=september').then(res => res.json()).then(data => {
      setCurrentNum(data.number);
      setPredictDelay(data.predicted_delay_all);
      setPredictNum(data.predicted_number_all);
      setConfidence(data.confidence_interval);
      setMonth(data.month)
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <MonthSelector />
      <p>
        Line: {currentNum}
        Month: {month}
        Predicted Delay Percent: {predictDelay}
        Predicted Delay Number: {predictNum}
        Confidence: {confidence}
       </p>
    </div>
  );
}

export default App;
