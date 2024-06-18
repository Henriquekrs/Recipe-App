import React from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import styles from '@/styles/ContainerIngredient.module.css';
import getCombinedIngredients from '@/utils/combinedIngredientAndMeassure';

const RecipeIngredients = () => {
  const { filteredRecipe } = useGlobalContext();

  const ingredients = getCombinedIngredients(filteredRecipe);

  return (
    <div className={styles.container}>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
