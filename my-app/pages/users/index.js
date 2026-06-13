import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const index = ({users}) => {
    const router = useRouter()
      console.log(users)
    return (
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
            <button className='w-10 h-6 rounded-lg bg-gray-300 text-white text-center' onClick={()=>router.back()}>Back</button>
            <ul className='flex flex-col gap-4'>
                {users.map(u=>(
                    <Link key={u.id} href={`/users/${u.id}`}> {u.name}</Link>
                ))}
            </ul>
        </div>
    );
};

export default index;

export async function  getServerSideProps() {
    const res = await fetch('http://localhost:3000/users')
      const users = await res.json()
      return{
        props:{
            users
        },
      }
}