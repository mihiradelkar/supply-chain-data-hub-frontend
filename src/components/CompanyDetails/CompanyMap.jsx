import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Set default icon options
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [16, 25], // Smaller size
  iconAnchor: [8, 25], // Anchor adjusted for smaller size
  popupAnchor: [1, -20], // Popup anchor adjusted for smaller size
  shadowSize: [25, 25], // Shadow size adjusted for smaller size
});

const CompanyMap = ({ company, locations, selectedLocation }) => (
  <MapContainer
    center={[company.latitude, company.longitude]}
    zoom={13}
    className="map-container"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
    <Markers
      company={company}
      locations={locations}
      selectedLocation={selectedLocation}
    />
  </MapContainer>
);

const Markers = ({ company, locations, selectedLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.setView([selectedLocation.latitude, selectedLocation.longitude], 13);
    }
  }, [selectedLocation, map]);

  return (
    <>
      <Marker position={[company.latitude, company.longitude]}>
        <Popup>
          {company.name}
          <br />
          {company.address}
        </Popup>
      </Marker>
      {locations.map((location) => (
        <Marker
          key={location.location_id}
          position={[location.latitude, location.longitude]}
        >
          <Popup>
            {location.name}
            <br />
            {location.address}
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default CompanyMap;
