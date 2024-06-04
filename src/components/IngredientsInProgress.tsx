import { useGlobalContext } from "@/context/GlobalProvider";
import { recipeIngredientType } from "@/types/FiltersType";
import { useState } from "react";

const IngredientsInProgress = () => {
  const { filteredRecipe } = useGlobalContext();

  const getCombinedIngredients = (recipe: recipeIngredientType) => {
    const ingredients: string[] = [];

    Object.keys(recipe).forEach(key => {
      if (key.startsWith('strIngredient') && recipe[key]) {
        const index = key.slice(13);
        const ingredient = recipe[key];
        const measure = recipe[`strMeasure${index}`];
        if (measure && measure.trim() !== "") {
          ingredients.push(`${measure} ${ingredient}`);
        } else {
          ingredients.push(ingredient);
        }
      }
    });

    return ingredients;
  };

  const ingredients = getCombinedIngredients(filteredRecipe);

  const [checkedIngredients, setCheckedIngredients] = useState(
    ingredients.map(() => false)
  );

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedIngredients = [...checkedIngredients];
    updatedCheckedIngredients[index] = !updatedCheckedIngredients[index];
    setCheckedIngredients(updatedCheckedIngredients);
  };

  return (
    <div>
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
