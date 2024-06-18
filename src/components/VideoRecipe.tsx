import React from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import styles from '@/styles/ContainerVideo.module.css';
import { transformYoutubeURL } from '@/utils/transformUrlVideo';

const VideoRecipe = () => {
  const { filteredRecipe } = useGlobalContext();
  const src = transformYoutubeURL(
    filteredRecipe ? filteredRecipe.strYoutube : '',
  );

  return (
    <div className={styles.container}>
      <h1>Video</h1>
      {src ? (
        <iframe src={src} allowFullScreen title="Recipe Video" />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default VideoRecipe;
