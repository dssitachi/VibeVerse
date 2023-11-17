import { useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

export const AppRoutes = () => {
    
    const commonRoutes = [{ path: "/auth", element: <Landing /> }];
    // const routes = auth.user ? protectedRoutes : publicRoutes;
    const element = useRoutes([...protectedRoutes, ...publicRoutes, ...commonRoutes]);
    return <>{element}</>;
};
