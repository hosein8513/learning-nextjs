import BackButton from '@/components/BackButton';
import React from 'react';

export async function generateStaticParams() {
    return [
        {postId: "1"},
        {postId: "2"},
        {postId: "3"}
    ]
}

const getPostsService = async (postId) => {
    const res = await fetch(`http://localhost:3000/posts/${postId}`,{next:{revalidate:15}})
    const post = await res.json()
    return post
}

const page = async({params}) => {
    const {postId} = await params
    const post = await getPostsService(postId)
    
    return (
        <>
             <div className='flex flex-col justify-center items-center'>
              <BackButton/>
                <br />
                <br />
                {post.title}
                <br />
                {post.body}
                
            </div>
        </>
    );
};

export default page;