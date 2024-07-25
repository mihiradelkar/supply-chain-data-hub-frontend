import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { fetchCompanyDetails, fetchCompanyLocations } from '../services/api';
import 'leaflet/dist/leaflet.css';
import './CompanyDetailsPage.css';

const CompanyDetailsPage = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyData = await fetchCompanyDetails(companyId);
        setCompany(companyData);
        const locationsData = await fetchCompanyLocations(companyId);
        setLocations(locationsData);
      } catch (error) {
        setError('Failed to fetch company details or locations');
      }
    };
    fetchData();
  }, [companyId]);

  if (error) return <div>{error}</div>;

  if (!company) return <div>Loading...</div>;

  return (
    <div className="company-details">
      <h1>{company.name}</h1>
      <p>{company.address}</p>
      <MapContainer center={[company.latitude, company.longitude]} zoom={13} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[company.latitude, company.longitude]}>
          <Popup>
            {company.name}<br />{company.address}
          </Popup>
        </Marker>
        {locations.map((location) => (
          <Marker key={location.location_id} position={[location.latitude, location.longitude]}>
            <Popup>
              {location.name}<br />{location.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Link to="/" className="back-link">Back to List</Link>
    </div>
  );
};

export default CompanyDetailsPage;
