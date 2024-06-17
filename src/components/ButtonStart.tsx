import React, { useEffect, useState } from 'react'
import styles from '@/styles/Button.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ButtonStart = () => {
  const router = useRouter()
  const { id } = router.query
  const [buttonText, setButtonText] = useState('START RECIPE')

  useEffect(() => {
    const inProgressRecipes =
      JSON.parse(localStorage.getItem('inProgressRecipes') as string) || []
    if (inProgressRecipes.includes(id)) {
      setButtonText('CONTINUE RECIPE')
    }
  }, [id])

  const handleStartRecipe = () => {
    const inProgressRecipes =
      JSON.parse(localStorage.getItem('inProgressRecipes') as string) || []
    if (!inProgressRecipes.includes(id)) {
      inProgressRecipes.push(id)
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify(inProgressRecipes),
      )
    }
  }

  const baseRoute = router.pathname.includes('meals') ? 'meals' : 'drinks'

  return (
    <div className={styles.container}>
      <Link href={`/${baseRoute}/${id}/inprogress`} onClick={handleStartRecipe}>
        {buttonText}
      </Link>
    </div>
  )
}

export default ButtonStart
