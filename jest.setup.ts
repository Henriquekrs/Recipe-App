// Em jest.setup.ts

import '@testing-library/jest-dom';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

beforeEach(() => {
  useRouter.mockReturnValue({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
  });
});

// Mock do next/image
jest.mock('next/image', () => {
  const React = require('react');

  return {
    __esModule: true,
    default: function Image({ src, alt }: { src: string; alt: string }) {
      return React.createElement('img', { src, alt });
    },
  };
});
