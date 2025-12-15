import { Route, Routes } from "react-router-dom";
import { Summary } from "./Summary.jsx";
import { WatchList } from "./WatchList.jsx";
import { Holdings } from "./Holdings.jsx";
import { Funds } from "./Fund.jsx";
import { Order } from "./Order.jsx";
import { Position } from "./Position.jsx";
import { Apps } from "./Apps.jsx";
export const Dashboard = () => {
  return (
    <div ckassName="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/order" element={<Order />} />
          <Route path="/holding" element={<Holdings />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};
