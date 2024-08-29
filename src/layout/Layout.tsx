import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;