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
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import PDFFile from "../Components/PDFFile/PDFFile";
import MyPDFViewer from "../Components/PDFFile/PDFFile";
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
        path: `updatebook/:id`,
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
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
        path: "borrowedbook",
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
        element: (
          <PrivateRoute>
            <MyPDFViewer></MyPDFViewer>
            {/* <PDFFile></PDFFile> */}
            {/* <ReadBook></ReadBook> */}
          </PrivateRoute>
        ),
      },
      {
        path: "bookdetails/:id",
        element: (
          <PrivateRoute>
            <DetailsCard></DetailsCard>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
export default router;
