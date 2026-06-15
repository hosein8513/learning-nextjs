import BackButton from '@/components/BackButton';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import React from 'react';

const getUsersService = async ()=>{
    const res = await fetch('http://localhost:3000/users??_sort=id&_order=desc')
    const users = await res.json()
    return users
}

const page = async() => {
    const users = await getUsersService()

    const createUserAction = async (formdata)=>{
        'use server'
        const name = formdata.get('name')
        const email = formdata.get('email')
        const res = await fetch('http://localhost:3000/users',{
            method:"POST",
              headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        })

        revalidatePath('/users')
    }
    return (
        <div className='flex flex-col justify-center items-center gap-4 p-4'>
<BackButton/>
  <form className=' w-50' action={createUserAction}>
                <h3>Create User</h3>
                <input className=' mt-2 ' type="text" name="name" placeholder='Name' />
                <input className=' mt-2' type="email" name="email" placeholder='Email' />
                <button className='w-[150px] h-[70px] rounded-lg text-center bg-blue-600 text-white' type="submit">Confirm</button>
            </form>

            <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
            <ul className='flex flex-col gap-4'>
                {users.map(u=>(
                    <Link key={u.id} href={`/users/${u.id}`}> {u.name}</Link>
                ))}
            </ul>
        </div> 
        </div>
    );
};

export default page;