import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginFake from "./pages/LoginFake";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <LoginFake />,
  },
]);