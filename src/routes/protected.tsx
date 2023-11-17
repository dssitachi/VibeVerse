import Navbar from "@/components/Navbar";
import Suggestions from "@/components/Suggestions";
import { useUser } from "@/lib/auth";
import { Loader2 } from "lucide-react";
import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

const FeedRoutes = lazy(() =>
    import("@/features/feed").then((module) => ({ default: module.Feed }))
);

const App = () => {
    const { status, data } = useUser({retry: 1});
    
    if (status == "pending") {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Loader2  />
            </div>
        );
    }

    return data ? (
        <main className="min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex">
            <Navbar />

            <Suspense
                fallback={
                    <div className="h-full w-full flex items-center justify-center">
                        <Loader2  />
                    </div>
                }
            >
                <Outlet />
            </Suspense>

            <Suggestions />
        </main>
    ) : (
        <Navigate to="/auth/login"  />
    );
};

export const protectedRoutes = [
    {
        path: "/",
        element: <App />,
        children: [{ path: "", element: <FeedRoutes /> }],
    },
];
