import React from 'react'
import FavoriteRecipesCards from '@/components/FavoriteRecipesCard'
import styles from '@/styles/StylesPageDoneAndFavorite.module.css'

const Favorites = () => {
  return (
    <div className={styles.container}>
      <FavoriteRecipesCards />
    </div>
  )
}

export default Favorites
