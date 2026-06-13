import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Link className='w-[40px] h-7.5 text-center bg-blue-500 text-white' href={'/posts'}>Show Posts</Link>
      <Link className='w-[40px] h-7.5 text-center bg-blue-500 text-white' href={'/users'}>Show users</Link>
    </div>
  );
};

export default index;