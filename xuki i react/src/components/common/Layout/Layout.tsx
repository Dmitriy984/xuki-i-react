import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="page-wrapper">
    <Header />
    <main className="main-content">
      <div className="container">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);
export default Layout;
