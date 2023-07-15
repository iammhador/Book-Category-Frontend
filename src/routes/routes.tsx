/* eslint-disable @typescript-eslint/restrict-template-expressions */
import SingleBookDetails from "../components/SingleBookDetails";
import AddNewBooks from "../components/pages/AddNewBooks";
import AllBooks from "../components/pages/AllBooks";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import MainLayout from "../library/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <div>404</div> },
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/all-books", element: <AllBooks /> },
      {
        path: "/singleBook/:id",
        element: <SingleBookDetails />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/singleBook/${params.id}`);
        },
      },
      { path: "/add-new-books", element: <AddNewBooks /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
