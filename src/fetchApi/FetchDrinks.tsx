const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const URLFILTER = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const fetchDrinks = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.drinks.slice(0, 10);
};

export const filterDrinks = async (id: string) => {
  const response = await fetch(`${URLFILTER}${id}`);
  const data = await response.json();
  return data.drinks;
};
