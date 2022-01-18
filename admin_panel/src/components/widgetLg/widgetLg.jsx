import "./widgetLg.css"

export default function widgetLg() {
    const Button=({type})=>{
        return <button className={"widgetLgBtn "+ type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Jenushanth</span>
                    </td>
                    <td className="widgetLgDate">1 Feb 2022</td>
                    <td className="widgetLgAmount">$100</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="img1" className="widgetLgImg" />
                        <span className="widgetLgName">Jenushanth</span>
                    </td>
                    <td className="widgetLgDate">1 Feb 2022</td>
                    <td className="widgetLgAmount">$100</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="img2" className="widgetLgImg" />
                        <span className="widgetLgName">Jenushanth</span>
                    </td>
                    <td className="widgetLgDate">1 Feb 2022</td>
                    <td className="widgetLgAmount">$100</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="img3" className="widgetLgImg" />
                        <span className="widgetLgName">Jenushanth</span>
                    </td>
                    <td className="widgetLgDate">1 Feb 2022</td>
                    <td className="widgetLgAmount">$100</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="img4" className="widgetLgImg" />
                        <span className="widgetLgName">Jenushanth</span>
                    </td>
                    <td className="widgetLgDate">1 Feb 2022</td>
                    <td className="widgetLgAmount">$100</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
