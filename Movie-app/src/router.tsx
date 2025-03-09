import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Movies } from "./Pages/Movies";
import { ErrorPage } from "./Pages/ErrorPage";
import { Favorites } from "./Pages/Favorites";
import { TvSeries } from "./Pages/TvSeries";
import { Layout } from "./Components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/movies",
        element: <Movies />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
