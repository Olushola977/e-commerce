import Chart from '../../../components/admincomponents/chart/Chart';
import FeaturedInfo from '../../../components/admincomponents/featuredInfo/FeaturedInfo';
import WidgetLg from '../../../components/admincomponents/widgets/widgetLg/WidgetLg';
import WidgetSm from '../../../components/admincomponents/widgets/widgetSm/WidgetSm';
import { data } from '../../../chartData';
import './Home.css';

const Home = () => {
  return (
    <div>
        <FeaturedInfo />
        <Chart data={data} datakey='Active User' title='User Analytics' grid />
        <div className="homeWidget">
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
  )
}

export default Home