import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddCoffee from "../pages/addCoffee";
import CoffeeDetails from "../pages/Coffeedetails";
import UpdateCoffee from "../pages/UpdateCoffee";
import NotFound from "../pages/NotFound";
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
        path: "/addCoffee",
        element: <AddCoffee />
      },
      {
        path: "/singleCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/coffee/${params.id}`
          ),
        element: <CoffeeDetails />
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/coffee/${params.id}`
          ),
        element: <UpdateCoffee />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ],
  },
]);
