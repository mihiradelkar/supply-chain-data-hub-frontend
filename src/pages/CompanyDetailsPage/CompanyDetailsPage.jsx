import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCompanyDetails, fetchCompanyLocations } from "../../services/api";
import CompanyDetails from "../../components/CompanyDetails/CompanyDetails";
import CompanyMap from "../../components/CompanyDetails/CompanyMap";
// import CompanyBarChart from "../../components/CompanyDetails/CompanyBarChart";
// import CompanyScatterPlot from "../../components/CompanyDetails/CompanyScatterPlot";
import "./CompanyDetailsPage.css";

const CompanyDetailsPage = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const companyData = await fetchCompanyDetails(companyId);
      setCompany(companyData);
      const locationsData = await fetchCompanyLocations(companyId);
      setLocations(locationsData);
    };
    fetchData();
  }, [companyId]);

  if (!company) return <div>Loading...</div>;

  // const locationData = locations.map((location) => ({
  //   name: location.name,
  //   latitude: location.latitude,
  //   longitude: location.longitude,
  // }));

  const heatmapData = locations.map((location) => [
    location.latitude,
    location.longitude,
    1,
  ]);

  return (
    <div className="company-details">
      <CompanyDetails company={company} />
      <CompanyMap
        company={company}
        locations={locations}
        heatmapData={heatmapData}
      />
      {/* <CompanyBarChart data={locationData} /> */}
      {/* <CompanyScatterPlot data={locationData} /> */}
      <Link to="/" className="back-link">
        Back to List
      </Link>
    </div>
  );
};

export default CompanyDetailsPage;
