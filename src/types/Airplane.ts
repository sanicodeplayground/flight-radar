export interface Airplane {
  id: string;
  speed: number;
  position: {
    lat: number;
    long: number;
    altitude: number;
  };
}
