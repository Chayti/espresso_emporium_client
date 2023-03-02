import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import BookDetails from "../pages/Bookdetails";
import UpdateBook from "../pages/UpdateBook";
export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/addBook",
        element: <AddBook />
      },
      {
        path: "/singleBook/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/singleBook/${params.id}`
          ),
        element: <BookDetails />
      },
      {
        path: "/updateBook/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/singleBook/${params.id}`
          ),
        element: <UpdateBook />
      }
    ],
  },
]);
