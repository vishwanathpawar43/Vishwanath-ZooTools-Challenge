import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const Traffic: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("sources");

  const trafficData = [
    { source: "Google", entries: 50, city: "New York" },
    { source: "Twitter", entries: 25, city: "Mumbai" },
    { source: "Facebook", entries: 10, city: "Chicago" },
    { source: "LinkedIn", entries: 10, city: "San Fancisco" },
    { source: "Other", entries: 5, city: "Denver" },
  ];

  const totalEntries = trafficData.reduce(
    (total, row) => total + row.entries,
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
          Traffic
        </Typography>

        <Box sx={{ padding: "1rem" }}>
          <Button
            variant="text"
            sx={{
              backgroundColor:
                selectedButton === "sources" ? "#E8E8E8" : "white",
              borderRadius: "0.5rem",
              color: "#808080",
              marginLeft: "0.8rem",
            }}
            onClick={() => setSelectedButton("sources")}
          >
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ textTransform: "none" }}
            >
              Sources
            </Typography>
          </Button>
          <Button
            variant="text"
            sx={{
              backgroundColor: selectedButton === "city" ? "#E8E8E8" : "white",
              borderRadius: "0.5rem",
              color: "#808080",
              marginLeft: "0.8rem",
            }}
            onClick={() => setSelectedButton("city")}
          >
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ textTransform: "none" }}
            >
              City
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
            // bgcolor: "blue",
            marginBottom: "1rem",
            marginLeft: "1rem",
            background: `linear-gradient(to right, rgba(255, 215, 0,0.3) ${
              totalEntries > 0 ? (row.entries / totalEntries) * 100 : 0
            }%, rgba(0, 0, 0, 0) ${
              totalEntries > 0 ? (row.entries / totalEntries) * 100 : 0
            }%)`,
            borderRadius: "0.5rem",
          }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{ padding: "0.5rem", marginLeft: "1rem" }}
          >
            {selectedButton === "sources" ? row.source : row.city}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ padding: "0.5rem", marginRight: "2rem" }}
          >
            {row.entries}
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
          See traffic sources
        </Typography>
      </Button>
    </Paper>
  );
};

export default Traffic;
