import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Products from "./pages/Products.jsx";
import Products_Details from "./pages/Products_Details.jsx";
import Favorites from "./pages/Favorites.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <Products_Details />,
      },
      {
        path:"/favorites",
        element:<Favorites/>
      }
    ],
  },
]);

export default appRouter;
