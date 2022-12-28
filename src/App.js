import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Book from "./components/Book";
import ErrorMsg from "./components/ErrorMsg";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Main from "./components/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorMsg></ErrorMsg>,
      children: [
        { index:true, path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/book", element: <Book></Book> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
