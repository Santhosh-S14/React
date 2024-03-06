import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RouterError from "./components/RouterError";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouterError />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <RouterError />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <RouterError />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
        errorElement: <RouterError />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
        errorElement: <RouterError />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
