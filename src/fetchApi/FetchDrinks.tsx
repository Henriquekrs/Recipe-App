const URL_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const URL_DETAILS = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const URL_CATEGORY =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const URL_INGREDIENT =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const URL_FIRSTLETTER =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export const fetchDrinks = async (name: string) => {
  try {
    const response = await fetch(`${URL_NAME}${name}`);
    const data = await response.json();
    return data.drinks.slice(0, 10);
  } catch (error) {
    const response = await fetch(`${URL_NAME}`);
    const data = await response.json();
    return data.drinks.slice(0, 10);
  }
};

export const detailsDrinks = async (id: string) => {
  const response = await fetch(`${URL_DETAILS}${id}`);
  const data = await response.json();
  return data.drinks;
};

export const filterCategoryDrinks = async (idFilter: string) => {
  const response = await fetch(`${URL_CATEGORY}${idFilter}`);
  const data = await response.json();
  return data.drinks.slice(0, 10);
};

export const filterDrinkIngredient = async (ingredient: string) => {
  try {
    const response = await fetch(`${URL_INGREDIENT}${ingredient}`);
    const data = await response.json();
    return data.drinks.slice(0, 10);
  } catch (error) {
    return [];
  }
};

export const filterDrinkFirstLetter = async (firstLetter: string) => {
  try {
    const response = await fetch(`${URL_FIRSTLETTER}${firstLetter}`);
    const data = await response.json();
    return data.drinks.slice(0, 10);
  } catch (error) {
    return [];
  }
};
