import { useGlobalContext } from "@/context/GlobalProvider";
import Image from "next/image";
import { useEffect } from "react";
import styles from '@/styles/ContaineRecommendations.module.css';
import { useRouter } from "next/router";

const RecommendedRecipes = () => {
  const router = useRouter();
  const { getMeals, getDrinks, recipes } = useGlobalContext();
  
  useEffect(() => {
    if (router.pathname.includes('meals')) {
      getDrinks();
    } else if (router.pathname.includes('drinks')) {
      getMeals();
    }
  }, []);

  const handleClickRecipe = (recipeId: string) => {
    router.push(`${router.pathname}/${recipeId}`);
  };

  return (
    <div className={styles.container}>
      <h1>Recommended</h1>
      <ul className={styles.carousel}>
        {recipes.slice(0, 6).map((recipe, index) => (
          <li key={index} className={styles.carouselItem}>
            <div onClick={() => handleClickRecipe(recipe.idMeal || recipe.idDrink)}>
              <Image
                width={200}
                height={200}
                src={recipe.strMealThumb || recipe.strDrinkThumb}
                alt={`Image of ${recipe.strMeal || recipe.strDrink}`}
              />
              <p>{recipe.strMeal || recipe.strDrink}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default RecommendedRecipes;
