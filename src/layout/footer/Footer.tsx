import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const Footer = () => {

  const { user, logout } = useAuth();

  const Links = [
    { href: "/", name: "Home" },
    { href: "/blog", name: "Blog" },
    { href: "/contact", name: "Contact" },
  ];
  return (
    <footer className="left-0 bottom-0 w-full rounded-md shadow text-white bg-blue-600">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to='/' onClick={window.location.reload}>
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <MusicalNoteIcon className='w-7 h-7 text-white'/>
            <span>FestiFind</span>
          </div>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {Links.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className='text-white hover:underline me-4 md:me-6'>{link.name}</Link>
              </li>
            ))}
            {user ? (
            <li className='md:my-0 my-7 font-semibold'>
              <button onClick={logout} className='text-white hover:underline'>
                Sign Out
              </button>
            </li>
          ) : (
            <li className=' md:my-0 my-7 font-semibold'>
              <Link to="/login" className='text-white hover:underline'>
                Log In
              </Link>
            </li>
          )}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 FestiFind™</span>
      </div>
    </footer>
  );
};
