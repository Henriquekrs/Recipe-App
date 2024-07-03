import React, { useEffect } from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import Image from 'next/image';
import styles from '@/styles/ContaineRecommendations.module.css';
import { useRouter } from 'next/router';
import { FoodRecipe, DrinkRecipe } from '@/types/recipeType';

const RecommendedRecipes = () => {
  const router = useRouter();
  const { getMeals, getDrinks, recipes } = useGlobalContext();

  useEffect(() => {
    if (router.pathname.includes('meals')) {
      getDrinks('');
    } else if (router.pathname.includes('drinks')) {
      getMeals('');
    }
  }, [router.pathname]);

  const handleClickRecipe = (recipeId: string) => {
    if (router.pathname.includes('meals')) {
      router.push(`/drinks/${recipeId}`);
    } else if (router.pathname.includes('drinks')) {
      router.push(`/meals/${recipeId}`);
    }
  };

  const isFoodRecipe = (recipe: any): recipe is FoodRecipe => {
    return (recipe as FoodRecipe).idMeal !== undefined;
  };

  const isDrinkRecipe = (recipe: any): recipe is DrinkRecipe => {
    return (recipe as DrinkRecipe).idDrink !== undefined;
  };

  return (
    <div className={styles.container}>
      <h1>Recommended</h1>
      <ul className={styles.carousel}>
        {recipes.slice(0, 10).map((recipe, index) => (
          <li key={index} className={styles.carouselItem}>
            <button
              onClick={() =>
                handleClickRecipe(
                  isFoodRecipe(recipe)
                    ? recipe.idMeal
                    : isDrinkRecipe(recipe)
                      ? recipe.idDrink
                      : '',
                )
              }
            >
              <Image
                width={200}
                height={200}
                src={
                  isFoodRecipe(recipe)
                    ? recipe.strMealThumb || ''
                    : isDrinkRecipe(recipe)
                      ? recipe.strDrinkThumb || ''
                      : ''
                }
                alt={`Image of ${
                  isFoodRecipe(recipe)
                    ? recipe.strMeal
                    : isDrinkRecipe(recipe)
                      ? recipe.strDrink
                      : ''
                }`}
              />
              <p>
                {isFoodRecipe(recipe)
                  ? recipe.strMeal
                  : isDrinkRecipe(recipe)
                    ? recipe.strDrink
                    : ''}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedRecipes;
