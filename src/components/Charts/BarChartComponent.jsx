import React from "react";
import "./BarChartComponent.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BarChartComponent = ({
  data,
  width,
  height,
  xDataKey,
  barDataKey,
  barColor,
}) => {
  return (
    <div className="bar-chart-box">
      <BarChart width={width} height={height} data={data}>
        <XAxis dataKey={xDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={barDataKey} fill={barColor} />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
