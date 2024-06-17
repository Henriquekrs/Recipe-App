import ButtonStart from '@/components/ButtonStart'
import RecipeIngredients from '@/components/IngredientsRecipe'
import InstructionsRecipe from '@/components/InstructionsRecipe'
import RecommendedRecipes from '@/components/RecommendedRecipe'
import ThumbRecipe from '@/components/ThumbRecipe'
import { useGlobalContext } from '@/context/GlobalProvider'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styles from '@/styles/StylesPageDetails.module.css'

const RecipeDetails = () => {
  const router = useRouter()
  const { getDetailsRecipe } = useGlobalContext()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      getDetailsRecipe(false, id as string)
    }
  }, [id])

  return (
    <div className={styles.container}>
      <ThumbRecipe />
      <RecipeIngredients />
      <InstructionsRecipe />
      <RecommendedRecipes />
      <ButtonStart />
    </div>
  )
}

export default RecipeDetails
