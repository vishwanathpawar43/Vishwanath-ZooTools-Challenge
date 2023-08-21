import { dataType } from "../../typings/general";

// Generate a random integer between min and max (inclusive)
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random date within a range of days
function getRandomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Array of possible countries and cities
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Japan",
  "China",
  "India",
  "Brazil",
];

const cities = [
  "New York",
  "Toronto",
  "London",
  "Sydney",
  "Berlin",
  "Paris",
  "Rome",
  "Tokyo",
  "Beijing",
  "Mumbai",
  "Rio de Janeiro",
];

// ... rest of the code remains the same

// Generate random data
const generateRandomData = () => {
  const email = "user" + getRandomInt(1, 100) + "@example.com";
  const country = countries[getRandomInt(0, countries.length - 1)];
  const city = cities[getRandomInt(0, cities.length - 1)];
  const date = getRandomDate(new Date(2023, 8, 1), new Date());
  const source = [
    "Google",
    "Twitter",
    "Facebook",
    "LinkedIn",
    "Youtube",
    "Snapchat",
    "Whatsapp",
    "Telegram",
  ][getRandomInt(0, 7)];
  const friendsInvited = getRandomInt(0, 50);

  return { email, country, city, date, source, friendsInvited };
};

// Generate an array of random data
const numberOfDataPoints = 100;
const Data: dataType[] = Array.from(
  { length: numberOfDataPoints },
  generateRandomData
);

export default Data;


// interface sourceEntry {
//   [source: string]: number;
// }

// interface ResultEntry {
//   source: string;
//   entries: number;
// }

// const getSourceTraffic = (data: dataType[]): ResultEntry[] => {
//   const sourceData: sourceEntry = {};

//   data.forEach((item) => {
//     if (sourceData[item.source]) {
//       sourceData[item.source]++;
//     } else {
//       sourceData[item.source] = 1;
//     }
//   });

//   const result = Object.keys(sourceData).map((source) => ({
//     source,
//     entries: sourceData[source],
//   }));

//   result.sort((a, b) => b.entries - a.entries);

//   const topEntries = result.slice(0, 4);
//   const remainingEntries = result.slice(4);

//   let finalResult = topEntries;
//   if (remainingEntries.length > 0) {
//     const sumOfRemaining = remainingEntries.reduce(
//       (sum, entry) => sum + entry.entries,
//       0
//     );
//     finalResult = [
//       ...topEntries,
//       { source: "Others", entries: sumOfRemaining },
//     ];
//   }

//   return finalResult;
// };
