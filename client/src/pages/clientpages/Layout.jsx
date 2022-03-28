import Announcement from 'components/clientcomponents/Announcement';
import Navbar from 'components/clientcomponents/Navbar';
import Footer from 'components/clientcomponents/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout