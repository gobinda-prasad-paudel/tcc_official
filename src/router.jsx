import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import Members from "./pages/Members";
import Pagenotfound from "./pages/Pagenotfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Default route
        element: <Home />,
      },
      {
        path: "developer", // ✅ No leading slash
        element: <Developer />,
      },
      {
        path: "team-members", // ✅ No leading slash
        element: <Members />,
      },
      {
        path: "*", // ✅ Catch-all route for 404 pages
        element: <Pagenotfound />,
      },
    ],
  },
]);

export default router;
