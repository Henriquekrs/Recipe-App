import DrinksCards from "@/components/DrinksCard";
import FilterDrinks from "@/components/FilterDrinks";
import FiltersSearch from "@/components/FiltersSearch";

const Drinks = () => {
  return (
    <div>
      <FiltersSearch />
      <FilterDrinks />
      <DrinksCards />
    </div>
  )
};

export default Drinks;
