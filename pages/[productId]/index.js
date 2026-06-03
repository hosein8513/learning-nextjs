import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    const router = useRouter()
    const {productId} = router.query
    return (
        <div>
            product: {productId}
        </div>
    );
};

export default index;