const URL_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const URL_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const URL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const URL_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const URL_FIRSTLETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

export const fetchMeals = async (name: string) => {
  try {
    const response = await fetch(`${URL_NAME}${name}`);
    const data = await response.json();
    return data.meals.slice(0, 10);
  } catch (error) {
    const response = await fetch(`${URL_NAME}`);
    const data = await response.json();
    return data.meals.slice(0, 10);
  }
};

export const detailsMeals = async (id: string) => {
  const response = await fetch(`${URL_DETAILS}${id}`);
  const data = await response.json();
  return data.meals;
};

export const filterCategoryMeals = async (idFilter: string) => {
  const response = await fetch(`${URL_CATEGORY}${idFilter}`);
  const data = await response.json();
  return data.meals.slice(0, 10);
};

export const filterMealIngredient = async (ingredient: string) => {
  try {
    const response = await fetch(`${URL_INGREDIENT}${ingredient}`);
    const data = await response.json();
    return data.meals.slice(0, 10);
  } catch (error) {
    return [];
  }
};

export const filterMealFirstLetter = async (firstLetter: string) => {
  try {
    const response = await fetch(`${URL_FIRSTLETTER}${firstLetter}`);
    const data = await response.json();
    return data.meals.slice(0, 10);
  } catch (error) {
    return [];
  }
};
