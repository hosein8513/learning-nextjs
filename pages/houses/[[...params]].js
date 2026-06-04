import { useRouter } from 'next/router';
import React from 'react';

const Params = () => {
    const router = useRouter()
    const {params=[]} = router.query
    console.log(params.length);
    
    return (
        <div>
           segments is : {params.length} 
        </div>
    );
};

export default Params;