type data = {
  email: string;
  country: string;
  city: string;
  date: Date;
  traffic: string;
  friendsInvited: number;
};

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
  "USA",
  "Canada",
  "UK",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Japan",
  "China",
  "India",
  "Brazil",
  "South Korea",
  "Russia",
  "Mexico",
  "Spain",
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
  "Seoul",
  "Moscow",
  "Mexico City",
  "Madrid",
];

// ... rest of the code remains the same

// Generate random data
const generateRandomData = () => {
  const email = "user" + getRandomInt(1, 100) + "@example.com";
  const country = countries[getRandomInt(0, countries.length - 1)];
  const city = cities[getRandomInt(0, cities.length - 1)];
  const date = getRandomDate(new Date(2023, 8, 1), new Date());
  const traffic = [
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

  return { email, country, city, date, traffic, friendsInvited };
};

// Generate an array of random data
const numberOfDataPoints = 10;
const randomDataArray: data[] = Array.from(
  { length: numberOfDataPoints },
  generateRandomData
);

console.log(randomDataArray);

export default randomDataArray;
