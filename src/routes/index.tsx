import { Outlet, useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import Navbar from "@/components/Navbar";
import Suggestions from "@/components/Suggestions";
import { Feed } from "@/features/feed";

export const AppRoutes = () => {
    const commonRoutes = [{ path: "/auth", element: <Landing /> }];
    const element = useRoutes([...commonRoutes, ...protectedRoutes]);

    return <>{element}</>;
};

const App = () => {
    return (
        <main className="min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex">
            <Navbar />
            <Outlet />
            <Suggestions />
        </main>
    );
};

export const protectedRoutes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Feed /> },
            
        ],
    },
];
