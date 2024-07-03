import React from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import { useRouter } from 'next/router';
import favorite from '@/assets/Favorite.svg';
import Image from 'next/image';
import { handleSaveFavoriteRecipes } from '@/utils/favoriteRecipesHandler';

function ButtonFavorited() {
  const router = useRouter();
  const { filteredRecipe } = useGlobalContext();
  const { id } = router.query;
  const isMealRoute = router.pathname.includes('meals');

  return (
    <Image
      src={favorite}
      width={100}
      height={100}
      alt="Button Favorite"
      onClick={() =>
        handleSaveFavoriteRecipes(id as string, isMealRoute, filteredRecipe)
      }
    />
  );
}

export default ButtonFavorited;
