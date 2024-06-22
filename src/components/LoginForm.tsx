import React from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import { validateEmail, validatePassword } from '@/utils/LoginFunctions';
import styles from '../styles/LoginForm.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logoApp from '../assets/LogoAppRecipes.svg';
import tomato from '../assets/tomate.svg';
import { showAlert } from '@/utils/alertHandler';

const LoginForm = () => {
  const { email, setEmail, password, setPassword } = useGlobalContext();
  const route = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return showAlert(
        'error',
        'Email format invalid',
        'Please enter a valid email address ex: teste@teste.com',
      );
    }

    if (!validatePassword(password)) {
      return showAlert(
        'error',
        'Password format invalid',
        'Please enter a valid password with at least 8 characters, one uppercase letter, one lowercase letter and one number',
      );
    }

    route.push('/meals');
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Image src={logoApp} alt="Logo App Recipes" width={300} height={300} />
      <Image
        className={styles.imageTomato}
        src={tomato}
        alt="Image of a tomato"
        width={300}
        height={300}
      />
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" onChange={handleEmail} />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
