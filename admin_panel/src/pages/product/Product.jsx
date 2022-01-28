import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
export default function Product() {
    return (<div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
                <button className="productAddButton">Create</button>
            </Link>

        </div>
        <div className="productTop">
            <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img 
                    src="https://media.istockphoto.com/photos/airpod-with-black-background-picture-id1254998855?b=1&k=20&m=1254998855&s=170667a&w=0&h=YJy6_99mPI8dbVoRAJ2CKU_aNhH5EjEeVFN15zSjpUw=" 
                    alt="Apple Ipods" 
                    className="productInfoImg" />
                    <span className="productName" >Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="productBottom"></div>
    </div>);
}
