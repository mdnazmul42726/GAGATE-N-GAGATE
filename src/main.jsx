// Import necessary dependencies and components from libraries and local files
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

// Create a router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    // Define the root route '/'
    path: "/", element: <Main />, errorElement: <ErrorPage />,

    // Specify child routes for the root route
    children: [
      // Define an error route for the root route
      { errorElement: <ErrorPage /> },

      // Define a route for the home page '/'
      { path: "/", element: <Home /> },

      // Define a route for the products page '/products'
      {
        // Specify a loader function to fetch data from a dummy API
        loader: () => fetch(`https://dummyjson.com/products`),
        path: "/products",
        element: <Prodacts />,
      },

      // Define a route for viewing individual product details '/products/:id'
      {
        // Specify a loader function to fetch product details using 'id' parameter
        loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`),
        path: "/products/:id",
        element: <ProductDetail />,
      },

      // Define a route for the login page '/login'
      { path: "/login", element: <Login /> },

      // Define a route for the dashboard section '/dashbord'
      {
        path: "/dashbord",
        element: <Dashbord />,

        // Specify child routes for the dashboard section
        children: [
          // Define a route for the user profile page '/dashbord/profile'
          { path: "/dashbord/profile", element: <Profile /> },

          // Define a route for editing user profile '/dashbord/edit-profile'
          { path: "/dashbord/edit-profile", element: <Edit /> },

          // Define a route for the user's blog page '/dashbord/blog'
          { path: "/dashbord/blog", element: <Blog /> },
        ]
      }
    ]
  },
]);

// Render the application using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provide the router configuration to the entire application */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
