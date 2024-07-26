import React from "react";
import AllCompaniesMap from "../../components/CompanyHeatMap/AllCompaniesMap";
import { Link } from "react-router-dom";
import "./CompanyHeatMapPage.css";

const CompanyHeatMapPage = () => {
  return (
    <div className="heatmap-page">
      <h1 className="title">Company Heatmap</h1>
      <div className="map-container">
        <AllCompaniesMap />
      </div>
      <Link to="/" className="back-link">
        Back to List
      </Link>
    </div>
  );
};

export default CompanyHeatMapPage;
