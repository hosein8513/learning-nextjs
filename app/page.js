import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-4 p-4'>
         <Link className='w-[200px] h-7.5 text-center bg-blue-500 text-white rounded-lg' href={'/posts'}>Show Posts</Link>
      <Link className='w-[200px] h-7.5 text-center bg-blue-500 text-white rounded-lg' href={'/users'}>Show users</Link>
      <Link className='w-[200px] h-7.5 text-center bg-blue-500 text-white rounded-lg' href={'/admin'}>Show admin</Link>
      <Link className='w-[200px] h-7.5 text-center bg-blue-500 text-white rounded-lg' href={'/admin/panel'}>Show admin-panel</Link>
      <Link className='w-[200px] h-7.5 text-center bg-blue-500 text-white rounded-lg' href={'/fposts'}>Show fposts</Link>
    </div>
  );
};

export default page;