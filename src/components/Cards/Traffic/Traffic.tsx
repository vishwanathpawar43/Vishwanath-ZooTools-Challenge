import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";

const Traffic: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("sources");

  const trafficData = [
    { source: "Google", entries: 50, city: "New York" },
    { source: "Twitter", entries: 25, city: "Mumbai" },
    { source: "Facebook", entries: 10, city: "Chicago" },
    { source: "LinkedIn", entries: 10, city: "San Fancisco" },
    { source: "Other", entries: 5, city: "Other" },
  ];

  const totalEntries = trafficData.reduce(
    (total, row) => total + row.entries,
    0
  );

  return (
    <Paper
      sx={{
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "0.5rem",
      }}
      elevation={0}
      className="w-full md0:w-[75vw] lg1:w-[41vw] lg1:h-[65vh] xl:h-auto mb-14 p-4 border-t-[0.2rem] border-opacity-30 border-gray-100 border-l-[0.4rem]"
    >
      <Box className="flex justify-between">
        <Box className="p-4">
          <h1 className="text-2xl font-[800] tracking-tight">Traffic</h1>
        </Box>

        <Box className="p-4">
          <Button
            variant="text"
            sx={{
              backgroundColor:
                selectedButton === "sources" ? "#E8E8E8" : "white",
              borderRadius: "0.5rem",
              color: "#484848",
              marginLeft: "0.8rem",
            }}
            onClick={() => setSelectedButton("sources")}
          >
            <Box>
              <p className="text-lg font-[700] normal-case tracking-tight">
                Sources
              </p>
            </Box>
          </Button>

          <Button
            variant="text"
            sx={{
              backgroundColor: selectedButton === "city" ? "#E8E8E8" : "white",
              borderRadius: "0.5rem",
              color: "#484848",
              marginLeft: "0.8rem",
            }}
            onClick={() => setSelectedButton("city")}
          >
            <Box>
              <p className="text-lg font-[700] normal-case tracking-tight">
                City
              </p>
            </Box>
          </Button>
        </Box>
      </Box>

      {trafficData.map((row, index) => {
        if (index < 5) {
          return (
            <Box
              key={index}
              sx={{
                background: `linear-gradient(to right, rgba(255, 215, 0,0.25) ${
                  totalEntries > 0 ? (row.entries / totalEntries) * 100 : 0
                }%, rgba(0, 0, 0, 0) ${
                  totalEntries > 0 ? (row.entries / totalEntries) * 100 : 0
                }%)`,
              }}
              className="mb-4 ml-4 flex justify-between rounded-lg"
            >
              <Box className="ml-4 p-2">
                <h1 className="text-xl font-[500]">
                  {selectedButton === "sources" ? row.source : row.city}
                </h1>
              </Box>

              <Box className="mr-8 p-2">
                <h1 className="text-xl font-[500]">{row.entries}</h1>
              </Box>
            </Box>
          );
        }
      })}

      <Button
        variant="text"
        sx={{
          backgroundColor: "#E8E8E8",
          borderRadius: "0.5rem",
          color: "#484848",
          marginLeft: "0.8rem",
          marginTop: "0.5rem",
          marginBottom: "1rem",
          width: "10rem",
          height: "2.5rem",
        }}
      >
        <Box>
          <p className="text-base font-[700] normal-case tracking-tight">
            See traffic sources
          </p>
        </Box>
      </Button>
    </Paper>
  );
};

export default Traffic;
