import React from "react";
import Sidebar from "../Components/Sidebar";
import DashboardNavbar from "../Components/DashboardNavbar";


const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardNavbar />
      <Sidebar />
      <main className="dashboard-content">
        <h1>Welcome to Admin Dashboard</h1>
        <p>Manage your real estate platform efficiently.</p>
      </main>
    </div>
  );
};

export default AdminDashboard;
