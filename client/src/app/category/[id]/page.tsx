import React from 'react';
import {CiMedicalCross} from 'react-icons/ci';
import {GrGallery} from 'react-icons/gr';
import {MdHistoryEdu} from 'react-icons/md';
import {FaRegFaceFlushed} from 'react-icons/fa6';
import {IconType} from 'react-icons';
import colors from '@/data/colors';
import {bookstore} from '@/utils/axios.config';
import {BookType} from '@/types';
import Book from '@/components/Book';

interface Props {
  params: {
    id: string;
  };
}

const categories: {[key: string]: {title: string; icon: IconType}} = {
  art: {title: 'Arts and Photography', icon: GrGallery},
  romance: {title: 'Historical Romance', icon: MdHistoryEdu},
  thriller: {title: 'Thriller & Suspense', icon: FaRegFaceFlushed},
  health: {title: 'Health & Wellness', icon: CiMedicalCross}
};

async function Page({params: {id}}: Props) {
  const {icon: Icon, title} = categories[id];
  const {data} = await bookstore.get<BookType[]>(
    `book/category?category=${id}&take=all`
  );
  return (
    <div className='pt-20'>
      <header className='flex gap-3 items-center'>
        <Icon size={25} />
        <h2 className='text-xl font-semibold'>{title}</h2>
      </header>
      <hr className='my-3' />
      <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 my-5'>
        {data.map(book => (
          <Book
            {...book}
            key={book.id}
            color={colors[Math.floor(Math.random() * colors.length)]}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
