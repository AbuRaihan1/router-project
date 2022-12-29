import React from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Books = () => {
  const LoadbooksData = useLoaderData();
  const booksData = LoadbooksData.books;
 
  return (
    <div className="booksWrapper">
      {booksData.map((book) => (
        <Book book={book} key={book.isbn13}></Book>
      ))}
    </div>
  );
};

export default Books;
