import { Route, Routes } from "react-router-dom";
import { Summary } from "./Summary.jsx";
import { WatchList } from "./WatchList.jsx";
import { Holdings } from "./Holdings.jsx";
import { Funds } from "./Fund.jsx";
import { Orders } from "./Order.jsx";
import { Positions } from "./Position.jsx";
import { Apps } from "./Apps.jsx";
export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};
