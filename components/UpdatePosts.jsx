'use client'
import { handleUpdateTag } from '@/action/posts';
import React from 'react';

const UpdatePosts = ({tag}) => {
    return (
       <button className='bg-blue-500 text-white rounded-lg text-center' onClick={()=>handleUpdateTag(tag)}>
        Update:({tag})
       </button>
    );
};

export default UpdatePosts;