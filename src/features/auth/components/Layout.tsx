import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { NavLink } from "react-router-dom";

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <section className="min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex">
            <div className="hidden md:flex flex-grow">
                <svg></svg>
            </div>

            <div className="flex flex-grow ">
                <div className="w-full flex flex-col justify-center  items-center lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        {children}
                    </div>
                </div>
            </div>
           
        </section>
    );
}

export default Layout;
