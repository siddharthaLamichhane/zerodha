// import { holdings } from "../data/data.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
export const Holdings = () => {
  const [allholdings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allholdings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Holdings ({allholdings.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>Cur.</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day Chg.</th>
          </tr>
          {allholdings.map((stock, index) => {
            const curVal = stock.price * stock.qty;
            const isProfit = curVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "Profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "Profit";

            return (
              <tr key={index}>
                <th>{stock.name}</th>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curVal.toFixed(2)}</td>
                <td className={profClass}>
                  {(curVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};
