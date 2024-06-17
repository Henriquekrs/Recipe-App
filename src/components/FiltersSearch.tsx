import React, { useState } from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import styles from '@/styles/ContainerSearch.module.css'
import { useRouter } from 'next/router'

const FiltersSearch = () => {
  const router = useRouter()
  const { getByIngredients, getMeals, getDrinks, getByFirstLetter } =
    useGlobalContext()
  const [searchType, setSearchType] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChangeRadio = (value: string) => {
    setSearchType(value)
  }

  const handleSubmitFilter = () => {
    const isMealRoute = router.pathname.includes('meals')

    type SearchAction = () => void

    const searchActions: { [key: string]: SearchAction } = {
      ingredient: isMealRoute
        ? () => getByIngredients(true, searchValue)
        : () => getByIngredients(false, searchValue),
      name: isMealRoute
        ? () => getMeals(searchValue)
        : () => getDrinks(searchValue),
      firstLetter: isMealRoute
        ? () => getByFirstLetter(true, searchValue)
        : () => getByFirstLetter(false, searchValue),
    }

    if (searchType in searchActions) {
      searchActions[searchType]()
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchBar}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div>
        <label>
          <input
            type="radio"
            name="searchType"
            value="ingredient"
            onChange={(e) => handleChangeRadio(e.target.value)}
          />{' '}
          Ingredient
        </label>
        <label>
          <input
            type="radio"
            name="searchType"
            value="name"
            onChange={(e) => handleChangeRadio(e.target.value)}
          />{' '}
          Name
        </label>
        <label>
          <input
            type="radio"
            name="searchType"
            value="firstLetter"
            onChange={(e) => handleChangeRadio(e.target.value)}
          />{' '}
          First letter
        </label>
      </div>
      <button onClick={handleSubmitFilter} className={styles.searchButton}>
        SEARCH
      </button>
    </div>
  )
}

export default FiltersSearch
