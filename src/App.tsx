import React, { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Insights from "./components/Insights/Insights";
import SignUpGraph from "./components/SignUpGraph/SignUpGraph";
import Leaderboard from "./components/Cards/LeaderBoard/LeaderBoard";
import Traffic from "./components/Cards/Traffic/Traffic";
import SignUpLocation from "./components/Cards/SignUpLocation/SignUpLocation";
import Behaviours from "./components/Cards/Behaviours/Behaviours";
// import Data from "./Data/Data";

const App: React.FC = () => {
//   console.log(Data);
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            // bgcolor: "#F0F8FF",//alice blue
            bgcolor: "#F5FEFD", // snow
            width: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingX: "5rem",
            paddingY: "3rem",
            borderRadius: "0.75rem",
          }}
        >
          {/* SignUpgraph */}
          <SignUpGraph />

          {/* Insights */}
          <Insights />

          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "0.75rem",
            }}
          >
            {/* LeaderBoard */}
            <Leaderboard />

            {/* Traffic */}
            <Traffic />

            {/* SignUp Loacation */}
            <SignUpLocation />

            {/* Behaviours */}
            <Behaviours />

            {/* <Paper
              sx={{
                width: "85vmin",
                height: "50vmin",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
                borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
                borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
              }}
              elevation={0}
            >
              <h1>5</h1>
            </Paper>

            <Paper
              sx={{
                width: "85vmin",
                height: "50vmin",

                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
                borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
                borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
              }}
              elevation={0}
            >
              <h1>6</h1>
            </Paper> */}
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
