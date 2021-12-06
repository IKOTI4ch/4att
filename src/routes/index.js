import Login from "../components/Login";
import Home from "../components/Home";


export const notAuthRoutes = [
    {
        path: '/login',
        element: Login,
    },
]

export const authRoutes = [
    {
        path: '/home',
        element: Home,
    },
]