import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const index = () => {
    const router = useRouter()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const handleGetData = async () => {
        setLoading(true)
        const res = await fetch('http://localhost:3000/admin')
        const resData = await res.json()
        setData(resData)
        setLoading(false)
    }

    useEffect(() => {
        handleGetData()
    }, [])
    return loading ? (
        <h1 className='text-center p-4'>Loading...</h1>
    ) : (
        <>
            <button className='p-4 rounded-lg bg-gray-600' onClick={() => router.back()}>back</button>
            <ul>
                {Object.keys(data).map(key => (
                    <li>{`${key} : ${data[key]}`}</li>
                ))}
            </ul>

        </>
    );
};

export default index;