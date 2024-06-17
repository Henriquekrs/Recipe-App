import React from 'react'
import DoneRecipesCards from '@/components/DoneRecipesCards'
import styles from '@/styles/StylesPageDoneAndFavorite.module.css'

const DoneRecipes = () => {
  return (
    <div className={styles.container}>
      <DoneRecipesCards />
    </div>
  )
}

export default DoneRecipes
