import React from 'react';
import './index.css';
import Header from './components/Header';
import MonthSelector from './components/MonthSelector';
import { useState, useEffect } from 'react';


function App() {

  const [line, setLine] = useState('Atlantic City Rail Line');
  const [predictDelay, setPredictDelay] = useState(0);
  const [predictNum, setPredictNum] = useState(0);
  const [confidenceHigh, setConfidenceHigh] = useState(0);
  const [confidenceLow, setConfidenceLow] = useState(0);
  const [month, setMonth] = useState('January');

  const changeLine = (line) => {
    // console.log(line)
    setLine(line)
  }

  const changeMonth = (month) => {
    // console.log(month)
    setMonth(month);
  }

  useEffect(() => {
    console.log("fetching" + `http://localhost:5000/api/route?line=${line}&month=${month}`);
    fetch(`http://localhost:5000/api/route?line=${line}&month=${month}`).then(res => res.json()).then(data => {
      setPredictDelay(data.predicted_delay_all);
      setPredictNum(data.predicted_number_all);
      setConfidenceHigh(data.confidenceHigh);
      setConfidenceLow(data.confidenceLow);
    });
  }, [line, month]);

  return (
    <div className="App">
      <Header />
      <MonthSelector changeMonth={(month) => changeMonth(month)} changeLine={(line) => changeLine(line)}/>
      <p>
        Predicted Delay Percent: {predictDelay}
      </p>
      <p>
        Predicted Delay Number: {predictNum}
      </p>
      <p>
        Confidence Interval: {confidenceLow}, {confidenceHigh}
      </p>
    </div>
  );
}

export default App;
