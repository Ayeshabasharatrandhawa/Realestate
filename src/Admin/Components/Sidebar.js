import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Menu</h2>
      <ul>
      <li><Link to="/admin/dashboard">Dashboard</Link></li>
<li><Link to="/admin/add-agent">Add Agent</Link></li>
<li><Link to="/admin/users">User List</Link></li>
<li><Link to="/admin/add-property">Add Property</Link></li>
<li><Link to="/admin/properties">Property List</Link></li>
<li><Link to="/admin/inquiries">Inquiries</Link></li>
<li><Link to="/admin/settings">Settings</Link></li>

      </ul>
    </div>
  );
};

export default Sidebar;
