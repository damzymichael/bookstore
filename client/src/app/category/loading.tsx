import React from 'react';

function Loading() {
  return (
    <div className='pt-20'>
      <div className='flex items-end gap-2'>
        <div className='w-7 h-7 bg-gray-200 rounded-full animate-pulse' />
        <div className='w-full max-w-52 bg-gray-200 h-7 animate-pulse rounded-xl' />
      </div>
      <hr className='my-5' />
      <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 my-5'>
        {Array.from({length: 10}).map((_, i) => (
          <div className='bg-gray-200 w-full h-[250px] animate-pulse' key={i} />
        ))}
      </div>
    </div>
  );
}

export default Loading;
