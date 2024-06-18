export type RecipeInProgress = {
  id: string;
  ingredients: string[];
};

export function loadSavedProgress(id: string, ingredients: string[]) {
  const savedProgress = JSON.parse(
    localStorage.getItem('ingredientsInProgress') || '[]',
  );
  const recipeInProgress: RecipeInProgress = savedProgress.find(
    (recipe: RecipeInProgress) => recipe.id === id,
  );
  if (recipeInProgress) {
    return recipeInProgress.ingredients.map((ingredient) =>
      ingredients.includes(ingredient),
    );
  }
  return new Array(ingredients.length).fill(false);
}
