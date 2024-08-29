import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);

    if (isRegister) {
      console.log('Registering user...');
      setUser(email);
      navigate('/'); 
    } else {
      console.log('Logging in user...');
      setUser(email);
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-300 to-white">
      <div className="w-full max-w-md bg-white bg-opacity-80 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          {isRegister ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          {isRegister ? 'Please enter your details to sign up.' : 'Please enter your credentials to log in.'}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              {isRegister ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-red-600 hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
        <div className="text-center mt-2">
          <Link 
            to="/contact" 
            className="text-blue-600 hover:text-red-600 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 hover:text-red-600 hover:scale-105 transition-all duration-300"
          >
            {isRegister ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;