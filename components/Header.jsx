'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
    const pathName = usePathname()
    return (
        <>
            <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                   
                    <a href="index.html" className="logo">
                        <img src="assets/images/logo.png" alt=""/>
                    </a>
                   
                    <ul className="nav">
                        <li><Link style={{color: pathName == '/' && 'purple'}} href="/">Home</Link></li>
                        <li><Link style={{color: pathName == '/about' && 'purple'}} href="/about">About</Link></li>
                        <li><Link style={{color: pathName == '/deals' && 'purple'}} href="/deals">Deals</Link></li>
                        <li><Link style={{color: pathName == '/reservation' && 'purple'}} href="/reservation">Reservation</Link></li>
                        <li><Link style={{color: pathName == '/reservation' && 'purple'}} href="/reservation">Book Yours</Link></li>
                    </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>
 
        </>
    );
};

export default Header;