// import { holdings } from "../data/data.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph.jsx";
export const Holdings = () => {
  const [allholdings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get("http://localhost:3000/allholdings");
        setAllHoldings(res.data);
        console.log("API RESPONSE:", res.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
        setError(err.message || "Failed to fetch holdings");
        if (err.response) {
          console.error("Response error:", err.response.data);
          setError(`Error: ${err.response.status} - ${err.response.statusText}`);
        } else if (err.request) {
          console.error("Request error:", err.request);
          setError("Network error: Could not connect to backend server");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchHoldings();
  }, []);

  const labels = allholdings.map((stock) => stock?.name).filter(Boolean);
  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allholdings.map((stock) => stock?.price || 0).filter(price => price > 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  console.log(data);

  if (loading) {
    return (
      <>
        <h3 className="title">Holdings</h3>
        <div style={{ padding: "20px", textAlign: "center" }}>Loading holdings...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h3 className="title">Holdings</h3>
        <div style={{ padding: "20px", color: "red" }}>
          <p>Error: {error}</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            Please make sure the backend server is running on http://localhost:3000
          </p>
        </div>
      </>
    );
  }

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
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg?.toFixed(2) || "N/A"}</td>
                <td>{stock.price?.toFixed(2) || "N/A"}</td>
                <td>{curVal.toFixed(2)}</td>
                <td className={profClass}>
                  {(curVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net || "N/A"}</td>
                <td className={dayClass}>{stock.day || "N/A"}</td>
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
      <VerticalGraph data={data} />
    </>
  );
};
