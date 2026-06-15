'use client'
import { handleUpdatePath } from '@/action/users';
import React from 'react';

const UpdateData = ({path}) => {
    return (
       <button  className='bg-blue-500 text-white rounded-lg text-center' onClick={()=>handleUpdatePath(path)}>
        Update:({path})
       </button>
    );
};

export default UpdateData;