import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { CatalogPage } from "@/pages/CatalogPage/CatalogPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <CatalogPage/>
            }
        ]
    }
]);
