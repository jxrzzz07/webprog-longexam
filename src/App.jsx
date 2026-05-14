import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layouts/Layout";
import ProductPage from "./pages/LandingPages/ProductPage";
import HomePage from "./pages/LandingPages/HomePage";
import AboutPage from "./pages/LandingPages/AboutPage";
import ProductListPage from "./pages/LandingPages/ProductListPage";

import AuthLayout from "./layouts/AuthLayout";
import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";

import DashLayout from "./layouts/DashLayout";
import DashboardPage from "./pages/DashboardPages/DashboardPage";
import ReportsPage from "./pages/DashboardPages/ReportsPage";
import UsersPage from "./pages/DashboardPages/UsersPage";

import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "products",
        element: <ProductListPage />,
      },
      {
        path: "products/:name",
        element: <ProductPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },

  {
    path: "/auth/signin",
    element: (
      <AuthLayout>
        <SignInPage />
      </AuthLayout>
    ),
  },

  {
    path: "/auth/signup",
    element: (
      <AuthLayout>
        <SignUpPage />
      </AuthLayout>
    ),
  },

  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;