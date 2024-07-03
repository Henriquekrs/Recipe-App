import React, { useEffect } from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import Image from 'next/image';
import styles from '@/styles/ContainerCards.module.css';
import { useRouter } from 'next/router';
import { FoodRecipe } from '@/types/recipeType';

const MealsCard = () => {
  const router = useRouter();
  const { getMeals, recipes } = useGlobalContext();

  useEffect(() => {
    getMeals('');
  }, []);

  if (!recipes.length) {
    return <div>Loading...</div>;
  }

  const isFoodRecipe = (recipe: any): recipe is FoodRecipe => {
    return (recipe as FoodRecipe).idMeal !== undefined;
  };

  const handleClickRecipe = (recipeId: string) => {
    router.push(`${router.pathname}/${recipeId}`);
  };

  return (
    <div className={styles.container}>
      <ul>
        {recipes.map((recipe) => {
          if (isFoodRecipe(recipe)) {
            return (
              <li key={recipe.idMeal}>
                <button onClick={() => handleClickRecipe(recipe.idMeal)}>
                  <Image
                    width={300}
                    height={300}
                    src={recipe.strMealThumb ?? ''}
                    alt={`Image of ${recipe.strMeal}`}
                  />
                  <h1>{recipe.strMeal}</h1>
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default MealsCard;
