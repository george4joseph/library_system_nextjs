// components/FilledChart.js

import React, { useEffect } from 'react';
import Chart from 'chart.js';

const FilledChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const today = new Date();
    const currentDay = today.getDate(); // Get the current day of the month

    // Generate labels for the current month
    const labels = Array.from({ length: currentDay }, (_, i) => i + 1).map((day) => {
      return `${day}`;
    });

    // Example data (you can replace with your actual data)
    const booksIssuedData = [86, 114, 106, 106, 107, 111, 133]; // Replace with your actual data
    const earningsData = [70, 90, 44, 60, 83, 90, 100]; // Replace with your actual data

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: booksIssuedData,
            label: 'Books Issued',
            borderColor: 'rgb(62, 149, 205)',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
          },
          {
            data: earningsData,
            label: 'Earnings',
            borderColor: 'rgb(60, 186, 159)',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, []);

  return (
    <>
      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize">Monthly Statistics</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
};

export default FilledChart;
