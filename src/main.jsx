import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Pages/Home/main";
import Home from "./components/Pages/Home/Home";
import ErrorPage from "./components/Error/Error";
import Prodacts from "./components/Pages/Prodacts/Prodacts";
import ProductDetail from "./components/Pages/Prodacts/ProductDetail";
import Dashbord from "./components/Dashbord/Dashbord";
import Profile from "./components/Pages/Dashbord/Profile";
import Edit from "./components/Pages/Dashbord/Edit";
import Blog from "./components/Pages/Dashbord/Blog";
import Pass from "./components/Pages/Dashbord/Pass";
import Login from "./components/Error/Login";


const router = createBrowserRouter([
  {
    path: "/", element: <Main />, errorElement: <ErrorPage />,
    children: [
      { errorElement: <ErrorPage /> },
      { path: "/", element: <Home /> },
      { loader: () => fetch(`https://dummyjson.com/products`), path: "/products", element: <Prodacts />, },
      { loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`), path: "/products/:id", element: <ProductDetail /> },
      { path: "/login", element: <Login /> },
      {
        path: "/dashbord", element: <Dashbord />,
        children: [
          { path: "/dashbord/profile", element: <Profile /> },
          { path: "/dashbord/edit-profile", element: <Edit /> },
          { path: "/dashbord/blog", element: <Blog /> },
        ]
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);