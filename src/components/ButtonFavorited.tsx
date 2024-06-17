import React from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import { useRouter } from 'next/router'
import favorite from '@/assets/Favorite.svg'
import Image from 'next/image'

function ButtonFavorited() {
  const router = useRouter()
  const { filteredRecipe } = useGlobalContext()
  const { id } = router.query
  const isMealRoute = router.pathname.includes('meals')

  const handleSaveFavoriteRecipes = (id: string) => {
    const favoriteRecipes =
      JSON.parse(localStorage.getItem('favoriteRecipes') as string) || []
    const idExists = favoriteRecipes.some(
      (recipe: { id: string }) => recipe.id === id,
    )

    let updatedRecipes

    if (idExists) {
      updatedRecipes = favoriteRecipes.filter(
        (recipe: { id: string }) => recipe.id !== id,
      )
    } else {
      const newRecipe = {
        id,
        type: isMealRoute ? 'meals' : 'drinks',
        category: filteredRecipe.strCategory,
        name: isMealRoute ? filteredRecipe.strMeal : filteredRecipe.strDrink,
        image: isMealRoute
          ? filteredRecipe.strMealThumb
          : filteredRecipe.strDrinkThumb,
      }
      updatedRecipes = [...favoriteRecipes, newRecipe]
    }

    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedRecipes))
  }

  return (
    <Image
      src={favorite}
      width={100}
      height={100}
      alt="Button Favorite"
      onClick={() => handleSaveFavoriteRecipes(id as string)}
    />
  )
}

export default ButtonFavorited
