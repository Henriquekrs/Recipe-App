import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import drink from '@/assets/AllDrink.svg'
import meal from '@/assets/AllMeal.svg'
import styles from '@/styles/TitlePages.module.css'

const TitlePage = () => {
  const router = useRouter()
  const IsMealPage = router.pathname.includes('meals')

  return (
    <div className={styles.container}>
      <Image src={IsMealPage ? meal : drink} alt="Logo Page" />
      <h1>{IsMealPage ? 'MEALS' : 'DRINKS'}</h1>
    </div>
  )
}

export default TitlePage
