import { Header } from "components/ui/header/header";
import { Cards } from "pages/decks/cards";
import { Decks } from "pages/decks/decks";
import { Login } from "pages/login";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { useGetDecksQuery } from "./services/decks";

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Decks />,
  },
  { path: "/cards/:deckID", element: <Cards /> },
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
  const { isLoading, isError } = useGetDecksQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <RouterProvider router={router} />;
};

function PrivateRoutes() {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function Layout() {
  return (
    <div>
      <Header variant={"with avatar"} />
      <Outlet />
    </div>
  );
}
