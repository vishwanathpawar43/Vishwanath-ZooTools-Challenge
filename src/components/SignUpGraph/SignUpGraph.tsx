import React, { Fragment, useEffect, useState } from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import Data from "../../Data/Data";
import BarGraph from "./BarGraph";

interface FormattedDataItem {
  name: string;
  value: number;
}

// format data

const formatGroupedData = (
  groupedData: number[],
  limit: number,
  unit: string
) => {
  const current = new Date();
  const formattedData = [];
  let formattedDateTime;

  for (let timeAgo = 0; timeAgo < limit; timeAgo++) {
    if (unit === "d") {
      const entryDate = new Date(current.getTime() - timeAgo * 24 * 3600000);
      const startOfDay = new Date(
        entryDate.getFullYear(),
        entryDate.getMonth(),
        entryDate.getDate()
      );
      formattedDateTime = `${startOfDay.toLocaleString("default", {
        month: "long",
      })} ${startOfDay.getDate()}`;
    } else {
      const startHour = (current.getHours() - timeAgo + 24) % 24;
      const endHour = (startHour + 1) % 24;
      formattedDateTime = `${startHour === 12 ? 12 : startHour % 12} ${
        startHour >= 12 ? "pm" : "am"
      } - ${endHour === 12 ? 12 : endHour % 12} ${endHour >= 12 ? "pm" : "am"}`;
    }
    const entries = groupedData.slice(timeAgo, timeAgo + 1)[0] || 0;

    formattedData.push({
      name: formattedDateTime,
      value: entries,
    });
  }

  return formattedData.reverse();
};

const SignUpGraph: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [formattedData, setFormattedData] = useState<FormattedDataItem[]>([]);

  // handle button click

  const handleClick = (value: number, unit: string) => {
    const currentTime = new Date();
    currentTime.setMinutes(0);
    currentTime.setSeconds(0);

    const timeLimit = value;
    const timeInMillis = unit === "h" ? 3600000 : 24 * 3600000;

    const groupedData = new Array(timeLimit).fill(0);

    for (let timeAgo = 0; timeAgo < timeLimit; timeAgo++) {
      const timeStart = new Date(
        currentTime.getTime() - timeAgo * timeInMillis
      );

      const entriesForHour = Data.reduce((totalEntries, entry) => {
        const entryTime = new Date(entry.date);

        if (
          unit === "h" &&
          entryTime.getHours() === timeStart.getHours() &&
          entryTime.getDate() === timeStart.getDate()
        ) {
          return totalEntries + 1;
        }
        if (
          unit === "d" &&
          entryTime.getDate() === timeStart.getDate() &&
          entryTime.getMonth() === timeStart.getMonth()
        ) {
          return totalEntries + 1;
        }
        return totalEntries;
      }, 0);
      groupedData[timeAgo] = entriesForHour;
    }
    const formattedData = formatGroupedData(groupedData, value, unit);
    setFormattedData(formattedData);
    setSelectedPeriod(`${value}${unit}`);
  };

  useEffect(() => {
    handleClick(30, "d");
  }, []);

  return (
    <Fragment>
      <Box className="flex flex-col items-center md:flex-row md:justify-between mb-12">
        <Box className="pt-2">
          <h1 className="text-4xl  md:text-3xl font-[800] tracking-tight mb-12 md:mb-0">
            Summer referral competition
          </h1>
        </Box>

        <Paper
          sx={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
          }}
          className="flex items-center py-[0.2rem] px-[0.3rem] rounded-lg border-r-[0.4rem] border-t-[0.2rem] border-opacity-30 border-gray-100 border-l-[0.4rem]"
          elevation={0}
        >
          <Stack spacing={1} direction="row" className="my-[0.2rem]">
            <Button
              variant="text"
              size="small"
              sx={{
                backgroundColor:
                  selectedPeriod === "1h" ? "#D3D3D3" : "#F8F8FF",
                borderRadius: "0.75rem",
                marginLeft: "2rem",
                color: "#696969",
                "&:hover": {
                  backgroundColor: "#E8E8E8",
                },
                "&:focus": {
                  backgroundColor: "#D3D3D3",
                },
              }}
              onClick={() => handleClick(1, "h")}
            >
              <Box>
                <p className="text-lg font-[700] normal-case">1h</p>
              </Box>
            </Button>

            <Button
              variant="text"
              size="small"
              sx={{
                backgroundColor:
                  selectedPeriod === "24h" ? "#D3D3D3" : "#F8F8FF",
                borderRadius: "0.75rem",
                color: "#696969",
                "&:hover": {
                  backgroundColor: "#E8E8E8",
                },
                "&:focus": {
                  backgroundColor: "#D3D3D3",
                },
              }}
              onClick={() => handleClick(24, "h")}
            >
              <Box>
                <p className="text-lg font-[700] normal-case">24h</p>
              </Box>
            </Button>

            <Button
              variant="text"
              size="small"
              sx={{
                backgroundColor:
                  selectedPeriod === "30d" ? "#D3D3D3" : "#F8F8FF",
                borderRadius: "0.75rem",
                color: "#696969",
                "&:hover": {
                  backgroundColor: "#E8E8E8",
                },
                "&:focus": {
                  backgroundColor: "#D3D3D3",
                },
              }}
              onClick={() => handleClick(30, "d")}
            >
              <Box>
                <p className="text-lg font-[700] normal-case">30d</p>
              </Box>
            </Button>

            <Button
              variant="text"
              size="small"
              sx={{
                backgroundColor:
                  selectedPeriod === "60d" ? "#D3D3D3" : "#F8F8FF",
                borderRadius: "0.75rem",
                color: "#696969",
                "&:hover": {
                  backgroundColor: "#E8E8E8",
                },
                "&:focus": {
                  backgroundColor: "#D3D3D3",
                },
              }}
              onClick={() => handleClick(60, "d")}
            >
              <Box>
                <p className="text-lg font-[700] normal-case ">60d</p>
              </Box>
            </Button>
          </Stack>
        </Paper>
      </Box>

      <BarGraph data={formattedData} />
    </Fragment>
  );
};

export default SignUpGraph;
