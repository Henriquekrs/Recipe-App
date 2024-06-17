import React from 'react'
import styles from '@/styles/ContainerFooter.module.css'
import Image from 'next/image'
import drink from '@/assets/AllDrink.svg'
import meal from '@/assets/AllMeal.svg'
import { useRouter } from 'next/router'

const FooterBar = () => {
  const router = useRouter()
  const isMealsPage = router.pathname.includes('meals')

  const handleClickNavigate = () => {
    isMealsPage ? router.push('/drinks') : router.push('/meals')
  }

  return (
    <div className={styles.container}>
      <Image src={drink} onClick={handleClickNavigate} alt="Redirect drinks" />
      <Image src={meal} onClick={handleClickNavigate} alt="Redirect meals" />
    </div>
  )
}

export default FooterBar
