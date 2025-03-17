
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

// Custom container styling (similar to the provided error image)
const containerStyle = {
  width: "100%",
  height: "400px", // Adjust as needed
  // Light grey background similar to the error image
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  
};

// Default location (San Francisco, USA)
const position = [37.7749, -122.4194];

const LocationMap = () => {
  return (
    <div className="container mt-4">
      <div className="p-3" style={containerStyle}>
        <MapContainer center={position} zoom={12} style={{ height: "100%", width: "100%" }}>
          {/* OpenStreetMap Tile Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker on the selected location */}
          <Marker position={position}>
            <Popup>San Francisco, CA</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationMap;
