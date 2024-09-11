import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { AuthProvider } from '../context/AuthContext';

describe('Home Komponenta', () => {
  it('Home se renderuje', () => {
    const { getByText } = render(
      <AuthProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthProvider>
    );
    
    expect(getByText('FestiFind')).toBeInTheDocument();
  });
});
