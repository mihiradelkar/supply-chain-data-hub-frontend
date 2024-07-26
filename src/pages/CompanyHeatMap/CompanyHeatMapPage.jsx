import React from "react";
import AllCompaniesMap from "../../components/CompanyHeatMap/AllCompaniesMap";
import { Link } from "react-router-dom";

const CompanyHeatMapPage = () => {
  return (
    <div>
      CompanyHeatMapPage
      <AllCompaniesMap />
      <Link to="/" className="back-link">
        Back to List
      </Link>
    </div>
  );
};

export default CompanyHeatMapPage;
