const URLNAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const URLDETAILS = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const URLCATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='
const URLINGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const URLFIRSTLETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='

export const fetchDrinks = async (name: string) => {
  try {
    const response = await fetch(`${URLNAME}${name}`);
    const data = await response.json();
    return data.drinks.slice(0, 10);
  } catch (error) {
      const response = await fetch(`${URLNAME}`);
      const data = await response.json();
      return data.drinks.slice(0, 10);
  }
};

export const detailsDrinks = async (id: string) => {
  const response = await fetch(`${URLDETAILS}${id}`);
  const data = await response.json();
  return data.drinks;
};

export const filterCategoryDrinks = async (idFilter: string) => {
  const response = await fetch(`${URLCATEGORY}${idFilter}`);
  const data = await response.json();
  return data.drinks.slice(0, 10);
}

export const filterDrinkIngredient = async (ingredient: string) => {
  try {
    const response = await fetch(`${URLINGREDIENT}${ingredient}`);
    const data = await response.json();
    return data.drinks.slice(0, 10);
  } catch (error) {
    return []
  }
};

export const filterDrinkFirstLetter = async (firstLetter: string) => {
  try {
    const response = await fetch(`${URLFIRSTLETTER}${firstLetter}`);
    const data = await response.json();
    return data.drinks.slice(0, 10);
  } catch (error) {
    return []
  }
};