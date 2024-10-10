import {CiMedicalCross} from 'react-icons/ci';
import {IoIosArrowRoundForward} from 'react-icons/io';
import {GrGallery} from 'react-icons/gr';
import {MdHistoryEdu} from 'react-icons/md';
import {FaRegFaceFlushed} from 'react-icons/fa6';
import BookCategory from '@/components/BookCategory';
import {bookstore} from '@/utils/axios.config';
import {BookType} from '@/types';
import Trending from './Trending';

const fetchBook = async (id: string) => {
  const {data} = await bookstore.get<BookType>('/book/' + id);
  return data;
};

export default async function Home() {
  const ids = [
    '6707f03812b3400398f1ee2e',
    '6707f03412b3400398f1ee15',
    '6707f03712b3400398f1ee25'
  ];
  const books = await Promise.all(ids.map(id => fetchBook(id)));
  return (
    <>
      <section className='min-h-[95vh] text-white relative'>
        <div className='h-[90vh] flex items-center justify-center'>
          <h1 className='text-center font-satisfy text-[20vw] -translate-y-52 sm:translate-y-0'>
            Bookstore
          </h1>
        </div>

        <Trending books={books} />
      </section>

      {/* Featured categories  */}
      <section className='my-7'>
        <header className='py-2 border-y flex items-center justify-between px-2'>
          <h2>Featured categories</h2>
          <a href='#' className='flex items-center gap-2'>
            <span>See all</span>
            <div className='bg-white p-1 rounded-full'>
              <IoIosArrowRoundForward color='black' size={14} />
            </div>
          </a>
        </header>
        <div className='grid gap-2 grid-cols-2 sm:grid-cols-4 my-5'>
          <div className='bg-[#895C8245] text-[#B700E0] rounded-lg p-3'>
            <GrGallery size={24} />
            <p className='mt-10'>
              Arts and <br /> Photography
            </p>
          </div>
          <div className='bg-[#90935E40] text-[#D8E704] rounded-lg p-3'>
            <MdHistoryEdu size={24} />
            <p className='mt-10'>
              Historical <br /> Romance
            </p>
          </div>
          <div className='bg-[#5D4A358A] text-[#EF7D00] rounded-lg p-3'>
            <FaRegFaceFlushed size={24} />
            <p className='mt-10'>
              Thriller & <br /> Suspense
            </p>
          </div>
          <div className='bg-[#526C6E59] text-[#24D7E3] rounded-lg p-3'>
            <CiMedicalCross size={24} />
            <p className='mt-10'>
              Health & <br /> Wellness
            </p>
          </div>
        </div>
      </section>

      <BookCategory title='Bestselling books' query='bestselling' />

      <BookCategory title='Featured' query='featured' />

      {/* Newsletter  */}
      <section className='min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4 mb-14'>
        <h4 className='text-[#FFFFFF40]'>Newsletter</h4>
        <p className='text-2xl'>
          Stay Updated with the
          <br /> Latest News!
        </p>
        <form>
          <div className='border border-[#FFFFFF40] pl-2 w-max mx-auto rounded-full'>
            <input
              type='text'
              className='bg-inherit outline-none p-2'
              placeholder='Email address'
            />
            <button className='bg-white text-black py-2 px-3 rounded-full'>
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
