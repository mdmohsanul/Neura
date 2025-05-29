// router.js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
    ],
  },
]);

export default appRouter;
