import {useQuery} from '@tanstack/react-query';
import instance from './axios.config';
import {CartItemType, User} from '@/types';

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

export function UserQuery() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const {data} = await instance.get<User>('user');
      return data;
    }
  });
}
