import { useGlobalContext } from "@/context/GlobalProvider";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ThumbRecipe = () => {
  const router = useRouter();
  const { filteredRecipe, getFilteredRecipe } = useGlobalContext();
  const { id } = router.query;

  useEffect(() => {
    getFilteredRecipe(id as string);
  }, []);
  
  return (
    <div>
      <h1>{filteredRecipe.strCategory}</h1>
      <Image
        width={200}
        height={200}
        src={filteredRecipe.strMealThumb || filteredRecipe.strDrinkThumb}
        alt={`Image of ${filteredRecipe.strMeal || filteredRecipe.strDrink}`}
        />
        <h2>{filteredRecipe.strMeal || filteredRecipe.strDrink}</h2>
    </div>
  )
};

export default ThumbRecipe;
