import { useGlobalContext } from "@/context/GlobalProvider";
import Image from "next/image";
import { useEffect } from "react";
import styles from '@/styles/ContainerCards.module.css';
import router from 'next/router';

const MealsCard = () => {
  const { getMeals, recipes } = useGlobalContext();

  useEffect(() => {
    getMeals();
  }, []);

  if (!recipes.length) {
    return <div>Loading...</div>;
  }

  const handleClickRecipe = (recipeId: string) => {
    router.push(`${router.pathname}/${recipeId}`);
  };

  return (
    <div className={styles.container}>
      <h1>Meals</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <div onClick={() => handleClickRecipe(recipe.idMeal) }>
              <Image
                width={200}
                height={200}
                src={recipe.strMealThumb}
                alt={`Image of ${recipe.strMeal}`}
              />
              <p>{recipe.strMeal}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsCard;
