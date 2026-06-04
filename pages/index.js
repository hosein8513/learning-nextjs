import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div>
           <Link href={"/product"}>products</Link>
           <br/>
           <Link href={"/houses"}>houses</Link>
        </div>
    );
};

export default index;