import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/books" className={({ isActive }) => (isActive ? 'active' : '')}>
        Книги
      </NavLink>
      <NavLink to="/readers" className={({ isActive }) => (isActive ? 'active' : '')}>
        Читатели
      </NavLink>
    </nav>
  </header>
);
export default Header;
