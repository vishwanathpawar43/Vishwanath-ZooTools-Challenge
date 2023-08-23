import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";

const Leaderboard: React.FC = () => {
  const leaderboardData = [
    { email: "user1@example.com", invites: 10, country: "United States" },
    { email: "user2@example.com", invites: 25, country: "India" },
    { email: "user3@example.com", invites: 15, country: "Russia" },
    { email: "user4@example.com", invites: 8, country: "Canada" },
    { email: "user5@example.com", invites: 8, country: "France" },
  ];

  return (
    <Paper
      sx={{
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "0.5rem",
      }}
      elevation={0}
      className="w-full md0:w-[75vw] lg1:w-[41vw] lg1:h-[65vh] xl:h-auto mb-14 p-4 border-t-[0.2rem] border-opacity-30 border-gray-100 border-l-[0.4rem]"
    >
      <Box className="p-4">
        <h1 className="text-2xl font-[800] tracking-tight">User Leaderboard</h1>
      </Box>

      <Box className="mb-2 ml-4 flex rounded-lg">
        <Box className="w-1/2 p-2">
          <h1 className="text-lg font-[700]">Email</h1>
        </Box>

        <Box className="w-1/4 p-2">
          <h1 className="text-lg font-[700]">Invites</h1>
        </Box>

        <Box className="w-1/4 mr-8 p-2">
          <h1 className="text-lg font-[700]">Country</h1>
        </Box>
      </Box>
      {leaderboardData.map((row, index) => {
        if (index < 5) {
          return (
            <Box key={index} className="mb-2 ml-4 flex rounded-lg">
              <Box className="w-1/2 p-2">
                <h1 className="text-lg font-[500]">{row.email}</h1>
              </Box>

              <Box className="w-1/4 p-2">
                <h1 className="text-lg font-[500]">{row.invites}</h1>
              </Box>

              <Box className="w-1/4 mr-8 p-2">
                <h1 className="text-lg font-[500]">{row.country}</h1>
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
            See Leaderboard
          </p>
        </Box>
      </Button>
    </Paper>
  );
};

export default Leaderboard;
