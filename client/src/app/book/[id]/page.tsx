import React from 'react';
import Image from 'next/image';
import {FaStar, FaRegStar} from 'react-icons/fa';
import AddToCartButton from './AddToCartButton';
import {bookstore} from '@/utils/axios.config';
import {BookType} from '@/types';
import BookCategory from '@/components/BookCategory';

interface Props {
  params: {
    id: string;
  };
}

async function Page({params: {id}}: Props) {
  const {data: book} = await bookstore.get<BookType>('book/' + id);
  return (
    <section className='pt-20'>
      <Image
        src={book.thumbnail.large}
        alt='Book cover'
        width={500}
        height={500}
        className='w-full h-[500px] rounded-lg object-cover mb-8'
      />

      {/* <img src={imageUrl} alt='' /> */}
      <article className='flex sm:flex-nowrap flex-wrap gap-5 sm:gap-12 md:gap-20 lg:gap-32 my-5'>
        <div className='text-sm'>
          <div className='mb-2'>
            <p>Author</p>
            <p className='text-[#FFFFFFB2]'>{book.authors[0]}</p>
          </div>

          <div className='mb-2'>
            <p>Category</p>
            <p className='text-[#FFFFFFB2]'>{book.category.toUpperCase()}</p>
          </div>

          <div className='mb-2'>
            <p>Date Released</p>
            <p className='text-[#FFFFFFB2]'>{book.publishedDate}</p>
          </div>

          <div className='mb-2'>
            <p>Ratings</p>
            <div className='flex'>
              {Array.from({length: book.rating}).map(_ => (
                <FaStar size={20} fill='#B700E0' key={Math.random() * 200} />
              ))}
              {Array.from({length: 5 - book.rating}).map(_ => (
                <FaRegStar fill='#B700E0' size={20} key={Math.random() * 200} />
              ))}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <h2 className='font-semibold text-lg mb-2'>{book.title}</h2>
          <p className='text-sm text-[#FFFFFFB2] w-full sm:w-11/12 md:w-9/12 lg:w-3/5 mb-2'>
            {book.description}
          </p>
          <p className='text-[#B700E0] font-medium mb-3'>
            ${book.price.toFixed(2)}
          </p>
          <AddToCartButton imageUrl={book.thumbnail.small} bookId={book.id} />
        </div>
      </article>

      {/* Fetch other books in the same category as this book  */}
      <BookCategory
        title='You may also like'
        category={
          book.category as 'art' | 'romance' | 'thriller' | 'health' | undefined
        }
      />
    </section>
  );
}

export default Page;
