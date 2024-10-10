import React from 'react';

function loader() {
  return (
    <div className='pt-20'>
      <div className='w-full flex items-center justify-center bg-gray-400 h-96 animate-pulse rounded-xl'>
        <svg
          className='w-10 h-10 text-gray-200 dark:text-gray-600'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 18'
        >
          <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
        </svg>
      </div>

      <div className='flex sm:flex-nowrap flex-wrap gap-5 sm:gap-12 md:gap-20 lg:gap-32 my-5'>
        {/* Author and other details  */}
        <div>
          <div className='mb-2'>
            <div className='animate-pulse bg-gray-400 rounded-xl w-24 h-3 mb-1' />
            <div className='animate-pulse bg-gray-400 rounded-xl w-32 h-3' />
          </div>
          <div className='mb-2'>
            <div className='animate-pulse bg-gray-400 rounded-xl w-24 h-3 mb-1' />
            <div className='animate-pulse bg-gray-400 rounded-xl w-32 h-3' />
          </div>
          <div className='mb-2'>
            <div className='animate-pulse bg-gray-400 rounded-xl w-24 h-3 mb-1' />
            <div className='animate-pulse bg-gray-400 rounded-xl w-32 h-3' />
          </div>
        </div>

        {/* Book title and description  */}
        <div className='w-full'>
          <div className='animate-pulse bg-gray-400 rounded-xl w-32 h-3 mb-4' />
          <div className='animate-pulse bg-gray-400 rounded-xl w-full h-2 mb-2' />
          <div className='animate-pulse bg-gray-400 rounded-xl w-full h-2 mb-2' />
          <div className='animate-pulse bg-gray-400 rounded-xl w-full h-2 mb-2' />
          <div className='animate-pulse bg-gray-400 rounded-xl w-full h-2 mb-2' />
          <div className='animate-pulse bg-gray-400 rounded-xl w-full h-2 mb-2' />
          <div className='animate-pulse bg-gray-400 rounded-xl w-full h-2 mb-2' />
          <div className='animate-pulse bg-gray-400 rounded-xl w-full h-2 mb-2' />
        </div>
      </div>
    </div>
  );
}

export default loader;
