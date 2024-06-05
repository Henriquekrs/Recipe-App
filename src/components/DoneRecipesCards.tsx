import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/ContainerDoneRecipes.module.css";

export type DoneOrFavoritesRecipesType = {
  id: string;
  type: string;
  category: string;
  name: string;
  image: string;
}

const DoneRecipesCards = () => {
  const [doneRecipes, setDoneRecipes] = useState<DoneOrFavoritesRecipesType[]>([]);
  const [originalDoneRecipes, setOriginalDoneRecipes] = useState<DoneOrFavoritesRecipesType[]>([]);

  useEffect(() => {
    const storedDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes') || '[]');
    setDoneRecipes(storedDoneRecipes);
    setOriginalDoneRecipes(storedDoneRecipes);
  }, []);

  const filterTypes = (type: string) => {
    if (type === 'all') {
      setDoneRecipes(originalDoneRecipes);
      return;
    }
    const filteredRecipes = originalDoneRecipes.filter((recipe: DoneOrFavoritesRecipesType) => recipe.type === type);
    setDoneRecipes(filteredRecipes);
  };

  return (
    <div className={styles.container}>
      <h1>
        Done Recipes
      </h1>
      <div>
        <button
          onClick={() => filterTypes('all')}
        >
          All
        </button>
        <button
          onClick={() => filterTypes('meals')}
        >
          Foods
        </button>
        <button
          onClick={() => filterTypes('drinks')}
        >
          Drinks
        </button>
      </div>
      <div>
        {doneRecipes.map((recipe, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={100}
              height={100}
            />
            <p>{recipe.name}</p>
            <p>{recipe.category}</p>
            <p>{recipe.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoneRecipesCards;
