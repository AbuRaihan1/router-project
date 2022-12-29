import React from "react";
import { useLoaderData } from "react-router";

const BookDetails = () => {
  const singleBookData = useLoaderData();
  console.log(singleBookData);
  const { image, authors, desc, pages, price, publisher, title, year, rating } =
    singleBookData;
  return (
    <div>
      <div className="bookDescWrapper">
        <div className="bookSide">
          <img src={image} alt="" />
        </div>
        <div className="bookdesc">
          <h3>{title}</h3>
          <p>Authors : {authors}</p>
          <p>Publisher : {publisher}</p>
          <p>Year : {year}</p>
          <p>Rating : {rating}</p>
          <p>{desc}</p>
          <div className="buttonSide">
            <button>Download PDF</button>
            <p>Price : {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
