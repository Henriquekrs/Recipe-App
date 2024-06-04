const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const URLFILTER = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

export const fetchMeals = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals.slice(0, 10);
};

export const filterMeals = async (id: string) => {
  const response = await fetch(`${URLFILTER}${id}`);
  const data = await response.json();
  return data.meals;
};
