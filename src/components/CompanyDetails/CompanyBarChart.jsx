import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const CompanyBarChart = ({ data }) => (
  <div className="chart-container">
    <h2>Location Count per Company</h2>
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="latitude" fill="#8884d8" />
      <Bar dataKey="longitude" fill="#82ca9d" />
    </BarChart>
  </div>
);

export default CompanyBarChart;
