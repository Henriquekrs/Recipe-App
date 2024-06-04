const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const URLDETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const URLFILTER = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

export const fetchMeals = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals.slice(0, 10);
};

export const detailsMeals = async (id: string) => {
  const response = await fetch(`${URLDETAILS}${id}`);
  const data = await response.json();
  return data.meals;
};

export const filterMeals = async (idFilter: string) => {
  const response = await fetch(`${URLFILTER}${idFilter}`);
  const data = await response.json();
  return data.meals.slice(0, 10);
};
