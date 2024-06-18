const createHandleClickFilter = (
  activeFilter: string | null,
  setActiveFilter: (value: string | null) => void,
  getDrinks: (value: string) => void,
  getFilteredRecipe: (value: boolean, e: string) => void,
) => {
  return (e: string) => {
    if (activeFilter === e) {
      setActiveFilter(null)
      getDrinks('')
    } else {
      setActiveFilter(e)
      getFilteredRecipe(false, e)
    }
  }
}

export { createHandleClickFilter }
