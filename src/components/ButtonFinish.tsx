import { useGlobalContext } from '@/context/GlobalProvider';
import styles from '@/styles/Button.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ButtonFinish = () => {
  const router = useRouter();
  const { filteredRecipe } = useGlobalContext();
  
  const { id } = router.query;
  const isMealRoute = router.pathname.includes('meals');

  const handleSaveDoneRecipes = (id: string) => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes') as string) || [];
    
    const idExists = doneRecipes.some((recipe: { id: string }) => recipe.id === id);

    if (!idExists) {
      const newRecipe = {
        id,
        type: isMealRoute ? 'meals' : 'drinks',
        category: filteredRecipe.strCategory,
        name: isMealRoute ? filteredRecipe.strMeal : filteredRecipe.strDrink,
        image: isMealRoute ? filteredRecipe.strMealThumb : filteredRecipe.strDrinkThumb,
      };
      localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, newRecipe]));
    }
  };

  return (
    <div className={styles.container}>
      <Link
        href="/done-recipes"
        onClick={() => handleSaveDoneRecipes(id as string)}
      >
        Finish Recipe
      </Link>
    </div>
  );
};

export default ButtonFinish;
