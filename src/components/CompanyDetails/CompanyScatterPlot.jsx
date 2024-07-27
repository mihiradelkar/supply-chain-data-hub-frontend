import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CompanyScatterPlot = ({ data }) => (
  <div className="chart-container">
    <h2>Geographical Clustering of Locations</h2>
    <ScatterChart
      width={600}
      height={300}
      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="latitude" name="Latitude" unit="°" />
      <YAxis type="number" dataKey="longitude" name="Longitude" unit="°" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter name="Locations" data={data} fill="#8884d8" />
    </ScatterChart>
  </div>
);

export default CompanyScatterPlot;
