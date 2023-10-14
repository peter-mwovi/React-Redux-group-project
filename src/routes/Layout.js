import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';  

const Layout = () => (
  <>
   {/* nav tag here  */}
    <Outlet />
  </>
);

export default Layout;
