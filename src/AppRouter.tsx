import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "@/layout/navbar";
import Home from "@/pages/Home";
import Program from "@/pages/Program";
import Committee from "@/pages/Committee";


const AppLayout = () => {
    return (
        <div className="appLayout">
            <Navbar />
            <Outlet />
        </div>
    )
}


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const AppRouter: any = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/program", 
                element: <Program />
            },
            {
                path: "/committee", 
                element: <Committee />
            }
        ],
    }])