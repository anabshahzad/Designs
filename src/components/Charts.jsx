import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


function Charts() {
  return (
    <div>
      <div className='bg-white p-8 w-full mb-4 rounded-lg shadow-lg font-semibold'>
      Last 7 Days-Late Comers vs Absent Employee 
        <Line
          data={{
            labels: ['Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 11', 'Oct 12', 'Oct 13'],
            datasets: [
              {
                label: "Late Comers",
                data: [1, 2.5, 3, 4, 3.5, 4.5, 5],
                borderColor: "#d95461",
                backgroundColor: "#d95461",
                tension: 0.4, // Smooth the line
                fill: false,
                pointStyle: 'circle',
                pointRadius: 5, 
                pointHoverRadius: 8
              },
              {
                label: "Absent",
                data: [3, 2, 2.5, 4, 5, 3, 2],
                borderColor: "#5dd05f",
                backgroundColor: "#5dd05f",
                tension: 0.4, // Smooth the line
                fill: false,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 8
              }
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                suggestedMax: 10 // Adjust this value for better visibility
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
            elements: {
              line: {
                borderWidth: 2,
              },
            },
          }}
          className='bg-white p-8 rounded-lg shadow-lg font-bold'
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
      <div className='bg-white p-8 h-96 w-full rounded-lg shadow-lg'>
        <h3 className='font-semibold mb-4'>Employees turn around</h3>
        <Line
          data={{
            labels: ['1997', '2002', '2007', '2012', '2017', '2022', '2024'],
            datasets: [
              {
                label: "Joined",
                data: [0, 2, 4, 6, 8, 15],
                borderColor: "#42a5f5",
                backgroundColor: "#42a5f5",
                tension: 0.4,
                fill: false,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 8,
              },
              {
                label: "Left",
                data: [0, 1, 3, 5, 7, 20],
                borderColor: "#d95461",
                backgroundColor: "#d95461",
                tension: 0.4,
                fill: false,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 8,
              }
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
            elements: {
              line: {
                borderWidth: 2,
              },
            },
          }}
        />
      </div>
            <div className='h-96 flex justify-center bg-white p-8 w-full rounded-lg shadow-lg '>
        <h3 className='font-semibold mb-4'> Gender Wise Active Employee Ratio</h3>
        <Doughnut
          data={{
            labels: ['Male', 'Female'],
            datasets: [
              {
                label: 'Ratio',
                data: [78, 22],
                backgroundColor: ['#4862cb', '#da8b8b',],
              }
            ]
          }}
          options={{
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
            cutout: '0%',
          }}
        />
      </div>
      </div>
      


    </div>
  );
}

export default Charts;
