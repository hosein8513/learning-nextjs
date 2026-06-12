import { useRouter } from 'next/router';
import React, { use } from 'react';

const UserPage = ({ post }) => {
    const router = useRouter()
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <button className='className=w-13 h-8 rounded-lg bg-gray-300 text-white text-center' onClick={() => router.back()}>Back</button>
                <br />
                <br />
                {post.name}
                <br />
                {post.body}
                
            </div>
        </>
    );
};

export default UserPage;

export async function getStaticPaths() {
    
    return{
        paths:[
            {params:{postId:'1'}},
            {params:{postId:'2'}},
            {params:{postId:'3'}},
        ],
        fallback:"blocking"
    }
}

export async function getStaticProps(context) {
    const { postId } = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await res.json()

    return {
        props: {
            post
        }
    }

}