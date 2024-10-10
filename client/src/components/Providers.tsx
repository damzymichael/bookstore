'use client';
import React from 'react';
import {toast} from 'sonner';
import {MutationCache} from '@tanstack/react-query';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Providers = ({children}: {children: React.ReactNode}) => {
  const [queryClient] = React.useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false
        }
      },
      mutationCache: new MutationCache({
        onSuccess: (response: any) => {
          toast.success(response.data.message);
        },
        onError: (error: any) => {
          toast.error(error.response.data.message);
        }
      })
    });
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
