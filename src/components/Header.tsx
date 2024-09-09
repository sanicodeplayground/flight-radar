import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Header = () => {
  const currentDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // console.log("Header component re-render");

  return (
    <Paper component="header" elevation={1} className="header">
      <img
        src="./air-radar.webp"
        alt="air radar logo"
        // style={{ height: "40px" }}
        className="logo"
      />
      <Typography variant="body1" className="date">
        {currentDate}
      </Typography>
    </Paper>
  );
};

export default Header;
