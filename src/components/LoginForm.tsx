import { useGlobalContext } from '@/context/GlobalProvider';
import { validateEmail, validatePassword } from '@/utils/LoginFunctions';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'

const LoginForm = () => {
  const { email, setEmail, password, setPassword } = useGlobalContext();
  const route = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return Swal.fire({
        icon: 'error',
        title: 'Email format invalid',
        text: 'Please enter a valid email address ex: teste@teste.com'
      })
    }

    if (!validatePassword(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Password format invalid',
        text: 'Please enter a valid password with at least 8 characters, one uppercase letter, one lowercase letter and one number'
      })
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
    <form onSubmit={ handleLogin }>
      <input type="text" placeholder="Username" onChange={ handleEmail }/>
      <input type="password" placeholder="Password" onChange={ handlePassword }/>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
