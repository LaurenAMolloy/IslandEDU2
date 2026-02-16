import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/NavBar'; 
import Footer from '../organisms/Footer'; 

export default function MainLayout() {
  return (
    <div className="app-wrapper">
      <Navbar /> 
      
      <main className="content-area">
        {/* This is where Home, SchoolSearch, or 404 will appear */}
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
}