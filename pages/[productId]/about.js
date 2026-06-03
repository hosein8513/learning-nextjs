import { useRouter } from 'next/router';
import React from 'react';

const about = () => {
 const router = useRouter()
    const {productId} = router.query
    return (
        <div>
            about: {productId}
        </div>
    );
};

export default about;