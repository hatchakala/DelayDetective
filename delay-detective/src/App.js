// import React, { useState, useEffect } from 'react'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
// import Header from './components/Header';
// import MonthSelector from './components/MonthSelector';
// import LineGraph from './components/LineGraph';  
// import About from './components/About';

// function App() {
//   const [line, setLine] = useState('Atlantic City Rail Line');
//   const [predictDelay, setPredictDelay] = useState(0);
//   const [predictNum, setPredictNum] = useState(0);
//   const [confidenceHigh, setConfidenceHigh] = useState(0);
//   const [confidenceLow, setConfidenceLow] = useState(0);
//   const [month, setMonth] = useState('January');
//   const [dataPoints, setDataPoints] = useState([]); 

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
        
//         // Add the current data point to the array
//         setDataPoints(prevPoints => [...prevPoints, { delay: data.predicted_delay_all, number: data.predicted_number_all }]);
//       });
//   }, [line, month]);

//   const clearGraph = () => {
//     setDataPoints([]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <MonthSelector changeMonth={changeMonth} changeLine={changeLine} />
//                 <div className="confidence-intervals">
//                   <p>Predicted Delay Percent: {predictDelay}%</p>
//                   <p>Predicted Delay Number: {predictNum}</p>
//                   <p>Confidence Interval: {confidenceLow}%, {confidenceHigh}%</p>
//                 </div>
//                 <LineGraph dataPoints={dataPoints} clearGraph={clearGraph} />
//               </>
//             }
//           />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
// import './App.css'; // Ensure App.css is imported
// import Header from './components/Header';
// import MonthSelector from './components/MonthSelector';
// import LineGraph from './components/LineGraph';  
// import About from './components/About';

// function App() {
//   const [line, setLine] = useState('Atlantic City Rail Line');
//   const [predictDelay, setPredictDelay] = useState(0);
//   const [predictNum, setPredictNum] = useState(0);
//   const [confidenceHigh, setConfidenceHigh] = useState(0);
//   const [confidenceLow, setConfidenceLow] = useState(0);
//   const [month, setMonth] = useState('January');
//   const [dataPoints, setDataPoints] = useState([]); 

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
        
//         // Add the current data point to the array
//         setDataPoints(prevPoints => [...prevPoints, { delay: data.predicted_delay_all, number: data.predicted_number_all }]);
//       });
//   }, [line, month]);

//   const clearGraph = () => {
//     setDataPoints([]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <MonthSelector changeMonth={changeMonth} changeLine={changeLine} />
//                 <div className="confidence-intervals">
//                   <p>Predicted Delay Percent: {predictDelay}%</p>
//                   <p>Predicted Delay Number: {predictNum}</p>
//                   <p>Confidence Interval: {confidenceLow}%, {confidenceHigh}%</p>
//                 </div>
//                 <div className="line-graph-container">
//                   <LineGraph dataPoints={dataPoints} clearGraph={clearGraph} />
//                 </div>
//               </>
//             }
//           />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
// import './App.css'; // Ensure App.css is imported
// import Header from './components/Header';
// import MonthSelector from './components/MonthSelector';
// import LineGraph from './components/LineGraph';  
// import About from './components/About';

// function App() {
//   const [line, setLine] = useState('Atlantic City Rail Line');
//   const [predictDelay, setPredictDelay] = useState(0);
//   const [predictNum, setPredictNum] = useState(0);
//   const [confidenceHigh, setConfidenceHigh] = useState(0);
//   const [confidenceLow, setConfidenceLow] = useState(0);
//   const [month, setMonth] = useState('January');
//   const [dataPoints, setDataPoints] = useState([]); 

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
        
//         // Add the current data point to the array
//         setDataPoints(prevPoints => [...prevPoints, { delay: data.predicted_delay_all, number: data.predicted_number_all }]);
//       });
//   }, [line, month]);

//   const clearGraph = () => {
//     setDataPoints([]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <MonthSelector changeMonth={changeMonth} changeLine={changeLine} />
//                 <div className="confidence-intervals">
//                   <p>Predicted Delay Percent: {predictDelay}%</p>
//                   <p>Predicted Delay Number: {predictNum}</p>
//                   <p>Confidence Interval: {confidenceLow}%, {confidenceHigh}%</p>
//                 </div>
//                 <div className="line-graph-container">
//                   <LineGraph dataPoints={dataPoints} clearGraph={clearGraph} />
//                 </div>
//               </>
//             }
//           />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css'; // Ensure App.css is imported
import Header from './components/Header';
import MonthSelector from './components/MonthSelector';
import LineGraph from './components/LineGraph';  
import About from './components/About';
import subwayImage from './images/SubwaySurfers.PNG'; // Path to your image

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
        // Round the values to two decimal places before setting the state
        setPredictDelay(parseFloat(data.predicted_delay_all).toFixed(2)); // Round to 2 decimal places
        setPredictNum(Math.round(data.predicted_number_all));
        setConfidenceHigh(parseFloat(data.confidenceHigh).toFixed(2)); // Round to 2 decimal places
        setConfidenceLow(parseFloat(data.confidenceLow).toFixed(2)); // Round to 2 decimal places

        // Add the current data point to the array
        setDataPoints(prevPoints => [
          ...prevPoints,
          { delay: data.predicted_delay_all, number: data.predicted_number_all }
        ]);
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
                  <p>Predicted Delay Number: {predictNum} trains</p>
                  <p>Confidence Interval: {confidenceLow}%, {confidenceHigh}%</p>
                </div>
                <div className="line-graph-container">
                  <img src={subwayImage} alt="Subway Surfer Railtrack" className="subway-image left-image" />
                  <LineGraph dataPoints={dataPoints} clearGraph={clearGraph} />
                  <img src={subwayImage} alt="Subway Surfer Railtrack" className="subway-image right-image" />
                </div>
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
