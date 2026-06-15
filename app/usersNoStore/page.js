import BackButton from '@/components/BackButton';
import Link from 'next/link';
import React from 'react';

const getUsersService = async () => {
    const res = await fetch('http://localhost:3000/users?_sort=id&_order=desc',{cache:'no-store'})
    const users = await res.json()
    console.log(res.json);
    
    return users
}
// export const fetchCache  = 'force-no-store'

const page = async() => {
    const users = await getUsersService()
    return (
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
           <BackButton/>
            <ul className='flex flex-col gap-4'>
                {users.map(u=>(
                    <Link key={u.id} href={`/users/${u.id}`}> {u.name}</Link>
                ))}
            </ul>
        </div>
    );
};

export default page;