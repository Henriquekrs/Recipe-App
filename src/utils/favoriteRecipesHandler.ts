const handleSaveFavoriteRecipes = (
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
  const favoriteRecipes =
    JSON.parse(localStorage.getItem('favoriteRecipes') as string) || []
  const idExists = favoriteRecipes.some(
    (recipe: { id: string }) => recipe.id === id,
  )

  let updatedRecipes

  if (idExists) {
    updatedRecipes = favoriteRecipes.filter(
      (recipe: { id: string }) => recipe.id !== id,
    )
  } else {
    const newRecipe = {
      id,
      type: isMealRoute ? 'meals' : 'drinks',
      category: filteredRecipe.strCategory,
      name: isMealRoute ? filteredRecipe.strMeal : filteredRecipe.strDrink,
      image: isMealRoute
        ? filteredRecipe.strMealThumb
        : filteredRecipe.strDrinkThumb,
    }
    updatedRecipes = [...favoriteRecipes, newRecipe]
  }

  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedRecipes))
}

export { handleSaveFavoriteRecipes }
