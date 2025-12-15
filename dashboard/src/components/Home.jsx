import { Outlet } from "react-router-dom";
import { Dashboard } from "./Dashboard.jsx";
import { TopBar } from "./TopBar.jsx";

export const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};
