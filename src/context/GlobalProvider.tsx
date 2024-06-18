import React, { useContext, useState } from 'react';
import GlobalContext from './GlobalState';
import {
  detailsMeals,
  fetchMeals,
  filterCategoryMeals,
  filterMealFirstLetter,
  filterMealIngredient,
} from '@/fetchApi/FetchMeals';
import {
  detailsDrinks,
  fetchDrinks,
  filterCategoryDrinks,
  filterDrinkFirstLetter,
  filterDrinkIngredient,
} from '@/fetchApi/FetchDrinks';
import { DrinkRecipe, FoodRecipe } from '@/types/recipeType';

export type ProviderPropsType = {
  children: React.ReactNode;
};

export type filtersType = {
  strCategory: string;
};

export type GlobalContextType = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  recipes: FoodRecipe[] | DrinkRecipe[];
  setRecipes: (recipes: FoodRecipe[] | DrinkRecipe[]) => void;
  getMeals: (name: string) => void;
  getDrinks: (name: string) => void;
  filteredRecipe: any;
  getDetailsRecipe: (isMeal: boolean, id: string) => Promise<void>;
  getFilteredRecipe: (isMeal: boolean, idFilter: string) => Promise<void>;
  getByIngredients: (isMeal: boolean, ingredient: string) => Promise<void>;
  getByFirstLetter: (isMeal: boolean, firstLetter: string) => Promise<void>;
};

const GlobalProvider = ({ children }: ProviderPropsType) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [recipes, setRecipes] = useState<FoodRecipe[] | DrinkRecipe[]>([]);
  const [filteredRecipe, setFilteredRecipe] = useState<
    FoodRecipe | DrinkRecipe
  >(Object);
  console.log(filteredRecipe);

  const getMeals = async (name: string) => {
    const data = await fetchMeals(name);
    setRecipes(data);
  };

  const getDrinks = async (name: string) => {
    const data = await fetchDrinks(name);
    setRecipes(data);
  };

  const getDetailsRecipe = async (isMeal: boolean, id: string) => {
    const data = isMeal ? await detailsMeals(id) : await detailsDrinks(id);
    setFilteredRecipe(data[0]);
  };

  const getFilteredRecipe = async (isMeal: boolean, idFilter: string) => {
    const data = isMeal
      ? await filterCategoryMeals(idFilter)
      : await filterCategoryDrinks(idFilter);
    setRecipes(data);
  };

  const getByIngredients = async (isMeal: boolean, ingredient: string) => {
    const data = isMeal
      ? await filterMealIngredient(ingredient)
      : await filterDrinkIngredient(ingredient);
    setRecipes(data);
  };

  const getByFirstLetter = async (isMeal: boolean, firstLetter: string) => {
    const data = isMeal
      ? await filterMealFirstLetter(firstLetter)
      : await filterDrinkFirstLetter(firstLetter);
    setRecipes(data);
  };

  return (
    <GlobalContext.Provider
      value={{
        recipes,
        setRecipes,
        email,
        setEmail,
        password,
        setPassword,
        getMeals,
        getDrinks,
        getDetailsRecipe,
        filteredRecipe,
        getFilteredRecipe,
        getByIngredients,
        getByFirstLetter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export { GlobalProvider, useGlobalContext };
