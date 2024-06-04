import { useGlobalContext } from "@/context/GlobalProvider";

const InstructionsRecipe = () => {
  const { filteredRecipe } = useGlobalContext();

  return (
    <div>
      <h1>Instructions</h1>
      <p>{filteredRecipe.strInstructions}</p>
    </div>
  )
};

export default InstructionsRecipe;
