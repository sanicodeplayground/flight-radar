import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AirplaneTableBody from "./AirplaneTableBody";

const AirplaneDataTable = () => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table
        sx={{ minWidth: 650, tableLayout: "fixed" }}
        aria-label="airplane data table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Speed</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Latitude</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Longitude</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Altitude</TableCell>
          </TableRow>
        </TableHead>

        <AirplaneTableBody />
      </Table>
    </TableContainer>
  );
};

export default AirplaneDataTable;
