/* eslint-disable @typescript-eslint/restrict-template-expressions */
import EditYourBook from "../components/EditYourBook";
import SingleBookDetails from "../components/SingleBookDetails";
import AddNewBooks from "../components/pages/AddNewBooks";
import AllBooks from "../components/pages/AllBooks";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import YourBooks from "../components/pages/YourBooks";
import MainLayout from "../library/MainLayout";
import Wishlist from "../components/pages/Wishlist";
import { createBrowserRouter } from "react-router-dom";
import Reading from "../components/pages/Reading";
import Finished from "../components/pages/Finished";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <div>404</div> },
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/all-books", element: <AllBooks /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/reading", element: <Reading /> },
      { path: "/finished", element: <Finished /> },
      {
        path: "/singleBook/:id",
        element: <SingleBookDetails />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/singleBook/${params.id}`);
        },
      },
      {
        path: "/edit-your-book/:id",
        element: <EditYourBook />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/singleBook/${params.id}`);
        },
      },
      { path: "/add-new-books", element: <AddNewBooks /> },
      { path: "/your-added-books", element: <YourBooks /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
