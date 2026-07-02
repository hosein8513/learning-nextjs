'use client'
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <h1 className='my-5'>صفحه اصلی</h1>
            <CustomButton className='bg-green-400 w-64' onClick={()=>router.push("/login")}>صفحه ورود</CustomButton>
             <CustomButton className='bg-pink-400 w-64 mt-10' onClick={()=>router.push("/about")}>درباره ما</CustomButton>
        </div>
    );
}

export default HomePage;