import React from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import styles from '@/styles/Button.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { handleSaveDoneRecipes } from '@/utils/finishRecipesHandler'

const ButtonFinish = () => {
  const router = useRouter()
  const { filteredRecipe } = useGlobalContext()
  const { id } = router.query
  const isMealRoute = router.pathname.includes('meals')

  return (
    <div className={styles.container}>
      <Link
        href="/done-recipes"
        onClick={() =>
          handleSaveDoneRecipes(id as string, isMealRoute, filteredRecipe)
        }
      >
        Finish Recipe
      </Link>
    </div>
  )
}

export default ButtonFinish
