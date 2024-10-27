import React from 'react';
import './index.css';
import Header from './components/Header';
import MonthSelector from './components/MonthSelector';
import { useState, useEffect } from 'react';


function App() {

  const [line, setLine] = useState('Atlantic City Rail Line');
  const [predictDelay, setPredictDelay] = useState(0);
  const [predictNum, setPredictNum] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [month, setMonth] = useState('January');

  const changeLine = (line) => {
    console.log(line)
    setLine(line)
  }

  const changeMonth = (month) => {
    console.log(month)
    setMonth(month);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/api/route?line=${line}&month=${month}`).then(res => res.json()).then(data => {
      setLine(data.number);
      setPredictDelay(data.predicted_delay_all);
      setPredictNum(data.predicted_number_all);
      setConfidence(data.confidence_interval);
      setMonth(data.month)
    });
  }, [line, month]);

  return (
    <div className="App">
      <Header />
      <MonthSelector changeMonth={(month) => changeMonth(month)} changeLine={(line) => changeLine(line)}/>
      <p>
        Line: {line}
      </p>
      <p>
        Month: {month}
      </p>
      <p>
        Predicted Delay Percent: {predictDelay}
      </p>
      <p>
        Predicted Delay Number: {predictNum}
      </p>
      <p>
        Confidence: {confidence}
      </p>
    </div>
  );
}

export default App;
