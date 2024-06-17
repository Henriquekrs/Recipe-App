import React from 'react'
import styles from '@/styles/ContainerHeader.module.css'
import LogoRecipeApp from './LogoRecipeApp'
import ButtonProfile from './ButtonProfile'
import ButtonSearch from './ButtonSearch'

const HeaderBar = () => {
  return (
    <header className={styles.container}>
      <LogoRecipeApp />
      <div>
        <ButtonProfile />
        <ButtonSearch />
      </div>
    </header>
  )
}

export default HeaderBar
