'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
    const router = useRouter()
    return (
        <div>
            <button className='w-10 h-6 rounded-lg bg-gray-600 text-white text-center' 
            onClick={()=>{
                console.log("clicked");
                
                router.back()}}>Back</button>

        </div>
    );
};

export default BackButton;