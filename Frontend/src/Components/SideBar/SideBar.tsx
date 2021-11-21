import React from "react";
import { NavLink } from "react-router-dom";

import "./SideBar.scss";

interface SideBarProps{
  showSideBar: boolean
}

const SideBar: React.FC<SideBarProps> = ({ showSideBar }) => {
  return (
    <nav className={showSideBar ? "nav-menu active" : "nav-menu"}>
      <li>
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </li>
    </nav>
  );
};

export default SideBar;
