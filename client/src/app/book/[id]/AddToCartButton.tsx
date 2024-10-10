'use client';
import React from 'react';
import {useState} from 'react';
import CartNotify from '@/components/CartNotify';
import {useMutation} from '@tanstack/react-query';
import instance from '@/utils/axios.config';
import Button from '@/components/ui/Button';
import {useQueryClient} from '@tanstack/react-query';

type Props = {bookId: string; imageUrl: string};

//Move cart notify component to this component
function AddToCartButton({bookId, imageUrl}: Props) {
  const queryClient = useQueryClient();
  const [showNotify, setShowNotify] = useState(false);
  const {mutate, isPending} = useMutation({
    mutationFn: () => instance.post('cart', {bookId}),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['cart-items']});
      setShowNotify(true);
    }
  });
  return (
    <>
      <Button
        loading={isPending}
        className='px-5 py-2 w-max border rounded-lg bg-[#FFFFFF1C]'
        onClick={() => mutate()}
      >
        Add to cart
      </Button>
      <CartNotify
        imageUrl={imageUrl}
        open={showNotify}
        toggle={() => setShowNotify(false)}
      />
    </>
  );
}

export default AddToCartButton;
