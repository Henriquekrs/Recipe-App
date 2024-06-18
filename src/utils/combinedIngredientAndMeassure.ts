import { recipeIngredientType } from '@/types/filtersType';

const getCombinedIngredients = (recipe: recipeIngredientType) => {
  const ingredients: string[] = [];

  Object.keys(recipe).forEach((key) => {
    if (key.startsWith('strIngredient') && recipe[key]) {
      const index = key.slice(13);
      const ingredient = recipe[key];
      const measure = recipe[`strMeasure${index}`];
      if (measure && measure.trim() !== '') {
        ingredients.push(`${measure} ${ingredient}`);
      } else {
        ingredients.push(ingredient);
      }
    }
  });

  return ingredients;
};

export default getCombinedIngredients;
