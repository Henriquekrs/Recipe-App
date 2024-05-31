import { useContext, useState } from 'react';
import GlobalContext from './GlobalState';

export type ProviderPropsType = {
  children: React.ReactNode;
};

export type GlobalContextType = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  recipes: any[];
  setRecipes: (recipes: any[]) => void;
};

const GlobalProvider = ({ children }: ProviderPropsType) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [recipes, setRecipes] = useState<any[]>([]);

  return (
    <GlobalContext.Provider
      value={{ recipes, setRecipes, email, setEmail, password, setPassword }}
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
