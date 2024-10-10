import really_good from '@/assets/really-good.jpeg';
import james from '@/assets/james-giant-peach.jpeg';
import coastline from '@/assets/coastline-thing.jpeg';
import taming_shrew from '@/assets/taming-shrew.jpeg';
import {StaticImageData} from 'next/image';

export type BookProp = {
  image: StaticImageData;
  title: string;
  category: string;
  author: string;
  price: number;
};

const AUTHOR = 'John Doe';

const PRICE = 30.5;

const books: BookProp[] = [
  {
    image: really_good,
    title: 'Really  really good, actually',
    category: 'romance',
    author: AUTHOR,
    price: PRICE
  },
  {
    image: james,
    title: 'James and the Giant Peach',
    category: 'children',
    author: AUTHOR,
    price: PRICE
  },
  {
    image: coastline,
    title: 'A Coastline is an Immeasurable Thing',
    category: 'african literature',
    author: AUTHOR,
    price: PRICE
  },
  {
    image: taming_shrew,
    title: 'The Taming of the shrew',
    category: 'thriller',
    author: AUTHOR,
    price: PRICE
  }
];

export default books;
