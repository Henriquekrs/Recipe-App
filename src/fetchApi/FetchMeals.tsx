export const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

export const fetchMeals = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals.slice(0, 10);
};