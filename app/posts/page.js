import Link from 'next/link';
import React from 'react';

const getPostsService = async ()=>{
    const res = await fetch('http://localhost:3000/posts')
    const posts = await res.json()
    return posts

}

const page = async() => {
    const posts = await getPostsService()
    return (
      <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
            <button className='w-10 h-6 rounded-lg bg-gray-300 text-white text-center'>Back</button>
            <ul className='flex flex-col gap-4'>
                {posts.map(p=>(
                    <Link key={p.id} href={`/posts/${p.id}`}> {p.title}</Link>
                ))}
            </ul>
        </div>
    );
};

export default page;