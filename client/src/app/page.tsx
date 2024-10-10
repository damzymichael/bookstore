import {CiMedicalCross} from 'react-icons/ci';
import {IoIosArrowRoundForward} from 'react-icons/io';
import {GrGallery} from 'react-icons/gr';
import {MdHistoryEdu} from 'react-icons/md';
import {FaRegFaceFlushed} from 'react-icons/fa6';
import BookCategory from '@/components/BookCategory';

export default function Home() {
  return (
    <>
      <section className='min-h-[95vh] text-white relative'>
        <div className='h-[90vh] flex items-center justify-center'>
          <h1 className='text-center font-satisfy text-[20vw] -translate-y-52 sm:translate-y-0'>
            Bookstore
          </h1>
        </div>

        <div className='absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 translate-y-14 sm:-translate-y-1/2 mt-5'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
            <div className='bg-wine-cup relative flex flex-col justify-end bg-cover bg-center min-w-[260px] w-11/12  h-[400px] rounded-xl overflow-hidden p-2'>
              <div className='absolute w-full h-full bg-brown-gradient -m-2' />
              <h2 className='text-sm'>Water, Wine & Homecoming</h2>
              <div className='flex items-center gap-1 z-10'>
                <p className='text-[#FFFFFF80] text-xs'>Amaka Ojo</p>
                <span className='text-[#FFFFFF66]'>&#x2022;</span>
                <p className='text-[#FFFFFF80] text-xs'>$39.20</p>
              </div>
            </div>
          </div>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 -rotate-[5deg] sm:-rotate-[10deg] origin-top'>
            <div className='bg-lady-1 relative flex flex-col justify-end bg-cover bg-center w-11/12 min-w-[260px] h-[400px] rounded-xl overflow-hidden p-2'>
              <div className='absolute w-full h-full bg-brown-gradient -m-2' />
              <h2 className='text-sm'>Water, Wine & Homecoming</h2>
              <div className='flex items-center gap-1 z-10'>
                <p className='text-[#FFFFFF80] text-xs'>Amaka Ojo</p>
                <span className='text-[#FFFFFF66]'>&#x2022;</span>
                <p className='text-[#FFFFFF80] text-xs'>$39.20</p>
              </div>
            </div>
          </div>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rotate-[5deg] sm:rotate-[10deg] origin-top'>
            <div className='bg-lady-2 relative flex flex-col justify-end bg-cover bg-center w-11/12 min-w-[260px] h-[400px] rounded-xl overflow-hidden p-2'>
              <div className='absolute w-full h-full bg-brown-gradient -m-2' />
              <h2 className='text-sm'>Water, Wine & Homecoming</h2>
              <div className='flex items-center gap-1 z-10'>
                <p className='text-[#FFFFFF80] text-xs'>Amaka Ojo</p>
                <span className='text-[#FFFFFF66]'>&#x2022;</span>
                <p className='text-[#FFFFFF80] text-xs'>$39.20</p>
              </div>
            </div>
          </div>
        </div>
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
