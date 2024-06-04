import ButtonStart from "@/components/ButtonStart";
import RecipeIngredients from "@/components/IngredientsRecipe";
import InstructionsRecipe from "@/components/InstructionsRecipe";
import RecommendedRecipes from "@/components/RecommendedRecipe";
import RecommendedFilter from "@/components/RecommendedRecipe";
import ThumbRecipe from "@/components/ThumbRecipe";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RecipeDetails = () => {
  const router = useRouter();
  const { getDetailsRecipe } = useGlobalContext();
  const { id } = router.query;

  useEffect(() => {
    if(id) {
      getDetailsRecipe(false, id as string);
    }
  }, [id]);

  return (
    <div>
      <ThumbRecipe />
      <RecipeIngredients />
      <InstructionsRecipe />
      <RecommendedRecipes />
      <ButtonStart />
    </div>
  )
};

export default RecipeDetails;
