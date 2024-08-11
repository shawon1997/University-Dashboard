import React from 'react';
import { students } from './DummyData';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function MyPerformance({ studentId }) {
  const student = students.find(s => s.id === studentId);
  const subjects = Object.keys(student.marks);
  const marks = Object.values(student.marks);

  // Bar chart data
  const barData = {
    labels: subjects,
    datasets: [
      {
        label: 'Marks',
        data: marks,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      }
    ]
  };

  // Pie chart data
  const pieData = {
    labels: subjects,
    datasets: [
      {
        label: 'Marks',
        data: marks,
        backgroundColor: [
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,159,64,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,205,86,0.6)'
        ],
        borderColor: [
          'rgba(75,192,192,1)',
          'rgba(153,102,255,1)',
          'rgba(255,159,64,1)',
          'rgba(255,99,132,1)',
          'rgba(54,162,235,1)',
          'rgba(255,205,86,1)'
        ],
        borderWidth: 1,
      }
    ]
  };

  return (
    <div className="container p-5" style={{backgroundColor:"white"}}>
      <h2>My Performance</h2>
      <div className="chart-container" style={{ width: '100%', height: '300px', marginBottom: '20px' }}>
        <h3>Bar Chart</h3>
        <Bar
          data={barData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Marks by Subject'
              }
            }
          }}
          style={{ height: '100%' }}
        />
      </div>
      <div className="chart-container" style={{ width: '100%', height: '300px' }}>
        <h3>Pie Chart</h3>
        <Pie
          data={pieData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Marks Distribution'
              }
            }
          }}
          style={{ height: '100%' }}
        />
      </div>
    </div>
  );
}

export default MyPerformance;
