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
      <Line data={data} options={{
        scales: {
          x: {
            title: {
              display: true,
              text: 'Search Number',
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
      }} />
      <button className="clear-button" onClick={clearGraph}>Clear Graph</button>
    </div>
  );
};

export default LineGraph;
