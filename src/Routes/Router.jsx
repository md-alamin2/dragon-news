import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import News from "../Components/News/News";

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
        hydrateFallbackElement: (
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ),
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);
