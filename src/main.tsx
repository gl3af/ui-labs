import App from "@/App.tsx";
import "@/index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { links } from "@/mocks.tsx";
import { store } from "@/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = links.map((link) => ({
  path: link.path,
  element: link.element,
}));
routes.unshift({ path: "/", element: <App /> });

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
