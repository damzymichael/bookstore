import React from 'react';
import {FaXTwitter} from 'react-icons/fa6';
import {AiFillInstagram} from 'react-icons/ai';
import {FaLinkedinIn, FaFacebook} from 'react-icons/fa';

function Footer() {
  const categories = [
    'Home',
    'Health',
    'Contact Us',
    'About',
    'Lifestyle',
    'Subscribe',
    'Category',
    'Business'
  ];
  return (
    <footer className='min-h-[30vh] flex justify-between bg-footer-gradient px-5 sm:px-10 py-10'>
      <div>
        <h5 className='text-lg mb-3'>LOGO</h5>
        <div className='flex items-center gap-3 mb-5'>
          <FaXTwitter />
          <AiFillInstagram />
          <FaLinkedinIn />
          <FaFacebook />
        </div>
        <a href='#' className='block font-thin text-sm my-2'>
          Privacy policy
        </a>
        <a href='#' className='block font-thin text-sm'>
          Terms and conditions
        </a>
      </div>
      <div className='grid justify-end text-center grid-cols-3 w-3/4'>
        {categories.map((category, i) => (
          <a href='#' className='block font-light text-sm' key={i}>
            {category}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
