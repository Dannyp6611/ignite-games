// BASE URL
const BASE_URL = 'https://api.rawg.io/api/';

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

// Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// POPULAR GAMES
const POPULAR_GAMES = `${BASE_URL}games?key=6c43fc88973f4b849651b839ee4e11e9&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export { POPULAR_GAMES };
