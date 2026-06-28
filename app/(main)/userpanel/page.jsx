'use client'
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import Cookies from 'universal-cookie';

const Posts = () => {
    const router = useRouter()

    const hanleLogout = ()=>{
        const cookieStore = new Cookies(null,{path:"/"})
        cookieStore.remove("logintoken")
        router.push('/')
    }
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <h1 className='my-5'>صفحه کاربر</h1>
            <CustomButton className='bg-gray-500 w-64' onClick={hanleLogout}>خروج</CustomButton>
        </div>
    );
}

export default Posts;