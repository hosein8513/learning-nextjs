import BackButton from '@/components/BackButton';
import Link from 'next/link';
import React from 'react';

const getPostsService = async ()=>{
    const res = await fetch('http://localhost:3000/posts',{next:{revalidate:10}})
    const posts = await res.json()
    return posts

}

const page = async() => {
    const posts = await getPostsService()
    return (
      <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
        <BackButton/>
            <ul className='flex flex-col gap-4'>
                {posts.map(p=>(
                    <Link key={p.id} href={`/posts/${p.id}`}> {p.title}</Link>
                ))}
            </ul>
        </div>
    );
};

export default page;