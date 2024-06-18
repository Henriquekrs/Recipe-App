const handleSaveDoneRecipes = (
  id: string,
  isMealRoute: boolean,
  filteredRecipe: {
    strCategory: string
    strMeal?: string
    strDrink?: string
    strMealThumb?: string
    strDrinkThumb?: string
  },
) => {
  const doneRecipes =
    JSON.parse(localStorage.getItem('doneRecipes') as string) || []

  const idExists = doneRecipes.some(
    (recipe: { id: string }) => recipe.id === id,
  )

  if (!idExists) {
    const newRecipe = {
      id,
      type: isMealRoute ? 'meals' : 'drinks',
      category: filteredRecipe.strCategory,
      name: isMealRoute ? filteredRecipe.strMeal : filteredRecipe.strDrink,
      image: isMealRoute
        ? filteredRecipe.strMealThumb
        : filteredRecipe.strDrinkThumb,
    }
    localStorage.setItem(
      'doneRecipes',
      JSON.stringify([...doneRecipes, newRecipe]),
    )
  }
}

export { handleSaveDoneRecipes }
