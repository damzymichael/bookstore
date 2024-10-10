'use client';
import {motion} from 'framer-motion';
import {BookType} from '@/types';
import Image from 'next/image';

type Props = {books: BookType[]};

function Trending({books}: Props) {
  const [book1, book2, book3] = books;
  return (
    <>
      <div className='absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 translate-y-14 sm:-translate-y-1/2 mt-5'>
        <motion.div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
            <div className='relative flex flex-col justify-end bg-cover bg-center min-w-[260px] w-11/12  h-[400px] rounded-xl overflow-hidden p-2'>
              <Image
                width={300}
                height={700}
                alt={book1.title}
                src={book1.thumbnail.small}
                className='absolute top-0 left-0 w-full h-full object-cover'
              />
              <div className='absolute w-full h-full bg-brown-gradient -m-2' />
              <h2 className='text-sm'>{book1.title}</h2>
              <div className='flex items-center gap-1 z-10'>
                <p className='text-[#FFFFFF80] text-xs'>{book1.authors[0]}</p>
                <span className='text-[#FFFFFF66]'>&#x2022;</span>
                <p className='text-[#FFFFFF80] text-xs'>
                  ${book1.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{rotate: 20}}
          transition={{
            type: 'spring',
            duration: 2
          }}
        >
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 origin-top'>
            <div className='relative flex flex-col justify-end bg-cover bg-center w-11/12 min-w-[260px] h-[400px] rounded-xl overflow-hidden p-2'>
              <Image
                width={300}
                height={700}
                alt={book2.title}
                src={book2.thumbnail.small}
                className='absolute top-0 left-0 w-full h-full object-cover'
              />
              <div className='absolute w-full h-full bg-brown-gradient -m-2' />
              <h2 className='text-sm'>{book2.title}</h2>
              <div className='flex items-center gap-1 z-10'>
                <p className='text-[#FFFFFF80] text-xs'>{book2.authors[0]}</p>
                <span className='text-[#FFFFFF66]'>&#x2022;</span>
                <p className='text-[#FFFFFF80] text-xs'>
                  ${book2.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{rotate: -20}}
          transition={{
            type: 'spring',
            duration: 2
          }}
        >
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 origin-top'>
            <div className=' relative flex flex-col justify-end bg-cover bg-center w-11/12 min-w-[260px] h-[400px] rounded-xl overflow-hidden p-2'>
              <Image
                width={300}
                height={700}
                alt={book3.title}
                src={book3.thumbnail.small}
                className='absolute top-0 left-0 w-full h-full object-cover'
              />
              <div className='absolute w-full h-full bg-brown-gradient -m-2' />
              <h2 className='text-sm'>{book3.title}</h2>
              <div className='flex items-center gap-1 z-10'>
                <p className='text-[#FFFFFF80] text-xs'>{book3.authors[0]}</p>
                <span className='text-[#FFFFFF66]'>&#x2022;</span>
                <p className='text-[#FFFFFF80] text-xs'>
                  ${book3.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Trending;
