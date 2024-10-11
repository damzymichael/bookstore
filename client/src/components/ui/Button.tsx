'use client';
import {cn} from '@/utils/tailwind';
import Spinner from './Spinner';
import {CartItemType, User} from '@/types';
import {usePaystackPayment} from 'react-paystack';
import {getTotalPrice} from '@/utils/book';
import {toast} from 'sonner';
import {useRouter} from 'next/navigation';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
function Button({loading, children, className, ...props}: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-[#B700E0] w-full text-sm py-2 px-3 rounded-lg',
        className
      )}
      {...props}
    >
      <div className='flex items-center justify-center gap-2'>
        {loading ? <Spinner /> : children}
      </div>
    </button>
  );
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  user: User;
  cart: CartItemType[];
};

export function PayButton({children, className, user, cart}: Props) {
  const router = useRouter();
  const initializePayment = usePaystackPayment({
    email: user.email,
    phone: user.phoneNumber,
    amount: getTotalPrice(cart) * 1600 * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
    metadata: {cartId: cart[0].cartId, custom_fields: []}
  });
  return (
    <button
      className={cn(
        'bg-[#B700E0] w-full text-sm py-2 px-3 rounded-lg',
        className
      )}
      onClick={() =>
        initializePayment({
          onSuccess: () => {
            toast.success('Payment successful');
            router.push('/');
          }
        })
      }
    >
      {children}
    </button>
  );
}

export default Button;
