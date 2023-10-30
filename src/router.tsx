import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { Cards } from "pages/decks/cards";
import { Decks } from "pages/decks/decks";
import { Layout } from "pages/layout";
import { Login } from "pages/login/login";
import { SignUpPage } from "pages/sign-up";
import { useMeQuery } from "services/auth/auth.service";

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Decks />,
  },
  {
    path: "/cards/:deckID",
    element: <Cards />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery();
  const isAuthenticated = !isError;

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
