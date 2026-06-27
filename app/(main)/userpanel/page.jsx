'use client'
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';
import React from 'react';

const Posts = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <h1 className='my-5'>صفحه کاربر</h1>
            <CustomButton className='bg-gray-500 w-64' onClick={()=>router.push("/")}>خروج</CustomButton>
        </div>
    );
}

export default Posts;