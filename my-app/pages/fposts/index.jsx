import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const index = (props) => {
    const [filterPosts,setFilterPosts] = useState(props.posts)
    const router = useRouter()

    const handleFilterPosts = async (userId)=>{
        const res = await fetch(`http://localhost:3000/posts?userId=${userId}`)
        const posts = await res.json()
        setFilterPosts(posts)
        router.push(`/fposts?userId=${userId}`,null,{shallow:true})
    }
        return (
       <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
            <button className='w-10 h-6 rounded-lg bg-gray-600 text-white text-center' onClick={()=>router.back()}>Back</button>
            <button className='w-10 h-6 rounded-lg bg-gray-600 text-white text-center'onClick={()=>handleFilterPosts(1)}>Filter</button>
            <ul className='flex flex-col gap-4'>
                {filterPosts.map(p=>(
                    <Link key={p.id} href={`/posts/${p.id}`}> {p.title}</Link>
                ))}
            </ul>
        </div>
    );
};

export default index;

export async function   getServerSideProps(context) {
    const {query} = context
    const {userId} = query
    const q = userId?`?userId=${userId}`:''
    const res = await fetch(`http://localhost:3000/posts${q}`)
      const posts = await res.json()
      return{
        props:{
            posts
        },
      }
}