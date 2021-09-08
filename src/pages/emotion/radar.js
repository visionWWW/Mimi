import React from 'react';
import { Radar } from "react-chartjs-2";
import data from './radarData';

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