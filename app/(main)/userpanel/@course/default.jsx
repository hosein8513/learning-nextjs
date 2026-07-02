import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
          اسلات دوره ها 
          <Link href={'/userpanel/finished'} className='text-center text-blue-400'>دوره های پایان یافته</Link> 
        </div>
    );
};

export default page;