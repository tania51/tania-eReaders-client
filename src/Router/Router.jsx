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
import SingleCategoryBooks from "../components/Categories/SingleCategoryBooks";
import BookDetails from "../components/Categories/BookDetails";
import ReturnBook from "../components/ReturnBook";
import ReadBook from "../components/ReadBook";
import PrivateRoute from "../Router/PrivateRoute"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://e-readers-server.vercel.app/api/v1/all-books')
        },
        {
            path: "/addBook",
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
            path: "/allBooks",
            element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
            loader: () => fetch('https://e-readers-server.vercel.app/api/v1/category-books/category_name')
        },
        {
            path: "/borrowedBooks",
            element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
            loader: () => fetch('https://e-readers-server.vercel.app/api/v1/borrow-books')
        },
        {
          path: "/categories/:cat_name",
          element: <PrivateRoute><SingleCategoryBooks></SingleCategoryBooks></PrivateRoute>
        },
        {
          path: "/book-details/:id",
          element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://e-readers-server.vercel.app/api/v1/category-books/category_name/${params.id}`)
        },
        {
          path: "/return/:id",
          element: <PrivateRoute><ReturnBook></ReturnBook></PrivateRoute>,
          loader: ({params}) => fetch(`https://e-readers-server.vercel.app/api/v1/category-books/category_name/${params.id}`)
        },
        {
          path: "/read/:id",
          element: <PrivateRoute><ReadBook></ReadBook></PrivateRoute>,
          loader: () => fetch('https://e-readers-server.vercel.app/api/v1/category-books/category_name')
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