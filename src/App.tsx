import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { useEffect } from 'react';
import { Home } from './pages/home/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FestivalDetails from './pages/FestivalDetails';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';

function App() {

  useEffect(() => {
    
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="festivalinfo" element={<FestivalDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
