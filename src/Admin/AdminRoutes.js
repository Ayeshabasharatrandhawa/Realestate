import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout"; 
import AdminDashboard from "./Pages/AdminDashboard";
import AddAgent from "./Pages/AddAgent";
import AllAgents from "./Pages/AllAgents";
import AddProperty from "./Pages/AddProperty";
import PropertyList from "./Pages/PropertyList";
import CustomerList from "./Pages/CustomerList";
import Orders from "./Pages/Orders";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        
        <Route path="dashboard" element={<AdminDashboard />} />

        
        <Route path="add-agent" element={<AddAgent />} />
        <Route path="all-agents" element={<AllAgents />} />

        
        <Route path="add-property" element={<AddProperty />} />
        <Route path="property-list" element={<PropertyList />} />

        
        <Route path="customers" element={<CustomerList />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;