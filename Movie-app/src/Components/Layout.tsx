import { Outlet } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
};
