import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cacheTime: Infinity,
      // staleTime: Infinity,
      staleTime: 4 * 60 * 60 * 1000, // 4 hours
      refetchInterval: 60 * 60 * 1000, // 60 mins
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Removes query keys and reloads the api whenever the key becomes visible again
 * @param queryKeys React query Keys
 */
export const removeQueryKeys = (...queryKeys: string[]) => {
  queryKeys.forEach((queryKey) => {
    queryClient.removeQueries({ queryKey: [queryKey], exact: false });
  });
};
