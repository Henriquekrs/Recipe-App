import React from 'react'
import { useGlobalContext } from '@/context/GlobalProvider'
import styles from '@/styles/ContainerVideo.module.css'

const VideoRecipe = () => {
  const { filteredRecipe } = useGlobalContext()

  const src =
    filteredRecipe && filteredRecipe.strYoutube
      ? filteredRecipe.strYoutube.replace('watch?v=', 'embed/')
      : ''

  return (
    <div className={styles.container}>
      <h1>Video</h1>
      {src ? (
        <iframe
          src={src}
          frameBorder="0"
          allowFullScreen
          title="Recipe Video"
        />
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default VideoRecipe
