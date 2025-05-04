import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import News from "../Components/News/News";
import Auth from "../Layout/Auth";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Loading from "../Components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/news/:id",
        Component: News,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading/>,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading/>,
  },
]);
