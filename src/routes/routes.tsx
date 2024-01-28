import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routesGenerator from "../utils/generateRoutes";
import SideRoutes from "./routes.user";
import Register from "../pages/Register";
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: routesGenerator(SideRoutes)
    },
    {
        path: '/login',
        element: <Login />,

    },
    {
        path: '/register',
        element: <Register />,
    }

])

export default router