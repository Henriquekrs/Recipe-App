import React from 'react'; // Import React library
import TitlePage from '@/components/TitlePage';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Meals from '@/pages/meals';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('MealsPage', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
    });
  });
  test('render title "MEALS" in the TitlePage component', () => {
    render(<TitlePage />);
    const title = screen.getByText(/MEALS/i);
    expect(title).toBeInTheDocument();
  });
  test('renders the TitlePage component correctly', () => {
    render(<Meals />);
    const title = screen.getByTestId('title-page');
    expect(title).toBeInTheDocument();
  });
});
