import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Login/SignUp";
import SignIn from "../Pages/Login/SignIn";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowBook from "../Pages/BorrowBook/BorrowBook";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../Pages/Error/Error";
import DetailsCard from "../Components/BookDetails/DetailsCard";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import ReadBook from "../Components/BookCard/ReadBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addbook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "allbooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: `borrowbook/:id`,
        element: (
          <PrivateRoute>
            <BorrowBook></BorrowBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/categoryDetails/:id",
        element: <CategoryDetails></CategoryDetails>,
      },
      {
        path: "/readbook",
        element: <ReadBook></ReadBook>,
      },
      {
        path: "bookdetails/:id",
        element: <DetailsCard></DetailsCard>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
export default router;
