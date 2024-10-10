import {FaCheckCircle} from 'react-icons/fa';
import {IoMdCloseCircleOutline} from 'react-icons/io';
import Modal from './ui/Modal';
import Image from 'next/image';
import {cartQuery} from '@/utils/queries';
import {getTotalPrice} from '@/utils/book';
import Button from './ui/Button';
import {useRouter} from 'next/navigation';

type Props = Omit<React.ComponentProps<typeof Modal>, 'children'> & {
  imageUrl: string;
};

function CartNotify({open, toggle, imageUrl}: Props) {
  const {data, isLoading, isRefetching} = cartQuery();
  const router = useRouter();
  function navigateToCart() {
    toggle();
    router.push('/cart');
  }
  return (
    <Modal open={open} toggle={toggle}>
      <button
        className='text-[#24002C] absolute top-3 right-3'
        onClick={toggle}
      >
        <IoMdCloseCircleOutline size={23} />
      </button>
      <div>
        <div className='flex items-center gap-4 mb-4'>
          <FaCheckCircle fill='#B700E0' />
          <p className='text-[#2F0139] font-bold'>Added to Cart</p>
        </div>
        <Image
          src={imageUrl}
          alt='Book cover'
          width={200}
          height={400}
          className='w-[100px]'
        />
      </div>
      <div className='border-l border-[#B700E038] pl-10'>
        {(isLoading || isRefetching) && (
          <p className='text-black'>Fetching cart data...</p>
        )}
        {data && (
          <h3 className='font-extrabold text-xl text-black mt-3 mb-8'>
            Cart Subtotal: ${getTotalPrice(data).toFixed(2)}
          </h3>
        )}
        <button className='bg-[#B700E0] w-full text-sm py-1 rounded-lg mb-4'>
          Proceed to Checkout
        </button>
        <Button
          onClick={navigateToCart}
          className='border-[#B700E0] bg-inherit border text-[#B700E0] w-full text-sm py-1 px-3 rounded-lg mb-4'
        >
          Go to cart
        </Button>
      </div>
    </Modal>
  );
}

export default CartNotify;
