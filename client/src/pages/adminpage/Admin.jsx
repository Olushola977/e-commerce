import TopBar from '../../components/admincomponents/topbar/TopBar';
import SideBar from '../../components/admincomponents/sidebar/SideBar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <TopBar />
      <div className='container'>
        <SideBar />
        <div className='others'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Admin