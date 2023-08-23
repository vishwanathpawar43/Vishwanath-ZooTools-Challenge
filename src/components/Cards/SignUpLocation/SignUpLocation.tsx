import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { getCode } from "country-list";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const SignUpLocation: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("country");

  const trafficData = [
    { country: "United States", invites: 50, city: "New York" },
    { country: "India", invites: 25, city: "Mumbai" },
    { country: "Brazil", invites: 10, city: "Chicago" },
    { country: "Germany", invites: 10, city: "San Fancisco" },
    { country: "Other", invites: 5, city: "Other" },
  ];

  const totalInvites = trafficData.reduce(
    (total, row) => total + row.invites,
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
          <h1 className="text-2xl font-[800] tracking-tight">
            SignUp Location
          </h1>
        </Box>

        <Box className="p-4">
          <Button
            variant="text"
            sx={{
              backgroundColor:
                selectedButton === "country" ? "#E8E8E8" : "white",
              borderRadius: "0.5rem",
              color: "#484848",
              marginLeft: "0.8rem",
            }}
            onClick={() => setSelectedButton("country")}
          >
            <Box>
              <p className="text-lg font-[700] normal-case tracking-tight">
                Country
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
                  totalInvites > 0 ? (row.invites / totalInvites) * 100 : 0
                }%, rgba(0, 0, 0, 0) ${
                  totalInvites > 0 ? (row.invites / totalInvites) * 100 : 0
                }%)`,
              }}
              className="mb-4 ml-4 flex justify-between rounded-lg"
            >
              <Box className="ml-4 p-2">
                <h1 className="text-xl font-[500]">
                  {selectedButton === "country" ? (
                    <p>
                      <span
                        className={`fi fi-${getCode(
                          `${
                            row.country === "United States"
                              ? "United States of America"
                              : row.country
                          }`
                        )?.toLowerCase()} mr-3`}
                      ></span>
                      {row.country}
                    </p>
                  ) : (
                    row.city
                  )}
                </h1>
              </Box>

              <Box className="mr-8 p-2">
                <h1 className="text-xl font-[500]">{row.invites}</h1>
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
            See all countries{" "}
          </p>
        </Box>
      </Button>
    </Paper>
  );
};

export default SignUpLocation;
