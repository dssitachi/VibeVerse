import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

type AppProviderProps = {
    children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Router>{children}</Router>
                <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
        </>
    );
}
