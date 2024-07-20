import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "@/AppRouter";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={AppRouter} />
);
