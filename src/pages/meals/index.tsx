import FiltersMeals from "@/components/FiltersMeals";
import FiltersSearch from "@/components/FiltersSearch";
import MealsCard from "@/components/MealsCard";

const Meals = () => {
  return (
    <div>
      <FiltersSearch />
      <FiltersMeals />
      <MealsCard />
    </div>
  )
};

export default Meals;