import BackButton from '@/components/BackButton';
import UpdateData from '@/components/UpdateData';
import React from 'react';

export async function generateStaticParams() {
    return [
        {userId: "1"},
        {userId: "2"},
        {userId: "3"}
    ]
}

const getUserService = async (userId) => {
    const res = await fetch(`http://localhost:3000/users/${userId}`)
    const user = await res.json()
    return user
}

const page = async({params}) => {
    const {userId} = await params
    const user = await getUserService(userId)
    return (
        <div className='flex flex-col justify-center items-center gap-4 p-4'>
            <BackButton/>
            <UpdateData path={`/users/${userId}`}/>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <span>{user.id}</span>
                <span>{user.name}</span>
                <span>{user.email}</span>
            </div>
            
        </div>
    );
};

export default page;