'use client';
import React from 'react';
import {FormEvent} from 'react';

function Subscribe() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <section className='min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4 mb-14'>
      <h4 className='text-[#FFFFFF40]'>Newsletter</h4>
      <p className='text-2xl'>
        Stay Updated with the
        <br /> Latest News!
      </p>
      <form onSubmit={handleSubmit}>
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
  );
}

export default Subscribe;
