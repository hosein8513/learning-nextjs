import React from 'react';

const Header = () => {
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/deals">Deals</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/reservation">Book Yours</a></li>
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