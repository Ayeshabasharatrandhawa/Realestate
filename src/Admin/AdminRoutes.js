import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./Pages/AdminDashboard"; // Ensure this is correct
import AddAgent from "./Pages/AddAgent";
import UserList from "./Pages/UserList";
import AddProperty from "./Pages/AddProperty";
import ManageProperties from "./Pages/ManageProperties";
import Inquiries from "./Pages/Inquiries";
import Settings from "./Pages/Settings";
import Sidebar from "./Components/Sidebar";
import DashboardNavbar from "./Components/DashboardNavbar";



const AdminRoutes = () => {
  return (
    <Routes>
      <Route>
        <Sidebar/>
        <DashboardNavbar/>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-agent" element={<AddAgent />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/add-property" element={<AddProperty />} />
        <Route path="/admin/properties" element={<ManageProperties />} />
        <Route path="/admin/inquiries" element={<Inquiries />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
