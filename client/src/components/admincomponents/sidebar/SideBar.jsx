import './SideBar.css';
import { BarChart, ChatBubbleOutline, DynamicFeed, Home, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sideBarWrapper">
            <div className="sideBarMenu">
                <h3 className="sideBarTitle">Dashboard</h3>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <Home className='sideBarIcon' />
                        Home
                    </li>
                    <li className="sideBarListItem">
                        <Timeline className='sideBarIcon' />
                        Analytics
                    </li>
                    <li className="sideBarListItem">
                        <TrendingUp className='sideBarIcon' />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sideBarMenu">
                <h3 className="sideBarTitle">Quick Menu</h3>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <PermIdentity className='sideBarIcon' />
                        Users
                    </li>
                    <li className="sideBarListItem">
                        <Storefront className='sideBarIcon' />
                        Store
                    </li>
                    <li className="sideBarListItem">
                        <BarChart className='sideBarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sideBarMenu">
                <h3 className="sideBarTitle">Notifications</h3>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <MailOutline className='sideBarIcon' />
                        Mail
                    </li>
                    <li className="sideBarListItem">
                        <DynamicFeed className='sideBarIcon' />
                        Feedback
                    </li>
                    <li className="sideBarListItem">
                        <ChatBubbleOutline className='sideBarIcon' />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sideBarMenu">
                <h3 className="sideBarTitle">Staff</h3>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <WorkOutline className='sideBarIcon' />
                        Manage
                    </li>
                    <li className="sideBarListItem">
                        <Timeline className='sideBarIcon' />
                        Analytics
                    </li>
                    <li className="sideBarListItem">
                        <Report className='sideBarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar