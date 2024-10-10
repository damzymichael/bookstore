'use client';
import React from 'react';
import {toast} from 'sonner';
import {MutationCache} from '@tanstack/react-query';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';

const Providers = ({children}: {children: React.ReactNode}) => {
  const [queryClient] = React.useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false
        }
      },
      mutationCache: new MutationCache({
        onSuccess: response => {
          const res = response as AxiosResponse<{message: string}>;
          toast.success(res.data.message);
        },
        onError: error => {
          const err = error as AxiosError<{message: string}>;
          toast.error(err.response?.data.message);
        }
      })
    });
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
