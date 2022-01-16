
import "./home.css";
import Featuredinfo from "../../components/featuredInfo/featuredinfo";
import Chart from "../../components/chart/Chart";
export default function Home() {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart/>
        </div>
    )
}
