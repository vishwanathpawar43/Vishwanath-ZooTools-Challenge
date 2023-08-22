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
import Temp from "./components/temp";

const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="bg-[#F5FEFD] w-full m-auto flex flex-col justify-between px-20 py-12 rounded-xl">
          <SignUpGraph />
          <Insights />
          <Box className="w-full m-auto flex flex-wrap justify-between items-center rounded-xl">
            <Leaderboard />
            <Traffic />
            <SignUpLocation />
            <Behaviours />
          </Box>
          <Temp />
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
