import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/router';
import { GlobalProvider } from '@/context/GlobalProvider';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('LoginForm', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
    });
  });

  test('renders login form correctly', () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
  test('displays error for invalid email format', () => {
    render(
      <GlobalProvider>
        <LoginForm />
      </GlobalProvider>,
    );

    const emailInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'validPassword123' } });

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(screen.getByText('Email format invalid')).toBeInTheDocument();
  });
  test('displays error for invalid password format', async () => {
    render(
      <GlobalProvider>
        <LoginForm />
      </GlobalProvider>,
    );

    const emailInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: 'inv' } });

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    // Aguardar a exibição completa da modal de erro
    await waitFor(() => {
      expect(screen.getByText('Password format invalid')).toBeInTheDocument();
    });

    // Agora procurar pela mensagem de erro específica dentro da modal
    const modalContent = screen.getByRole('dialog');
    expect(modalContent).toHaveTextContent('Password format invalid');
  });
  test('redirects to /meals on successful login', () => {
    render(
      <GlobalProvider>
        <LoginForm />
      </GlobalProvider>,
    );

    const emailInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: 'validPassword123' } });

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(useRouter().push).toHaveBeenCalledWith('/meals');
  });
});
