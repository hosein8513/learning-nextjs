import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div>
            <Link
            href={{
                pathname:'/product/1'
            }} >product1</Link>
            <br/>
            <Link
             href={{
                pathname:'/product/2'
            }}>product2</Link>
            <br/>
            <Link
             href={{
                pathname:'/product/3'
            }}>product3</Link>
            <br/>
            <Link
             href={{
                pathname:'/product/4'
            }}>product4</Link>
        </div>
    );
};

export default index;