import IngredientsInProgress from "@/components/IngredientsInProgress";
import InstructionsRecipe from "@/components/InstructionsRecipe";
import ThumbRecipe from "@/components/ThumbRecipe";
import VideoRecipe from "@/components/VideoRecipe";

const InProgress = () => {
  return (
    <div>
      <ThumbRecipe />
      <IngredientsInProgress />
      <InstructionsRecipe />
      <VideoRecipe />
    </div>
  )
}

export default InProgress;
