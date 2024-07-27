import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import {
  fetchTopCitiesWithMostJobs,
  fetchTopStatesWithMostJobs,
} from "../../services/api";
import "./JobStatisticsPage.css";
import BarChartComponent from "../../components/Charts/BarChartComponent";

const JobStatisticsPage = () => {
  const [topCities, setTopCities] = useState([]);
  const [topStates, setTopStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topCitiesData = await fetchTopCitiesWithMostJobs();
      setTopCities(
        Object.entries(topCitiesData).map(([key, value]) => ({
          name: key,
          value,
        }))
      );

      const topStatesData = await fetchTopStatesWithMostJobs();
      setTopStates(
        Object.entries(topStatesData).map(([key, value]) => ({
          name: key,
          value,
        }))
      );
    };

    fetchData();
  }, []);

  return (
    <div className="job-statistics">
      <h1>Job Statistics</h1>
      <div className="chart-container">
        <h2>Top Cities with Most Jobs</h2>
        <BarChartComponent
          data={topCities}
          width={600}
          height={300}
          xDataKey="name"
          barDataKey="value"
          barColor="#8884d8"
        />
      </div>
      <div className="chart-container">
        <h2>Top States with Most Jobs</h2>
        <BarChartComponent
          data={topStates}
          width={600}
          height={300}
          xDataKey="name"
          barDataKey="value"
          barColor="#82ca9d"
        />
      </div>
    </div>
  );
};

export default JobStatisticsPage;
