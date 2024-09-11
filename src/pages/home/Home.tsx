import React from 'react';
import { Link } from 'react-router-dom';
import { SearchCards } from '../../components/SearchCards';
import { useAuth } from '../../context/AuthContext';
import Greet from '../../components/Greet';

export const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center flex-col container mx-auto mb-20 mt-20">
      <div className="text-center mb-12">
        <h1 className="font-bold text-5xl mb-4">FestiFind</h1>
        <p className="text-xl">
          Your go-to app for finding the hottest music festivals and concerts around the globe.
        </p>
        <Greet name={user} />
      </div>
      <SearchCards />
      <div className="mt-8">
        <Link 
          to="/blog" 
          className="text-blue-600 hover:text-red-600 hover:scale-105 transition-all duration-300 font-semibold"
        >
          Check out our latest blog posts!
        </Link>
      </div>
    </div>
  );
};