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

const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box className="bg-[#f6fafd] w-full m-auto flex flex-col justify-between px-4 md:px-20 py-12 rounded-xl">
          <SignUpGraph />
          <Insights />
          <Box className="w-full m-auto flex flex-col lg1:flex-row lg1:flex-wrap lg1:justify-between items-center rounded-xl">
            <Leaderboard />
            <Traffic />
            <SignUpLocation />
            <Behaviours />
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
