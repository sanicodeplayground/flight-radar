import {
  TableCell,
  TableRow,
  TableBody,
  CircularProgress,
} from "@mui/material";
import useAirplaneData from "../hooks/useAirplaneData";

const AirplaneTableBody = () => {
  const { data: airplaneData, loading, error } = useAirplaneData();

  if (loading) {
    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={5}
            style={{ textAlign: "center", height: "100px" }}
          >
            <CircularProgress />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  if (error) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={5}>
            Hold on, we're having a problem: {error}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {airplaneData.map((row) => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell>{row.speed.toFixed(2)}</TableCell>
          <TableCell>{row.position.lat.toFixed(4)}</TableCell>
          <TableCell>{row.position.long.toFixed(4)}</TableCell>
          <TableCell>{row.position.altitude.toFixed(0)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default AirplaneTableBody;
