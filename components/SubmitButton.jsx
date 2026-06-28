'use client'
import React from 'react';
import { useFormStatus } from 'react-dom';
import { ImSpinner } from 'react-icons/im';

const SubmitButton = () => {
    const {pending} = useFormStatus()
    return (
      <button className='rounded-full w-full bg-blue-600 h-12 text-white flex justify-center items-center disabled:opacity-50' disabled={pending}>{pending?(<ImSpinner className='animate-spin'/>):(<span>ورود</span>)}</button>
    );
};

export default SubmitButton;