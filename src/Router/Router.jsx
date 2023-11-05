import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home";
import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks"
import BorrowedBooks from "../Pages/BorrowedBooks";
import Login from "../Auth/Login";
import Layout from "../Layout/Layout";
import Registration from "../Auth/Registration";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/addBook",
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
            path: "/allBooks",
            element: <AllBooks></AllBooks>
        },
        {
            path: "/borrowedBooks",
            element: <BorrowedBooks></BorrowedBooks>
        }
      ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Registration></Registration>
    }
  ]);

export default router;