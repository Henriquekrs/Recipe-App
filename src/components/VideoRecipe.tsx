import { useGlobalContext } from '@/context/GlobalProvider';

const VideoRecipe = () => {
  const { filteredRecipe } = useGlobalContext();
  console.log(filteredRecipe, ' <== filteredRecipe VideoRecipe');
  
  const src = filteredRecipe && filteredRecipe.strYoutube 
    ? filteredRecipe.strYoutube.replace('watch?v=', 'embed/') 
    : '';

  return (
    <>
      {src ? (
        <iframe 
          src={src} 
          frameBorder="0" 
          allowFullScreen 
        />
      ) : (
        <p></p>
      )}
    </>
  );
}

export default VideoRecipe;
