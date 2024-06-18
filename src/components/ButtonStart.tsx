import React, { useEffect, useState } from 'react'
import styles from '@/styles/Button.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { handleStartRecipe } from '@/utils/startRecipeHandler'

const ButtonStart = () => {
  const router = useRouter()
  const { id } = router.query
  const [buttonText, setButtonText] = useState('START RECIPE')
  const baseRoute = router.pathname.includes('meals') ? 'meals' : 'drinks'

  useEffect(() => {
    const inProgressRecipes =
      JSON.parse(localStorage.getItem('inProgressRecipes') as string) || []
    if (inProgressRecipes.includes(id)) {
      setButtonText('CONTINUE RECIPE')
    }
  }, [id])

  return (
    <div className={styles.container}>
      <Link
        href={`/${baseRoute}/${id}/inprogress`}
        onClick={() => handleStartRecipe(id as string)}
      >
        {buttonText}
      </Link>
    </div>
  )
}

export default ButtonStart
