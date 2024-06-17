import React from 'react'
import DrinksCards from '@/components/DrinksCard'
import FilterDrinks from '@/components/FilterDrinks'
import FiltersSearch from '@/components/FiltersSearch'
import TitlePage from '@/components/TitlePage'
import styles from '@/styles/StylesPageHome.module.css'

const Drinks = () => {
  return (
    <div className={styles.container}>
      <TitlePage />
      <FiltersSearch />
      <FilterDrinks />
      <DrinksCards />
    </div>
  )
}

export default Drinks
