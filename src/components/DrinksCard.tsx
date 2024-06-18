import React, { useEffect } from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import Image from 'next/image'
import styles from '@/styles/ContainerCards.module.css'
import { useRouter } from 'next/router'

const DrinksCards = () => {
  const router = useRouter()
  const { getDrinks, recipes } = useGlobalContext()

  useEffect(() => {
    getDrinks('')
  }, [])

  if (!recipes.length) {
    return <div>Loading...</div>
  }

  const handleClickRecipe = (recipeId: string) => {
    router.push(`${router.pathname}/${recipeId}`)
  }

  return (
    <div className={styles.container}>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <button onClick={() => handleClickRecipe(recipe.idDrink)}>
              <Image
                width={150}
                height={150}
                src={recipe.strDrinkThumb}
                alt={`Image of ${recipe.strDrink}`}
              />
              <h1>{recipe.strDrink}</h1>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DrinksCards
