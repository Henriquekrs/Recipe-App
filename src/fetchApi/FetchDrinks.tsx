export const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const fetchDrinks = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.drinks.slice(0, 10);
};
