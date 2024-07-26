import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// default icon options
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const CompanyMap = ({ company, locations, heatmapData }) => (
  <MapContainer
    center={[company.latitude, company.longitude]}
    zoom={13}
    className="map-container"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
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
    <HeatmapLayer points={heatmapData} />
  </MapContainer>
);

const HeatmapLayer = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    const heatLayer = L.heatLayer(points, { radius: 25 });
    map.addLayer(heatLayer);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
};

export default CompanyMap;
