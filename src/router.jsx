import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home"; // Ensure Home is correctly imported
import Developer from "./pages/Developer"; // Ensure Developer is correctly imported
import Members from "./pages/Members"; // Ensure Members is correctly imported
import Pagenotfound from "./pages/Pagenotfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Default route inside children (instead of `path: "/"`)
        element: <Home />,
      },
      {
        path: "/developer",
        element: <Developer />,
      },
      {
        path: "/team-members",
        element: <Members />,
      },
    ],
    errorElement: <Pagenotfound />, // Handles unknown routes automatically
  },
]);

export default router;
