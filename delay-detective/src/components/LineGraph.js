// import React, { useState, useEffect } from 'react'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
// import './App.css'; // Ensure App.css is imported
// import Header from './components/Header';
// import MonthSelector from './components/MonthSelector';
// import LineGraph from './components/LineGraph';  
// import About from './components/About';
// import subwayImage from './images/SubwaySurfers.png'; // Path to your image

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
//         setPredictDelay(parseFloat(data.predicted_delay_all).toFixed(2)); // Round to 2 decimal places
//         setPredictNum(Math.round(data.predicted_number_all)); // Round to nearest integer
//         setConfidenceHigh(parseFloat(data.confidenceHigh).toFixed(2)); // Round to 2 decimal places
//         setConfidenceLow(parseFloat(data.confidenceLow).toFixed(2)); // Round to 2 decimal places

//         // Add the current data point to the array
//         setDataPoints(prevPoints => [
//           ...prevPoints,
//           { delay: data.predicted_delay_all, number: data.predicted_number_all }
//         ]);
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
//                   <img src={subwayImage} alt="Subway Surfer Railtrack" className="subway-image left-image" />
//                   <LineGraph dataPoints={dataPoints} clearGraph={clearGraph} />
//                   <img src={subwayImage} alt="Subway Surfer Railtrack" className="subway-image right-image" />
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

// import React, { useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// import './LineGraph.css'; // Ensure you have this CSS file in the same folder

// Chart.register(...registerables); // Register all necessary components

// const LineGraph = ({ dataPoints, clearGraph }) => {
//   const data = {
//     labels: dataPoints.map((_, index) => index + 1), // Use index as labels
//     datasets: [
//       {
//         label: 'Delay Percentages',
//         data: dataPoints.map(point => point.delay),
//         backgroundColor: 'rgba(255, 106, 19, 0.2)',
//         borderColor: 'rgba(255, 106, 19, 1)',
//         borderWidth: 2,
//         fill: false,
//       },
//     ],
//   };

//   return (
//     <div className="line-graph">
//       <Line data={data} options={{
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Current Percentage of Delays Compared to Previous Queries',
//             },
//             grid: {
//               drawBorder: true,
//               color: '#aaa',
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: 'Delay Percentage (%)',
//             },
//             grid: {
//               drawBorder: true,
//               color: '#aaa',
//             },
//           },
//         },
//         elements: {
//           point: {
//             radius: 5,
//             backgroundColor: 'orange',
//           },
//         },
//       }} />
//       <button className="clear-button" onClick={clearGraph}>Clear Graph</button>
//     </div>
//   );
// };

// export default LineGraph;

import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './LineGraph.css';

Chart.register(...registerables); // Register all necessary components

const LineGraph = ({ dataPoints, clearGraph }) => {
  const data = {
    labels: dataPoints.map((_, index) => index + 1), // Use index as labels
    datasets: [
      {
        label: 'Delay Percentages',
        data: dataPoints.map(point => point.delay),
        backgroundColor: 'rgba(255, 106, 19, 0.2)',
        borderColor: 'rgba(255, 106, 19, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div className="line-graph">
      <div className="line-graph-container">
        <Line 
          data={data} 
          options={{
            responsive: true,  // Make the chart responsive
            maintainAspectRatio: false, // Allows for width and height control
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Current Percentage of Delays Compared to Previous Queries',
                },
                grid: {
                  drawBorder: true,
                  color: '#aaa',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Delay Percentage (%)',
                },
                grid: {
                  drawBorder: true,
                  color: '#aaa',
                },
              },
            },
            elements: {
              point: {
                radius: 5,
                backgroundColor: 'orange',
              },
            },
          }} 
        />
      </div>
      <button className="clear-button" onClick={clearGraph}>Clear Graph</button>
    </div>
  );
};

export default LineGraph;


