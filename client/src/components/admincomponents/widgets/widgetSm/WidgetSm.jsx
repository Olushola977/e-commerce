import './WidgetSm.css';
import {LadyStyle} from '../../../../images';
import { Visibility } from '@material-ui/icons';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={LadyStyle} alt="profile" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Mimi Collection</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon' />
                  Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={LadyStyle} alt="profile" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Mimi Collection</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon' />
                  Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={LadyStyle} alt="profile" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Mimi Collection</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon' />
                  Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={LadyStyle} alt="profile" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Mimi Collection</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon' />
                  Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={LadyStyle} alt="profile" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Mimi Collection</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon' />
                  Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm