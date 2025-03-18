import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false); // Initially closed

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="sidebar-toggle d-md-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <i className="bi bi-list"></i>
      </div>

      {/* Overlay when Sidebar is open */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* Sidebar */}
      <div className={`sidebar d-flex flex-column p-3 ${sidebarOpen ? 'show' : ''}`}>
        {/* Dashboard */}
        <div className={`menu-item ${openMenu === 'dashboard' ? 'active' : ''}`} onClick={() => toggleMenu('dashboard')}>
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </div>
        {openMenu === 'dashboard' && (
          <div className="dropdown-list">
            <Link to="/admin/customers" className="dropdown-item">
              <i className="bi bi-people"></i> Customers List
            </Link>
            <Link to="/admin/orders" className="dropdown-item">
              <i className="bi bi-cart4"></i> Orders
            </Link>
          </div>
        )}

        {/* Agents Section */}
        <div className={`menu-item ${openMenu === 'agents' ? 'active' : ''}`} onClick={() => toggleMenu('agents')}>
          <i className="bi bi-person"></i>
          <span>Agents</span>
        </div>
        {openMenu === 'agents' && (
          <div className="dropdown-list">
            <Link to="/admin/add-agent" className="dropdown-item">
              <i className="bi bi-person-plus"></i> Add Agent
            </Link>
            <Link to="/admin/all-agents" className="dropdown-item">
              <i className="bi bi-person-lines-fill"></i> All Agents
            </Link>
          </div>
        )}

        {/* Property Section */}
        <div className={`menu-item ${openMenu === 'property' ? 'active' : ''}`} onClick={() => toggleMenu('property')}>
          <i className="bi bi-layers"></i>
          <span>Property</span>
        </div>
        {openMenu === 'property' && (
          <div className="dropdown-list">
            <Link to="/admin/add-property" className="dropdown-item">
              <i className="bi bi-plus-square"></i> Add Property
            </Link>
            <Link to="/admin/property-list" className="dropdown-item">
              <i className="bi bi-list-ul"></i> Property List
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;