'use client';
import React from 'react';
import {FaStar} from 'react-icons/fa';
import really_good from '@/assets/really-good.jpeg';
import Image from 'next/image';
import CartItem from './CartItem';
import {CartQuery} from '@/utils/queries';
import {UserQuery} from '@/utils/queries';
import {getTotalPrice} from '@/utils/book';
import PayButton from '@/components/ui/PayButton';

function Cart() {
  const {data, isLoading} = CartQuery();
  const {data: user} = UserQuery();
  return (
    <section className='pt-20'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-0 items-start font-medium mb-10'>
        <div className='w-full md:w-9/12 border-0 md:border-r border-[#FFFFFFA6] p-0 md:pr-6'>
          <header className='flex items-center justify-between mb-8'>
            <h2 className='text-xl font-semibold'>Shopping Cart</h2>
            <p>Price</p>
          </header>
          {/* CartItems  */}
          <div className='space-y-3 mb-2'>
            {isLoading && (
              <>
                <div className='animate-pulse bg-gray-400 rounded-xl w-full h-40 mb-1' />
                <div className='animate-pulse bg-gray-400 rounded-xl w-full h-40 mb-1' />
              </>
            )}
            {data && data.length < 1 && (
              <p className='text-center py-10'>No items in cart</p>
            )}
            {data &&
              data.map(cartItem => (
                <CartItem {...cartItem} key={cartItem.id} />
              ))}
          </div>
          <hr className='border border-[#FFFFFF21] mb-3' />
          <div className='mb-4 flex gap-4 items-center justify-end'>
            <p>Subtotal</p>
            <p>${data ? getTotalPrice(data).toFixed(2) : '0.00'}</p>
          </div>
          {data && data.length > 0 && user && (
            <PayButton user={user} cart={data}>
              Proceed to Checkout
            </PayButton>
          )}
        </div>

        {/* Recently viewed  */}
        <div className='bg-[#FFFFFF4F] flex-grow p-3 m-0 md:m-5 mt-0 rounded-xl'>
          <h3 className='font-medium text-lg mb-3'>Recently viewed by you</h3>
          <div className='flex gap-3'>
            <Image src={really_good} alt='Book Image' className='w-1/3' />
            <div className='flex-grow flex flex-col text-[#0068E0]'>
              <p className='text-xs uppercase mb-2'>African Literature</p>
              <p className='font-semibold mb-2'>
                A Coastline is an Immeasurable Thing.
              </p>
              <p className='text-[#FFFFFFB5] mb-1 text-xs'>By John Doe</p>
              <div className='flex mb-3'>
                {Array.from({length: 5}).map((_, index) => (
                  <FaStar size={18} fill='#0068E0' key={index} />
                ))}
              </div>
              <p className='text-white mb-4 text-sm'>$0.00</p>
              <button className='bg-[#B700E0] text-white text-sm max-w-32 py-2 rounded-lg mt-auto'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
