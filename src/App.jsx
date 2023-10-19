import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
