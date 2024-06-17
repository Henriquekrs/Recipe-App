import ButtonFinish from '@/components/ButtonFinish'
import IngredientsInProgress from '@/components/IngredientsInProgress'
import InstructionsRecipe from '@/components/InstructionsRecipe'
import ThumbRecipe from '@/components/ThumbRecipe'
import VideoRecipe from '@/components/VideoRecipe'
import { useGlobalContext } from '@/context/GlobalProvider'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styles from '@/styles/StylesPageInProgress.module.css'

const InProgress = () => {
  const route = useRouter()
  const { getDetailsRecipe } = useGlobalContext()
  const { id } = route.query

  useEffect(() => {
    if (id) {
      getDetailsRecipe(true, id as string)
    }
  }, [id])
  return (
    <div className={styles.container}>
      <ThumbRecipe />
      <IngredientsInProgress />
      <InstructionsRecipe />
      <VideoRecipe />
      <ButtonFinish />
    </div>
  )
}

export default InProgress
