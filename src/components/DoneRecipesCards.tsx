import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/ContainerDoneRecipes.module.css'
import allFoods from '@/assets/All.svg'
import allMeals from '@/assets/AllMeal.svg'
import allDrinks from '@/assets/AllDrink.svg'
import { useRouter } from 'next/router'
import { DoneOrFavoritesRecipesType } from '@/types/doneOrFavoriteCardsType'

const DoneRecipesCards = () => {
  const router = useRouter()
  const IsMealPage = router.pathname.includes('done-recipes')
  const [doneRecipes, setDoneRecipes] = useState<DoneOrFavoritesRecipesType[]>(
    [],
  )
  const [originalDoneRecipes, setOriginalDoneRecipes] = useState<
    DoneOrFavoritesRecipesType[]
  >([])

  useEffect(() => {
    const storedDoneRecipes = JSON.parse(
      localStorage.getItem('doneRecipes') || '[]',
    )
    setDoneRecipes(storedDoneRecipes)
    setOriginalDoneRecipes(storedDoneRecipes)
  }, [])

  const filterTypes = (type: string) => {
    if (type === 'all') {
      setDoneRecipes(originalDoneRecipes)
      return
    }
    const filteredRecipes = originalDoneRecipes.filter(
      (recipe: DoneOrFavoritesRecipesType) => recipe.type === type,
    )
    setDoneRecipes(filteredRecipes)
  }

  return (
    <div className={styles.container}>
      <h1>{IsMealPage ? 'done-recipes' : 'favorites'}</h1>
      <div className={styles.button}>
        <button onClick={() => filterTypes('all')}>
          <Image
            width={50}
            height={50}
            src={allFoods}
            alt={'Image of allFoods'}
          />
          <p>All</p>
        </button>
        <button onClick={() => filterTypes('meals')}>
          <Image
            width={50}
            height={50}
            src={allMeals}
            alt={'Image of allMeals'}
          />
          <p>Foods</p>
        </button>
        <button onClick={() => filterTypes('drinks')}>
          <Image
            width={50}
            height={50}
            src={allDrinks}
            alt={'Image of allDrinks'}
          />
          <p>Drinks</p>
        </button>
      </div>
      <div>
        {doneRecipes.map((recipe, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={100}
              height={100}
            />
            <div>
              <h1>{recipe.name}</h1>
              <p>{recipe.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoneRecipesCards
