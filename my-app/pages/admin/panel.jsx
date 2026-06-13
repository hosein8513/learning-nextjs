import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const handleGetData = async ()=>{
    const res = await fetch("http://localhost:3000/admin");
    const resData = await res.json()
    return resData
}

const Admin = () => {
    const router = useRouter()

    const {data, isLoading, error, isValidating} = useSWR('admin', handleGetData)

    return isLoading ? (
        <h1 className='mt-5 text-center'>Loading...</h1>
    ) : (
        <>
            <button className="p-4" onClick={() => router.back()} >Back</button>
            <ul>
                {Object.keys(data).map(key=>(
                    <li>{`${key} : ${data[key]}`}</li>
                ))}
            </ul>
            {
                isValidating && (<h1 className='mt-5 text-center'>Loading...</h1>)
            }
        </>
    );
}

export default Admin;