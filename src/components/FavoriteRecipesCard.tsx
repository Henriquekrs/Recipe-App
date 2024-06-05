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

const FavoriteRecipesCards = () => {
  const [favoriteRecipes, setfavoriteRecipes] = useState<DoneOrFavoritesRecipesType[]>([]);
  const [originalfavoriteRecipes, setOriginalfavoriteRecipes] = useState<DoneOrFavoritesRecipesType[]>([]);

  useEffect(() => {
    const storedfavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    setfavoriteRecipes(storedfavoriteRecipes);
    setOriginalfavoriteRecipes(storedfavoriteRecipes);
  }, []);

  const filterTypes = (type: string) => {
    if (type === 'all') {
      setfavoriteRecipes(originalfavoriteRecipes);
      return;
    }
    const filteredRecipes = originalfavoriteRecipes.filter((recipe: DoneOrFavoritesRecipesType) => recipe.type === type);
    setfavoriteRecipes(filteredRecipes);
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
        {favoriteRecipes.map((recipe, index) => (
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

export default FavoriteRecipesCards;
