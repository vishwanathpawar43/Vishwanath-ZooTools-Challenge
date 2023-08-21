import React, { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Insights from "./components/Insights/Insights";
import SignUpGraph from "./components/SignUpGraph/SignUpGraph";

const App: React.FC = () => {
  //   console.log(data);
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#F0F8FF",
            width: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "5rem",
            borderRadius: "0.75rem",
          }}
        >
          {/* SignUpgraph */}
          <SignUpGraph />
          {/* <Paper
            sx={{
              width: "100%",
              height: "40vh",
              marginBottom: "3rem",
              boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
              borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
              borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
            }}
            elevation={0}
          >
            <h1>1</h1>
          </Paper> */}

          {/* Insights */}
          <Insights />

          <Box
            sx={{
              //   bgcolor: "black",
              width: "100%",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              //   justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.75rem",
            }}
          >
            <Paper
              sx={{
                width: "85vmin",
                height: "50vmin",
                marginBottom: "3.5rem",

                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
                borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
                borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
                // Center the Paper on small viewport
              }}
              elevation={0}
            >
              <h1>3</h1>
            </Paper>

            <Paper
              sx={{
                width: "85vmin",
                height: "50vmin",
                marginBottom: "3.5rem",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
                borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
                borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
              }}
              elevation={0}
            >
              <h1>4</h1>
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
            </Paper>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
