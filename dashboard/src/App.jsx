import "./App.css";
import { Home } from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Summary } from "./components/Summary.jsx";
import { Orders } from "./components/Order.jsx";
import { Holdings } from "./components/Holdings.jsx";
import { Positions } from "./components/Position.jsx";
import { Funds } from "./components/Fund.jsx";
import { Apps } from "./components/Apps.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
