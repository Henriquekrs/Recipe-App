import React from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import { recipeIngredientType } from '@/types/FiltersType'
import styles from '@/styles/ContainerIngredient.module.css'

const RecipeIngredients = () => {
  const { filteredRecipe } = useGlobalContext()

  const getCombinedIngredients = (recipe: recipeIngredientType) => {
    const ingredients: string[] = []

    Object.keys(recipe).forEach((key) => {
      if (key.startsWith('strIngredient') && recipe[key]) {
        const index = key.slice(13)
        const ingredient = recipe[key]
        const measure = recipe[`strMeasure${index}`]
        if (measure && measure.trim() !== '') {
          ingredients.push(`${measure} ${ingredient}`)
        } else {
          ingredients.push(ingredient)
        }
      }
    })

    return ingredients
  }

  const ingredients = getCombinedIngredients(filteredRecipe)

  return (
    <div className={styles.container}>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeIngredients
