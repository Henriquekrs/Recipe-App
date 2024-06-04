import ButtonStart from "@/components/ButtonStart";
import RecipeIngredients from "@/components/IngredientsRecipe";
import InstructionsRecipe from "@/components/InstructionsRecipe";
import RecommendedRecipes from "@/components/RecommendedRecipe";
import RecommendedFilter from "@/components/RecommendedRecipe";
import ThumbRecipe from "@/components/ThumbRecipe";
import VideoRecipe from "@/components/VideoRecipe";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RecipeDetails = () => {
  const route = useRouter();
  const { getFilteredRecipe } = useGlobalContext();
  const { id } = route.query

  useEffect(() => {
    if(id) {
      getFilteredRecipe(true, id as string);
    }
  }, [id]);

  return (
    <div>
      <ThumbRecipe />
      <RecipeIngredients />
      <InstructionsRecipe />
      <VideoRecipe />
      <RecommendedRecipes />
      <ButtonStart />
    </div>
  )
};

export default RecipeDetails;
