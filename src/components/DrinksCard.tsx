import { useGlobalContext } from "@/context/GlobalProvider";
import Image from "next/image";
import { useEffect } from "react";
import styles from '@/styles/ContainerCards.module.css';
import { useRouter } from "next/router";

const DrinksCards = () => {
  const router = useRouter();
  const { getDrinks, recipes } = useGlobalContext();

  useEffect(() => {
    getDrinks();
  }, []);

  if (!recipes.length) {
    return <div>Loading...</div>;
  }

  const handleClickRecipe = (recipeId: string) => {
    router.push(`${router.pathname}/${recipeId}`);
  };

  return (
    <div className={styles.container}>
      <h1>Drinks</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <div onClick={() => handleClickRecipe(recipe.idDrink) }>
              <Image
                width={200}
                height={200}
                src={recipe.strDrinkThumb}
                alt={`Image of ${recipe.strDrink}`}
              />
              <p>{recipe.strDrink}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default DrinksCards;
