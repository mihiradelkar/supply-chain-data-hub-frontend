import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCompanyDetails, fetchCompanyLocations } from "../../services/api";
import CompanyMap from "../../components/CompanyDetails/CompanyMap";
import "./CompanyDetailsPage.css";

const CompanyDetailsPage = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

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

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="company-details">
      <h1>{company.name}</h1>
      <p>{company.address}</p>
      <div className="content">
        <div className="map-container">
          <CompanyMap
            company={company}
            locations={locations}
            selectedLocation={selectedLocation}
          />
        </div>
        <div className="location-list">
          <h2>Locations</h2>
          <ul>
            {locations.map((location) => (
              <li
                key={location.location_id}
                onClick={() => handleLocationClick(location)}
                className={
                  selectedLocation &&
                  selectedLocation.location_id === location.location_id
                    ? "selected"
                    : ""
                }
              >
                {location.name} - {location.address}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
