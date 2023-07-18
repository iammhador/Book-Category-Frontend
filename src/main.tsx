import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
