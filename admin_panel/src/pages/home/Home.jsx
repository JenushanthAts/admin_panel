
import "./home.css";
import Featuredinfo from "../../components/featuredInfo/featuredinfo";
import Chart from "../../components/chart/Chart";
import {userData} from "../../dummyData"
import WidgetLg from "../../components/widgetLg/widgetLg";
import WidgetSm from "../../components/widgetSm/widgetSm"
export default function Home() {
    // console.log(userData);
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
