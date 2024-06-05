import { useGlobalContext } from "@/context/GlobalProvider";
import Image from "next/image";
import { useRouter } from "next/router";
import ButtonFavorited from "./ButtonFavorited";

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
        <ButtonFavorited />
    </div>
  )
};

export default ThumbRecipe;
