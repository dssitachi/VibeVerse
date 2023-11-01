import Navbar from "@/components/Navbar";
import Suggestions from "@/components/Suggestions";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <main className="min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex">
            <Navbar />
            <Outlet />
            <Suggestions />
        </main>
    );
}
