import { useGlobalContext } from "@/context/GlobalProvider";
import Image from "next/image";

const ThumbRecipe = () => {
  const { filteredRecipe } = useGlobalContext();
 
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
