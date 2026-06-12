import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const index = ({posts}) => {
    const router = useRouter()
    return (
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
            <button className='w-10 h-6 rounded-lg bg-gray-300 text-white text-center' onClick={()=>router.back()}>Back</button>
            <ul className='flex flex-col gap-4'>
                {posts.map(p=>(
                    <Link key={p.id} href={`/posts/${p.id}`}> {p.title}</Link>
                ))}
            </ul>
        </div>
    );
};

export default index;

export async function  getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      return{
        props:{
            posts
        }
      }
}