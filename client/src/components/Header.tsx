'use client';
import {useState} from 'react';
import {CiSearch} from 'react-icons/ci';
import {IoCartOutline} from 'react-icons/io5';
// import {RiMenu3Fill} from 'react-icons/ri';
import SearchForm from './SearchForm';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {CartQuery} from '@/utils/queries';
import Image from 'next/image';

function Header() {
  const [searchModal, setSearchModal] = useState(false);
  const pathname = usePathname();
  const {data} = CartQuery(pathname === '/cart');
  return (
    <header className='fixed border-b border-[#FFFFFF40] bg-[#0b1014] z-10 w-full flex justify-between items-center gap-5 lg:gap-7 py-3 px-5 sm:px-10 text-white'>
      <Link href='/'>
        <Image
          src='/book.svg'
          width={30}
          height={40}
          alt='logo'
          className='w-6 aspect-auto'
        />
      </Link>
      <div className='flex items-center gap-5'>
        <button onClick={() => setSearchModal(true)}>
          <CiSearch size={23} />
        </button>

        <Link href='/cart' role='button' className='relative'>
          {data && (
            <span className='bg-[#B700E0] w-4 h-4 grid place-items-center rounded-full absolute -top-2 -right-1 text-[9px]'>
              {data.length}
            </span>
          )}
          <IoCartOutline size={23} onClick={() => {}} />
        </Link>
        {/* <RiMenu3Fill size={23} /> */}
      </div>
      <SearchForm open={searchModal} toggle={() => setSearchModal(false)} />
    </header>
  );
}

export default Header;
