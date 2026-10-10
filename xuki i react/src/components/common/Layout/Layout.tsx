import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css'; 

const Layout: React.FC = () => {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <nav>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active-link' : ''} 
            end
          >
            Главная
          </NavLink>
          <NavLink 
            to="/books" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Книги
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet /> 
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Библиотека приложений</p>
      </footer>
    </div>
  );
};

export default Layout;
