import React from 'react'
import FiltersMeals from '@/components/FiltersMeals'
import FiltersSearch from '@/components/FiltersSearch'
import MealsCard from '@/components/MealsCard'
import TitlePage from '@/components/TitlePage'
import styles from '@/styles/StylesPageHome.module.css'

const Meals = () => {
  return (
    <div className={styles.container}>
      <TitlePage />
      <FiltersSearch />
      <FiltersMeals />
      <MealsCard />
    </div>
  )
}

export default Meals
