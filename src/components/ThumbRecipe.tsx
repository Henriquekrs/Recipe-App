import React from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import Image from 'next/image'
import ButtonFavorited from './ButtonFavorited'
import styles from '@/styles/ThumbnailDetails.module.css'

const ThumbRecipe = () => {
  const { filteredRecipe } = useGlobalContext()

  return (
    <div className={styles.container}>
      <Image
        width={500}
        height={500}
        src={filteredRecipe.strMealThumb || filteredRecipe.strDrinkThumb}
        alt={`Image of ${filteredRecipe.strMeal || filteredRecipe.strDrink}`}
      />
      <div className={styles.overlay}></div>
      <div>
        <ButtonFavorited />
        <h1>{filteredRecipe.strCategory}</h1>
        <h2>{filteredRecipe.strMeal || filteredRecipe.strDrink}</h2>
      </div>
    </div>
  )
}

export default ThumbRecipe
