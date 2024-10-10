import {useQuery} from '@tanstack/react-query';
import instance from './axios.config';
import {CartItemType} from '@/types';

export function CartQuery(shouldFetch: boolean = true) {
  return useQuery({
    queryKey: ['cart-items'],
    queryFn: async () => {
      const {data} = await instance.get<CartItemType[]>('cart');
      return data;
    },
    enabled: shouldFetch
  });
}
