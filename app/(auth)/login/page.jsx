'use client'
import { loginAction } from '@/actions/authAction';
import ToggleBtn from '@/components/ToggleButton';
import React, { useActionState } from 'react';
import SubmitButton from '@/components/SubmitButton';
import AuthLogin from '@/components/AuthLogin';

const Login = () => {
    const [state,formAction] = useActionState(loginAction,{error:"",success:false})
    return (
        <div className='flex justify-center items-center h-full w-full px-2  lg:px-10'>
            <form action={formAction} className='w-full text-gray-600 bg-linear-to-b from-gray-300 to-gray-100 p-3 rounded-lg border-2 shadow'>

                <h1 className='text-center my-5'>فرم ورود</h1>
                {state.error&&(
                    <p className='text-red-500 text-center'>{state.error}</p>
                )}
                <div>
                    <label>شماره موبایل:</label>
                    <input name="phone" type='number' className='px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300' />
                    <small className='text-red-500 text-center'>{state.errors?.phone?.at(0)||''}</small>
                </div>
                <div className='mt-5'>
                    <label>رمز عبور:</label>
                    <input name="password" type='password' className='px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300' />
                      <small className='text-red-500 text-center'>{state.errors?.password.at(0)||''}</small>
                </div>
                <div className='mt-5'>
                    <ToggleBtn value={1} name="remember" title="مرا بخاطر بسپار" />
                </div>

                <div className='my-6 px-4'>
                   <SubmitButton/>
                </div>
                <div className='my-6 px-4 flex justify-center items-center'>
                    <AuthLogin />
                </div>
            </form>
        </div>
    );
};

export default Login;