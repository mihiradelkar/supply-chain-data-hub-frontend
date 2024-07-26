import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import { fetchAllLocations } from "../../services/api";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Set default icon options
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [8, 10],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
  shadowSize: [0, 0],
});

const AllCompaniesMap = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allLocations = await fetchAllLocations();
      setLocations(allLocations);
    };
    fetchData();
  }, []);

  const heatmapData = locations.map((location) => [
    location.latitude,
    location.longitude,
    1,
  ]);

  return (
    <MapContainer
      center={[20, 0]} // Centered at an appropriate location (you can adjust this)
      zoom={2}
      className="map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <HeatmapLayer points={heatmapData} />
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
    </MapContainer>
  );
};

const HeatmapLayer = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    const heatLayer = L.heatLayer(points, {
      radius: 30,
      max: 1.0,
      blur: 5,
      gradient: {
        0.4: "blue",
        0.65: "lime",
        1: "red",
      },
    });
    map.addLayer(heatLayer);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
};

export default AllCompaniesMap;
