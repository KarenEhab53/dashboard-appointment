import React, { useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets_admin/assets';

const SideBar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('/'); // Track the active route

  const handleNavigation = (path) => {
    setActiveItem(path); // Set the clicked path as active
    navigate(path); // Navigate to the path
  };

  return (
    <div className="sidebar-container">
      <ul className="list">
        <div
          onClick={() => handleNavigation('/')}
          className={`data ${activeItem === '/' ? 'active' : ''}`}
        >
          <img src={assets.home_icon} alt="" />
          <p className="text">Dashboard</p>
        </div>
        <div
          onClick={() => handleNavigation('/appointment')}
          className={`data ${activeItem === '/appointment' ? 'active' : ''}`}
        >
          <img src={assets.appointment_icon} alt="" />
          <p className="text">Appointments</p>
        </div>
        <div
          onClick={() => handleNavigation('/adddoctor')}
          className={`data ${activeItem === '/adddoctor' ? 'active' : ''}`}
        >
          <img src={assets.add_icon} alt="" />
          <p className="text">Add Doctor</p>
        </div>
        <div
          onClick={() => handleNavigation('/alldoctors')}
          className={`data ${activeItem === '/alldoctors' ? 'active' : ''}`}
        >
          <img src={assets.people_icon} alt="" />
          <p className="text">Doctors List</p>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
