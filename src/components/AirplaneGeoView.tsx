import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Tooltip,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import useCurrentLocation from "../hooks/useCurrentLocation"; // Custom hook to get current location
import useAirplaneData from "../hooks/useAirplaneData"; // Custom hook to get airplane data
import { CircularProgress, Typography } from "@mui/material";

// Creating acustom icon for airplanes markers
const customIcon = new Icon({
  iconUrl: "/fly.png",
  iconSize: [38, 38], // size of the icon
});

const AirplaneGeoView = () => {
  // Getting the current position from the custom hook
  const position = useCurrentLocation();
  const { data: airplaneData, loading, error } = useAirplaneData();

  if (loading) {
    return (
      <div className="map-container">
        <CircularProgress size={50} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="map-container">
        <Typography variant="h6" color="error">
          Error loading airplane position data
        </Typography>
      </div>
    );
  }
  if (!airplaneData) {
    return (
      <Typography variant="h6" color="error">
        No airplane position data found
      </Typography>
    );
  }

  return (
    <MapContainer center={position} zoom={7} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <UpdateMapCenter position={position} />
      {airplaneData.map((airplaneItem) => (
        <Marker
          key={airplaneItem.id}
          position={[airplaneItem.position.lat, airplaneItem.position.long]}
          icon={customIcon}
        >
          <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
            {airplaneItem.id}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

// Component to update the map center position
// TODO: Consider splitting this into a seperate file
const UpdateMapCenter: React.FC<{ position: [number, number] }> = ({
  position,
}) => {
  const map = useMap(); // Accessing the map instance

  useEffect(() => {
    map.setView(position); // Updating the map center when position changes
  }, [position, map]);
  return null;
};

export default AirplaneGeoView;
