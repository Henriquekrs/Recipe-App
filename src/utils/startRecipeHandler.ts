const handleStartRecipe = (id: string) => {
  const inProgressRecipes =
    JSON.parse(localStorage.getItem('inProgressRecipes') as string) || []
  if (!inProgressRecipes.includes(id)) {
    inProgressRecipes.push(id)
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes))
  }
}

export { handleStartRecipe }
