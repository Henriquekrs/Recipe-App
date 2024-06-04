import { useContext, useState } from 'react';
import GlobalContext from './GlobalState';
import { detailsMeals, fetchMeals, filterMeals } from '@/fetchApi/FetchMeals';
import { detailsDrinks, fetchDrinks, filterDrinks } from '@/fetchApi/FetchDrinks';

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
  getDetailsRecipe: (isMeal: boolean, id: string) => Promise<void>;
  getFilteredRecipe: (isMeal: boolean, idFilter: string) => Promise<void>;
};

const GlobalProvider = ({ children }: ProviderPropsType) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [recipes, setRecipes] = useState<any[]>([]);
  const [filteredRecipe, setFilteredRecipe] = useState<any>({});
  console.log(recipes, ' <== recipes provider');

  const getMeals = async () => {
    const data = await fetchMeals();
    setRecipes(data);
  };

  const getDrinks = async () => {
    const data = await fetchDrinks();
    setRecipes(data);
  };

  const getDetailsRecipe = async (isMeal: boolean, id: string) => {
    const data = isMeal ? await detailsMeals(id) : await detailsDrinks(id)
    setFilteredRecipe(data[0]);
  };

  const getFilteredRecipe = async (isMeal: boolean, idFilter: string) => {
    const data = isMeal ? await filterMeals(idFilter) : await filterDrinks(idFilter);
    setRecipes(data);
  }
  


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
        getFilteredRecipe
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
