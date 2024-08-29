import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { useEffect } from 'react';
import { Home } from './pages/home/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
function App() {

  useEffect(() => {
    
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
