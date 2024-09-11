import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import { SearchCards } from '../components/SearchCards';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

// Mock podaci festivala
vi.mock('../data/festival', () => ({
  festival: [
    {
        id: 1,
        title: "Exit Festival",
        start: "01.01",
        end: "02.01",
        type: "Multi-genre",
        poster: "N/A",
        location: "Beograd, Serbia",
        completed: true, 
        image1: "N/A",
        image2: "N/A",
        text: "lorem ipsum"
    },
    {
        id: 2,
        title: "Sziget Festival",
        start: "10.01",
        end: "11.01",
        type: "Rap",
        poster: "N/A",
        location: "Novi Sad, Serbia",
        completed: false, 
        image1: "N/A",
        image2: "N/A",
        text: "lorem ipsum"
    },
    {
        id: 3,
        title: "Primavera Festival",
        start: "20.01",
        end: "21.01",
        type: "Rock",
        poster: "N/A",
        location: "Loznica, Serbia",
        completed: false, 
        image1: "N/A",
        image2: "N/A",
        text: "lorem ipsum"
    },
  ],
}));

describe('SearchCards', () => {
    it('Filtrira festivale po sadrzaju u Search-u', () => {
        render(
        <AuthProvider>
          <BrowserRouter>           
              <SearchCards />
          </BrowserRouter>
        </AuthProvider>);
    
        const searchInput = screen.getByPlaceholderText('Search for festivals!');
        fireEvent.change(searchInput, { target: { value: 'exit' } });
    
        expect(screen.getByText('Exit Festival')).toBeInTheDocument();
        expect(screen.queryByText('Primavera Festival')).not.toBeInTheDocument();
      });
});