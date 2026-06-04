import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    const router = useRouter()
    const {product} = router.query
    const handleShowDetails=()=>{
router.push(`${product}/about`)
    }
    return (
        <div>
            product: {product}
            <br/>
            <button onClick={handleShowDetails}>
                product: {product} details</button>          
        </div>
    );
};

export default index;