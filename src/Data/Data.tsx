import { dataType } from "../../typings/general";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

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

// Generate random data
const generateRandomData = () => {
  const email = "user" + getRandomInt(1, 100) + "@example.com";
  const country = countries[getRandomInt(0, countries.length - 1)];
  const city = cities[getRandomInt(0, cities.length - 1)];
  const date = getRandomDate(new Date(2023, 0, 1), new Date());
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
  const friendsInvited = getRandomInt(0, 1000);

  return { email, country, city, date, source, friendsInvited };
};

// Generate an array of random data
const numberOfDataPoints = 50000;
const Data: dataType[] = Array.from(
  { length: numberOfDataPoints },
  generateRandomData
);

export default Data;
