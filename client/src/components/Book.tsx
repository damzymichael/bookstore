import {BookType} from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type Prop = BookType & {color: string};

function Book(book: Prop) {
  return (
    <Link
      href={'/book/' + book.id}
      className='text-sm'
      key={Math.floor(Math.random() * 1000)}
    >
      <Image
        src={book.thumbnail.small}
        alt='book'
        width={200}
        height={400}
        className='mb-2 w-[200px]'
      />
      <div style={{color: book.color}}>
        <p className='mb-1 text-xs uppercase'>{book.category}</p>
        <h4 className='mb-1 font-medium'>{book.title}</h4>
      </div>
      <p className='text-[#FFFFFFB5]'>{book.authors[0]}</p>
      <p className='text-white'>${book.price.toFixed(2)}</p>
    </Link>
  );
}

export default Book;
