import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <nav className="NavArea">
        <h3 className="navLogo">Bookshop</h3>
        <div className="navLink">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/book">Books</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
