// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header';
// import MonthSelector from './components/MonthSelector';
// import DotPlot from './components/DotPlot';

// function App() {
//   const [line, setLine] = useState('Atlantic City Rail Line');
//   const [predictDelay, setPredictDelay] = useState(0);
//   const [predictNum, setPredictNum] = useState(0);
//   const [confidenceHigh, setConfidenceHigh] = useState(0);
//   const [confidenceLow, setConfidenceLow] = useState(0);
//   const [month, setMonth] = useState('January');

//   const changeLine = (line) => setLine(line);
//   const changeMonth = (month) => setMonth(month);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/route?line=${line}&month=${month}`)
//       .then(res => res.json())
//       .then(data => {
//         setPredictDelay(data.predicted_delay_all);
//         setPredictNum(data.predicted_number_all);
//         setConfidenceHigh(data.confidenceHigh);
//         setConfidenceLow(data.confidenceLow);
//       });
//   }, [line, month]);

//   return (
//     <div className="App">
//       <Header />
//       <MonthSelector changeMonth={changeMonth} changeLine={changeLine} />
//       <div className="confidence-intervals">
//         <p>Predicted Delay Percent: {predictDelay}%</p>
//         <p>Predicted Delay Number: {predictNum}</p>
//         <p>Confidence Interval: {confidenceLow}%, {confidenceHigh}%</p>
//       </div>
//       <DotPlot data={[predictDelay, predictNum, confidenceLow, confidenceHigh]} />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import MonthSelector from './components/MonthSelector';
import LineGraph from './components/LineGraph';  
import About from './components/About';

function App() {
  const [line, setLine] = useState('Atlantic City Rail Line');
  const [predictDelay, setPredictDelay] = useState(0);
  const [predictNum, setPredictNum] = useState(0);
  const [confidenceHigh, setConfidenceHigh] = useState(0);
  const [confidenceLow, setConfidenceLow] = useState(0);
  const [month, setMonth] = useState('January');
  const [dataPoints, setDataPoints] = useState([]); 

  const changeLine = (line) => setLine(line);
  const changeMonth = (month) => setMonth(month);

  useEffect(() => {
    fetch(`http://localhost:5000/api/route?line=${line}&month=${month}`)
      .then(res => res.json())
      .then(data => {
        setPredictDelay(data.predicted_delay_all);
        setPredictNum(data.predicted_number_all);
        setConfidenceHigh(data.confidenceHigh);
        setConfidenceLow(data.confidenceLow);
        
        // Add the current data point to the array
        setDataPoints(prevPoints => [...prevPoints, { delay: data.predicted_delay_all, number: data.predicted_number_all }]);
      });
  }, [line, month]);

  const clearGraph = () => {
    setDataPoints([]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MonthSelector changeMonth={changeMonth} changeLine={changeLine} />
                <div className="confidence-intervals">
                  <p>Predicted Delay Percent: {predictDelay}%</p>
                  <p>Predicted Delay Number: {predictNum}</p>
                  <p>Confidence Interval: {confidenceLow}%, {confidenceHigh}%</p>
                </div>
                <LineGraph dataPoints={dataPoints} clearGraph={clearGraph} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
