import React, { Fragment } from "react";
import { Box, Paper } from "@mantine/core";
import Data from "../Data/Data";

function formatGroupedDataNDays(groupedData: number[], n: number) {
  const currentDate = new Date();
  const formattedData = [];

  for (let daysAgo = 1; daysAgo <= n; daysAgo++) {
    const entryDate = new Date(currentDate.getTime() - daysAgo * 24 * 3600000);
    const startOfDay = new Date(
      entryDate.getFullYear(),
      entryDate.getMonth(),
      entryDate.getDate()
    );
    // const endOfDay = new Date(startOfDay.getTime() + 24 * 3600000);

    const entriesForDay = groupedData.slice(daysAgo - 1, daysAgo)[0] || 0;

    const formattedDate = `${startOfDay.toLocaleString("default", {
      month: "short",
    })} ${startOfDay.getDate()}`;
    formattedData.push({
      Date: formattedDate,
      entries: entriesForDay,
    });
  }

  return formattedData.reverse();
}

function formatGroupedData24h(groupedData: number[]) {
  const currentTime = new Date();
  const formattedData = [];

  for (let hoursAgo = 0; hoursAgo < 24; hoursAgo++) {
    const startHour = (currentTime.getHours() - hoursAgo + 24) % 24; // 0 to 23
    const endHour = (startHour + 1) % 24;

    const entriesForHour = groupedData.slice(hoursAgo, hoursAgo + 1)[0] || 0;

    const formattedTime = `${startHour === 12 ? 12 : startHour % 12} ${
      startHour >= 12 ? "pm" : "am"
    } - ${endHour === 12 ? 12 : endHour % 12} ${endHour >= 12 ? "pm" : "am"}`;

    formattedData.push({ Time: formattedTime, entries: entriesForHour });
  }

  return formattedData.reverse();
}

// function formatGroupedDataNHrs(groupedData: number[], n: number) {
//   const currentTime = new Date();
//   const formattedData = [];

//   for (let hoursAgo = 1; hoursAgo <= n; hoursAgo++) {
//     const startHour = (currentTime.getHours() - hoursAgo + 24) % 24; // 0 to 23
//     const endHour = (startHour + 1) % 24;

//     const entriesForHour = groupedData.slice(hoursAgo, hoursAgo)[0] || 0;

//     const formattedTime = `${startHour === 12 ? 12 : startHour % 12} ${
//       startHour >= 12 ? "pm" : "am"
//     } - ${endHour === 12 ? 12 : endHour % 12} ${endHour >= 12 ? "pm" : "am"}`;

//     formattedData.push({ Time: formattedTime, entries: entriesForHour });
//   }

//   return formattedData.reverse();
// }

function handleButtonClick(selectedPeriod: string) {
  const currentTime = new Date();
  currentTime.setMinutes(0);
  currentTime.setSeconds(0);

  const timeLimit = selectedPeriod === "24h" ? 24 : 30; // 24 hours or 30 days
  const timeInMillis = selectedPeriod === "24h" ? 3600000 : 24 * 3600000; // 1 hour or 1 day in milliseconds

  const groupedData = new Array(timeLimit).fill(0);

  console.log(currentTime);
  console.log("");
  Data.forEach((entry) => {
    const entryTime = new Date(entry.date);
    entryTime.setMinutes(0);
    entryTime.setSeconds(0);

    const hoursAgo = Math.floor(
      (currentTime.getTime() - entryTime.getTime()) / timeInMillis
    );
    console.log(
      currentTime.getTime(),
      entryTime.getTime(),
      currentTime.getTime() - entryTime.getTime()
    );
    console.log(entryTime, hoursAgo);

    if (hoursAgo < timeLimit) {
      groupedData[hoursAgo]++;
    }
  });

  console.log(groupedData);

  const formattedData24h = formatGroupedData24h(groupedData);

  console.log(formattedData24h);
}

// function handleButtonClick(selectedPeriod: string) {
//   const currentTime = new Date();
//   const timeLimit = selectedPeriod === "24h" ? 24 : 30; // 24 hours or 30 days
//   const timeInMillis = selectedPeriod === "24h" ? 3600000 : 24 * 3600000; // 1 hour or 1 day in milliseconds

//   const groupedData = new Array(timeLimit).fill(0);

//   Data.forEach((entry) => {
//     const entryTime = new Date(entry.date);
//     const hoursAgo = Math.floor(
//       (currentTime.getTime() - entryTime.getTime()) / timeInMillis
//     );
//     if (hoursAgo < timeLimit) {
//       groupedData[hoursAgo]++;
//     }
//   });

//   console.log(groupedData);
//   //   const formattedData24h = formatGroupedDataNHrs(groupedData, 24);
//   const formattedData24h = formatGroupedData24h(groupedData);

//   console.log(formattedData24h);

//   //   const formattedData = formatGroupedDataNDays(groupedData, 30);
//   //   console.log(formattedData);
// }

const Temp: React.FC = () => {
  handleButtonClick("24h");
  return (
    <Fragment>
      <Box className="w-full m-auto flex flex-wrap justify-between align-middle bg-slate-400">
        <Paper className="w-2/5 h-60 p-4 mb-12 bg-black"></Paper>
        <Paper className="w-2/5 h-60 p-4 mb-12 bg-black"></Paper>
        <Paper className="w-2/5 h-60 p-4 mb-12 bg-black"></Paper>
        <Paper className="w-2/5 h-60 p-4 mb-12 bg-black"></Paper>
      </Box>
    </Fragment>
  );
};

export default Temp;
