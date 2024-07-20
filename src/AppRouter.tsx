import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "@/layout/navbar";
import Home from "@/pages/Home";


const AppLayout = () => {
    return (
        <div className="appLayout">
            <Navbar />
            <Outlet />
        </div>
    )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppRouter: any = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    }])