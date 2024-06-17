import React from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import styles from '@/styles/ContainerInstruction.module.css'

const InstructionsRecipe = () => {
  const { filteredRecipe } = useGlobalContext()

  return (
    <div className={styles.container}>
      <h1>Instructions</h1>
      <p>{filteredRecipe.strInstructions}</p>
    </div>
  )
}

export default InstructionsRecipe
