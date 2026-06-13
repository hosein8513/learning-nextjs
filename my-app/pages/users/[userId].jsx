import { useRouter } from 'next/router';
import React, { use } from 'react';

const UserPage = ({ user }) => {
    const router = useRouter()
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <button className='className=w-13 h-8 rounded-lg bg-gray-300 text-white text-center' onClick={() => router.back()}>Back</button>
                <br />
                <br />
                {user.name}
                <br />
                {user.phone}
                <br />
                {user.email}
                
                
            </div>
        </>
    );
};

export default UserPage;


export async function getServerSideProps(context) {
    const { userId } = context.params
    const res = await fetch(`http://localhost:3000/users/${userId}`)
    const user = await res.json()

    return {
        props: {
            user
        },
    }

}