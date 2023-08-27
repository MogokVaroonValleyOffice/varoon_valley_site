import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter(
  [{ path: "/", element: <HomePage />, errorElement: <ErrorPage /> }],
  { basename: "/" }
);

export default router;
