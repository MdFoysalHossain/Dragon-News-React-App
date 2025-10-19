import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home Page</h1>
    },
    {
        path: "/auth",
        element: <h1>Authentication Page</h1>
    },
    {
        path: "/news",
        element: <h1>News Page</h1>
    },
    {
        path: "/*",
        element: <h1>Error 404 Page</h1>
    },
]);

export default router;