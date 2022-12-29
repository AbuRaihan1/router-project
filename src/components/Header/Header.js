import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <nav className="NavArea">
        <h3 className="navLogo">Bookshop</h3>
        <div className="navLink">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/books">Books</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
