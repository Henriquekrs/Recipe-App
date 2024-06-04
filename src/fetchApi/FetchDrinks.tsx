const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const URLDETAILS = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const URLFILTER = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='

export const fetchDrinks = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.drinks.slice(0, 10);
};

export const detailsDrinks = async (id: string) => {
  const response = await fetch(`${URLDETAILS}${id}`);
  const data = await response.json();
  return data.drinks;
};

export const filterDrinks = async (idFilter: string) => {
  const response = await fetch(`${URLFILTER}${idFilter}`);
  const data = await response.json();
  return data.drinks.slice(0, 10);
}
