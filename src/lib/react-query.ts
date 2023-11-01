// import { AxiosError } from 'axios';
// import { QueryClient, UseQueryOptions, UseMutationOptions, DefaultOptions } from '@tanstack/react-query';
// import { PromiseValue } from 'type-fest';

import { QueryClient } from "@tanstack/react-query";

// const queryConfig: DefaultOptions = {
//   queries: {
//     useErrorBoundary: true,
//     refetchOnWindowFocus: false,
//     retry: false,
//   },
// };

// export const queryClient = new QueryClient({ defaultOptions: queryConfig });
export const queryClient = new QueryClient();

// export type ExtractFnReturnType<FnType extends (...args: any) => any> = PromiseValue<
//   ReturnType<FnType>
// >;

// export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
//   UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
//   'queryKey' | 'queryFn'
// >;

// export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
//   ExtractFnReturnType<MutationFnType>,
//   AxiosError,
//   Parameters<MutationFnType>[0]
// >;