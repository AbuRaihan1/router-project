import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Book = ({ book }) => {
  const { image, isbn13, price, subtitle, title, url } = book;
  return (
    <div className="bookItemWrapper">
      <Link className="individualBook" to={`/book/${isbn13}`}>
        <h3 className="title">{title}</h3>
        <button className="showDetails">Show Details</button>
        <img src={image} alt="" />
      </Link>
    </div>
  );
};

export default Book;
