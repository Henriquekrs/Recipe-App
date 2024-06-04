const URLNAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const URLDETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const URLCATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const URLINGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
const URLFIRSTLETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f='

export const fetchMeals = async (name: string) => {
  try {
    const response = await fetch(`${URLNAME}${name}`);
    const data = await response.json();
    return data.meals.slice(0, 10);
  } catch (error) {
      const response = await fetch(`${URLNAME}`);
      const data = await response.json();
      return data.meals.slice(0, 10);
  }
};

export const detailsMeals = async (id: string) => {
  const response = await fetch(`${URLDETAILS}${id}`);
  const data = await response.json();
  return data.meals;
};

export const filterCategoryMeals = async (idFilter: string) => {
  const response = await fetch(`${URLCATEGORY}${idFilter}`);
  const data = await response.json();
  return data.meals.slice(0, 10);
};

export const filterMealIngredient = async (ingredient: string) => {
  try {
    const response = await fetch(`${URLINGREDIENT}${ingredient}`);
    const data = await response.json();
    return data.meals.slice(0, 10);
  } catch (error) {
    return []
  }
};

export const filterMealFirstLetter = async (firstLetter: string) => {
  try {
    const response = await fetch(`${URLFIRSTLETTER}${firstLetter}`);
    const data = await response.json();
    return data.meals.slice(0, 10);
  } catch (error) {
    return []
  }
};
