import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import BookDetails from "./BookDetails";
import Books from "./Books";
import ErrorMsg from "./ErrorMsg";
import Home from "./Home";
import Main from "./Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorMsg></ErrorMsg>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      {
        path: "/books",
        element: <Books></Books>,
        loader: async () => {
          return fetch(`https://api.itbook.store/1.0/new`);
        },
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: async ({ params }) => {
          return fetch(`https://api.itbook.store/1.0/books/${params.bookId}`);
        },
      },
    ],
  },
]);
export default router;
