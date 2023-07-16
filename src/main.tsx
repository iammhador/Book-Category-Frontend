import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
