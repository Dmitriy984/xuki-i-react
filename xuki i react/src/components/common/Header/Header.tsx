import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>📚</span>
          <span>Библиотека</span>
        </div>
        <nav className={styles.nav}>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            📖 Книги
          </NavLink>
          <NavLink
            to="/readers"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            👥 Читатели
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
