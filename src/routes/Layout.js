import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
