import { useEffect, useState } from "react";

// Default center on map
const defaultCenter: [number, number] = [51, -0.09];

const useCurrentLocation = () => {
  const [position, setPosition] = useState<[number, number]>(defaultCenter);

  useEffect(() => {
    const successCallback = (pos: GeolocationPosition) => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    };

    const errorCallback = () => {
      console.error("Geolocation error, using default position");
      setPosition(defaultCenter);
    };

    // Get the user's current position
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return position;
};

export default useCurrentLocation;
