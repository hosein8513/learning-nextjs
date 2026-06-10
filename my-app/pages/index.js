import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Link className='w-12.5 h-7.5 text-center bg-blue-500 text-white' href={'/users'}>Show Users</Link>
    </div>
  );
};

export default index;