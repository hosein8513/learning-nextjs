import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const about = () => {
 const router = useRouter()
    const {product} = router.query
    return (
        <div>
            about: {product}
        </div>
    );
};

export default about;