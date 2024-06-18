import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import { useRouter } from 'next/router';
import styles from '@/styles/IngredientsInProgress.module.css';
import getCombinedIngredients from '@/utils/combinedIngredientAndMeassure';
import { loadSavedProgress } from '@/utils/loadAndSaveProgress';

const IngredientsInProgress = () => {
  const router = useRouter();
  const { id } = router.query;
  const { filteredRecipe } = useGlobalContext();

  const ingredients = getCombinedIngredients(filteredRecipe);

  const [checkedIngredients, setCheckedIngredients] = useState<boolean[]>(
    new Array(ingredients.length).fill(false),
  );

  useEffect(() => {
    const progress = loadSavedProgress(id as string, ingredients);
    setCheckedIngredients(progress);
  }, [id, ingredients.length]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedIngredients = [...checkedIngredients];
    updatedCheckedIngredients[index] = !updatedCheckedIngredients[index];
    setCheckedIngredients(updatedCheckedIngredients);
    saveProgressToLocalStorage(updatedCheckedIngredients);
  };

  const saveProgressToLocalStorage = (checkedIngredients: boolean[]) => {
    const savedProgress = JSON.parse(
      localStorage.getItem('ingredientsInProgress') || '[]',
    );
    const updatedIngredients = ingredients.filter(
      (_, idx) => checkedIngredients[idx],
    );

    const recipeIndex = savedProgress.findIndex(
      (recipe: { id: string }) => recipe.id === id,
    );

    if (updatedIngredients.length > 0) {
      if (recipeIndex > -1) {
        savedProgress[recipeIndex].ingredients = updatedIngredients;
      } else {
        savedProgress.push({ id, ingredients: updatedIngredients });
      }
    } else {
      if (recipeIndex > -1) {
        savedProgress.splice(recipeIndex, 1);
      }
    }

    localStorage.setItem(
      'ingredientsInProgress',
      JSON.stringify(savedProgress),
    );
  };

  return (
    <div className={styles.container}>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={checkedIngredients[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsInProgress;
