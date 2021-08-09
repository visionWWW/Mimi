import React, { Component } from 'react';
import { Radar } from "react-chartjs-2"; 

const data = {
  labels: [
    '감정1',
    '감정2',
    '감정3',
    '감정4',
    '감정5',
    '감정6',
  ],
  datasets: [{
    label: '감정 분석 결과',
    data: [65, 92, 90, 81, 100, 90],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const options = {
  plugins:{
    legend:{
      display:false
    }
  },
  responsive: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const RadarChart = () => (
  <>
    <Radar data={data} options={options} style={{ height:"25%", width: "25%", display:"inline-block"}}/>
  </>
);

export default RadarChart;