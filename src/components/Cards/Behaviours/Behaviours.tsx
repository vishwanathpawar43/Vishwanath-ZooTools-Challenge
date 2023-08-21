import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const Behaviours: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("browser");

  const trafficData = [
    { browser: "United States", invites: 50, decides: "New York" },
    { browser: "India", invites: 25, decides: "Mumbai" },
    { browser: "Brazil", invites: 10, decides: "Chicago" },
    { browser: "Germany", invites: 10, decides: "San Fancisco" }, // Add more data as needed
    { browser: "Other", invites: 5, decides: "Denver" },
  ];

  const totalInvites = trafficData.reduce(
    (total, row) => total + row.invites,
    0
  );

  return (
    <Paper
      sx={{
        width: "85vmin",
        height: "60vmin",
        marginBottom: "3.5rem",
        padding: "1rem",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
        borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
        // Center the Paper on small viewport
      }}
      elevation={0}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ padding: "1rem" }}>
          Behaviours
        </Typography>

        <Box sx={{ padding: "1rem" }}>
          <Button
            variant="text"
            sx={{
              backgroundColor:
                selectedButton === "browser" ? "#E8E8E8" : "white",
              borderRadius: "0.5rem",
              color: "#808080",
              marginLeft: "0.8rem",
            }}
            onClick={() => setSelectedButton("browser")}
          >
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ textTransform: "none" }}
            >
              Browser
            </Typography>
          </Button>
          <Button
            variant="text"
            sx={{
              backgroundColor:
                selectedButton === "decides" ? "#E8E8E8" : "white",
              borderRadius: "0.5rem",
              color: "#808080",
              marginLeft: "0.8rem",
            }}
            onClick={() => setSelectedButton("decides")}
          >
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ textTransform: "none" }}
            >
              Decides
            </Typography>
          </Button>
        </Box>
      </Box>

      {trafficData.map((row, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
            marginLeft: "1rem",
            background: `linear-gradient(to right, rgba(255, 215, 0,0.3) ${
              totalInvites > 0 ? (row.invites / totalInvites) * 100 : 0
            }%, rgba(0, 0, 0, 0) ${
              totalInvites > 0 ? (row.invites / totalInvites) * 100 : 0
            }%)`,
            borderRadius: "0.5rem",
          }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{ padding: "0.5rem", marginLeft: "1rem" }}
          >
            {selectedButton === "browser" ? row.browser : row.decides}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ padding: "0.5rem", marginRight: "2rem" }}
          >
            {row.invites}
          </Typography>
        </Box>
      ))}

      <Button
        variant="text"
        sx={{
          backgroundColor: "#E8E8E8",
          borderRadius: "0.5rem",
          color: "#808080",
          marginLeft: "0.8rem",
          marginTop: "0.5rem",
          width: "10rem",
          height: "2.5rem",
        }}
      >
        <Typography
          variant="subtitle2"
          component="div"
          sx={{ textTransform: "none" }}
        >
          See all countries
        </Typography>
      </Button>
    </Paper>
  );
};

export default Behaviours;