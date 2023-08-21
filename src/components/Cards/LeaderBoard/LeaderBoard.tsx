import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Leaderboard: React.FC = () => {
  const leaderboardData = [
    { email: "user1@example.com", invites: 10, country: "United States" },
    { email: "user2@example.com", invites: 25, country: "India" },
    { email: "user3@example.com", invites: 15, country: "United Kingdom" },
    { email: "user4@example.com", invites: 8, country: "Canada" }, // Add more data as needed
  ];

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
      <Typography variant="h6" component="div" sx={{ padding: "1rem" }}>
        User Leaderboard
      </Typography>
      <TableContainer>
        {/* <Table> */}
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Email ID</TableCell>
              <TableCell>Invites</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboardData.map((row, index) => {
              if (index < 4)
                return (
                  <TableRow key={index}>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.invites}</TableCell>
                    <TableCell>{row.country}</TableCell>
                  </TableRow>
                );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="text"
        sx={{
          backgroundColor: "#E8E8E8",
          borderRadius: "0.5rem",
          color: "#808080",
          marginLeft: "0.8rem",
          marginTop: "1.5rem",
          width: "10rem",
          height: "2.5rem",
        }}
      >
        <Typography
          variant="subtitle2"
          component="div"
          sx={{ textTransform: "none" }}
        >
          See Leaderboard
        </Typography>
      </Button>
    </Paper>
  );
};

export default Leaderboard;
