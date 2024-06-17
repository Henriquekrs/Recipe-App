import React from 'react'
import Image from 'next/image'
import Icone from '@/assets/ícone Recipes app.svg'
import Logo from '@/assets/logo Recipes app.svg'
import styles from '@/styles/LogoRecipeApp.module.css'

const LogoRecipeApp = () => {
  const handleGoHome = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    window.location.href = '/meals'
  }

  return (
    <button onClick={() => handleGoHome} className={styles.container}>
      <Image src={Icone} alt="Icone app" />
      <Image src={Logo} alt="Logo app" />
    </button>
  )
}

export default LogoRecipeApp
