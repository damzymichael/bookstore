'use client';
import React from 'react';
import {IoIosArrowRoundForward} from 'react-icons/io';
import colors from '@/data/colors';
import Book from './Book';
import {bookstore} from '@/utils/axios.config';
import {useQuery} from '@tanstack/react-query';
import {BookType} from '@/types';
import {AnimatePresence, motion} from 'framer-motion';

type Props = {
  title: string;
  query?: 'bestselling' | 'featured';
  category?: 'art' | 'romance' | 'thriller' | 'health';
};

function BookCategory({title, query, category}: Props) {
  const url = `book/category?group=${query}&category=${category}`;
  const {isLoading, data} = useQuery({
    queryKey: [`books-${query ?? category}`],
    queryFn: async () => {
      const {data} = await bookstore.get<BookType[]>(url);
      return data;
    }
  });
  return (
    <section className='my-7'>
      <header className='py-2 border-y flex items-center justify-between px-2'>
        <h2>{title}</h2>
        <a href='#' className='flex items-center gap-2'>
          <span>See all</span>
          <div className='bg-white p-1 rounded-full'>
            <IoIosArrowRoundForward color='black' size={14} />
          </div>
        </a>
      </header>
      <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 my-5'>
        {isLoading &&
          Array.from({length: 6}).map((_, i) => (
            <div
              className='bg-gray-200 w-full h-[250px] animate-pulse'
              key={i}
            />
          ))}
        <AnimatePresence>
          {data &&
            data.map((book, _, {length}) => {
              const randomIndex = Math.floor(Math.random() * length);
              return (
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {duration: 1.3, type: 'spring'}
                  }}
                  key={Math.floor(Math.random() * 1000)}
                >
                  <Book {...book} color={colors[randomIndex]} />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default BookCategory;
