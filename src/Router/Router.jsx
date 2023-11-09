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
            element: <AddBook></AddBook>
        },
        {
            path: "/allBooks",
            element: <AllBooks></AllBooks>,
            loader: () => fetch('https://e-readers-server.vercel.app/api/v1/category-books/category_name')
        },
        {
            path: "/borrowedBooks",
            element: <BorrowedBooks></BorrowedBooks>,
            loader: () => fetch('https://e-readers-server.vercel.app/api/v1/borrow-books')
        },
        {
          path: "/categories/:cat_name",
          element: <SingleCategoryBooks></SingleCategoryBooks>
        },
        {
          path: "/book-details/:id",
          element: <BookDetails></BookDetails>,
          loader: ({params}) => fetch(`https://e-readers-server.vercel.app/api/v1/category-books/category_name/${params.id}`)
        },
        {
          path: "/return/:id",
          element: <ReturnBook></ReturnBook>,
          loader: ({params}) => fetch(`https://e-readers-server.vercel.app/api/v1/category-books/category_name/${params.id}`)
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