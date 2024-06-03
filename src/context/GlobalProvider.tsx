import { useContext, useState } from 'react';
import GlobalContext from './GlobalState';
import { fetchMeals } from '@/fetchApi/FetchMeals';
import { fetchDrinks } from '@/fetchApi/FetchDrinks';

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
  recipes: any[];
  setRecipes: (recipes: any[]) => void;
  getMeals: () => Promise<any>;
  getDrinks: () => Promise<any>;
  filteredRecipe: any;
  getFilteredRecipe: (idRecipe: string) => void;
};

const GlobalProvider = ({ children }: ProviderPropsType) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [recipes, setRecipes] = useState<any[]>([]);
  const [filteredRecipe, setFilteredRecipe] = useState<any>({});
  console.log(recipes, ' <== recipes provider');
  console.log(filteredRecipe, ' <== filteredRecipe provider');
  

  const getMeals = async () => {
    const data = await fetchMeals();
    setRecipes(data);
  };

  const getDrinks = async () => {
    const data = await fetchDrinks();
    setRecipes(data);
  };

  const getFilteredRecipe = (idRecipe: string) => {
    const filtered = recipes.find((recipe) => recipe.idMeal === idRecipe || recipe.idDrink === idRecipe);
    setFilteredRecipe(filtered);
  };

  return (
    <GlobalContext.Provider
      value={{ recipes, setRecipes, email, setEmail, password, setPassword, getMeals, getDrinks, getFilteredRecipe, filteredRecipe }}
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
