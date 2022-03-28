import './Topbar.css';
import {Language, NotificationsNone, Settings} from '@material-ui/icons';
import {LadyStyle} from '../../../images';

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="left">
          <span className="logo">StoreAdmin</span>
        </div>
        <div className="right">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img src={LadyStyle} alt='profile image' className='avatar' />
        </div>
      </div>
    </div>
  )
}

export default TopBar