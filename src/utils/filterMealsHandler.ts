const manageFilterSelection = (
  currentFilter: string | null,
  filterToApply: string,
  setFilterCallback: (filter: string | null) => void,
  getMealsCallback: (filter: string) => void,
  getFilteredRecipeCallback: (isActive: boolean, filter: string) => void,
) => {
  if (currentFilter === filterToApply) {
    setFilterCallback(null)
    getMealsCallback('')
  } else {
    setFilterCallback(filterToApply)
    getFilteredRecipeCallback(true, filterToApply)
  }
}

export { manageFilterSelection }
