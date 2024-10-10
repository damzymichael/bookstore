import Image from 'next/image';
import {IoMdArrowDropdown} from 'react-icons/io';
import {RiDeleteBinLine} from 'react-icons/ri';
import {useMutation} from '@tanstack/react-query';
import instance from '@/utils/axios.config';
import {CartItemType} from '@/types';
import {useQueryClient} from '@tanstack/react-query';
import {useState, useEffect} from 'react';
import Spinner from '@/components/ui/Spinner';

type Quantity = {quantity: number};

function CartItem({book, quantity, id}: CartItemType) {
  const quantities = [1, 2, 3, 4, 5];
  const queryClient = useQueryClient();
  const [dropdown, setDropdown] = useState(false);
  //Delete Mutation
  const {mutate: deleteItem, isPending: isDeleting} = useMutation({
    mutationFn: () => instance.delete('cart/' + id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['cart-items']});
    }
  });
  //Edit quantity mutation
  const {mutate, isPending} = useMutation({
    mutationFn: (body: Quantity) => instance.patch('cart/' + id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['cart-items']});
    }
  });

  function closeDropdown() {
    setDropdown(false);
    document.removeEventListener('click', closeDropdown);
  }

  useEffect(() => {
    if (dropdown) {
      document.addEventListener('click', closeDropdown);
    }
  }, [dropdown]);
  return (
    <div className='flex gap-5 mb-5'>
      {(isDeleting || isPending) && (
        <div className='fixed w-full h-screen top-0 left-0 z-30 bg-[#7E7C7C5C] flex items-center justify-center'>
          <Spinner className='w-10 h-10' />
        </div>
      )}
      <Image
        src={book.thumbnail.small}
        width={100}
        height={250}
        alt='Book Image'
        className='w-1/4'
      />
      <div className='flex-grow flex flex-col'>
        <div className='flex justify-between items-start mb-2'>
          <p className='text-[#BF00EA] text-lg sm:text-xl font-semibold'>
            {book.title}
          </p>
          <p>${(book.price * quantity).toFixed(2)}</p>
        </div>
        <p className='text-[#FFFFFFB5] text-sm mb-1'>By {book.authors[0]}</p>
        <p className='text-[#0068E0] text-xs mb-2'>In Stock</p>
        <div className='flex gap-3 items-center mt-auto'>
          <div className='relative'>
            <div
              className='border border-white bg-[#FFFFFF33] rounded-3xl text-sm flex items-center gap-2 py-1 px-3'
              role='button'
              onClick={() => setDropdown(!dropdown)}
            >
              <span>Qty</span>
              <span>{quantity}</span>
              <IoMdArrowDropdown />
            </div>
            {dropdown && (
              <div className='absolute z-20 bg-[#F7EBF9] p-1 pl-2 text-sm min-w-20 rounded-md text-[#2F0139] top-9 left-0 flex flex-col gap-1'>
                {quantities.map((number, i, {length}) => (
                  <div
                    key={i}
                    role='button'
                    onClick={() => {
                      if (quantity == number) return;
                      closeDropdown();
                      mutate({quantity: number});
                    }}
                  >
                    <button
                      className='text-left disabled:opacity-40'
                      key={i}
                      disabled={quantity === number}
                    >
                      {number}
                    </button>
                    {i != length - 1 && (
                      <hr className='border-[0.5px] border-gray-300' />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => deleteItem()}>
            <RiDeleteBinLine size={20} />
          </button>
          <button className='text-[#0068E0] text-sm hover:underline'>
            Move to favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
