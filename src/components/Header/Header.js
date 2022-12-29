import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./header.css";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navHandler = () => {
    setNavOpen(!navOpen);
    // let selectNav = document.querySelector(".navLink");
    let selectHeader = document.querySelector(".NavArea");
    if (!navOpen) {
      selectHeader.style.display = "flex";
      // selectNav.classList.add("NavArea");
    } else {
      selectHeader.style.display = "none";
      // selectHeader.classList.add("showNavbar");
    }
  };

  return (
    <div>
      <div className="smallNavBar">
        <h2>Book Shop</h2>
        <div>
          {navOpen ? (
            <XMarkIcon className="closeIcon" onClick={navHandler} />
          ) : (
            <Bars2Icon className="Bars2Icon" onClick={navHandler} />
          )}
        </div>
      </div>
      <nav className="NavArea">
        <h3 className="navLogo">Book Shop</h3>
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
