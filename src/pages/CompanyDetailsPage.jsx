import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompanyDetails, fetchCompanyLocations } from '../services/api';

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

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.address}</p>
      <div>
        <h2>Locations</h2>
        <ul>
          {locations.map((location) => (
            <li key={location.location_id}>
              {location.name} - {location.address} (Lat: {location.latitude}, Long: {location.longitude})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
