import { MutationFunction, QueryFunction, QueryKey, UseMutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export type ReactQueryAuthConfig<User, LoginCredentials> = {
    userFn: QueryFunction<User, QueryKey>;
    loginFn: MutationFunction<User, LoginCredentials>;
    
    userKey?: QueryKey;
}

export type AuthProviderProps = {
    children: React.ReactNode;
}

export function configureAuth<
    User,
    Error,
    LoginCredentials,
    RegisterCredentials
>(config: ReactQueryAuthConfig<User, LoginCredentials>) {

    const {
        userFn,
        userKey = ['authenticated-user'],
        loginFn,
    } = config;

    const useUser = (
        options?: Omit<
            UseQueryOptions<User, Error, User, QueryKey>,
            'queryKey' | 'queryFn'
        >
    ) => useQuery({ queryKey: userKey, queryFn: userFn, ...options });


    const useLogin = (
        options?: Omit<
            UseMutationOptions<User, Error, LoginCredentials>,
            'mutationFn'
        >
    ) => {
        const queryClient = useQueryClient();

        const setUser = useCallback(
            (data: User) => queryClient.setQueryData(userKey, data),
            [queryClient]
        );

        return useMutation({
            mutationFn: loginFn,
            ...options,
            onSuccess: (user, ...rest) => {
                setUser(user);
                options?.onSuccess?.(user, ...rest);
            },
        });
    };

    return {
        useUser,
        useLogin,
        
    };
}