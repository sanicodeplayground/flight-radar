import { useState, useEffect, useCallback } from "react";
import { Airplane } from "../types/Airplane";

const useAirplaneData = () => {
  const [data, setData] = useState<Airplane[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);

  const generateMockData = useCallback(() => {
    return Array.from({ length: 3 }, (_, id) => ({
      id: `airplane-${id + 1}`,
      speed: Math.random() * 600,
      position: {
        lat: 51.4545 + (Math.random() - 0.5) * 0.2,
        long: -2.5879 + (Math.random() - 0.5) * 0.2,
        altitude: Math.random() * 40000,
      },
    }));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newMockData = generateMockData();
      setData(newMockData);
      setLoading(false);
    }, 1000);

    setData(generateMockData());

    return () => clearInterval(intervalId);
  }, [generateMockData]);

  // Randomly simulate an error
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //
  //     if (Math.random() < 0.2) {
  //       setError("Simulated error occurred");
  //       setLoading(false);
  //     } else {
  //       const newMockData = generateMockData();
  //       setData(newMockData);
  //       setLoading(false);
  //       setError(null);
  //     }
  //   }, 1000);

  //   setData(generateMockData());
  //   setLoading(false);

  //   return () => clearInterval(intervalId);
  // }, [generateMockData]);

  return { data, loading, error };
};

export default useAirplaneData;
