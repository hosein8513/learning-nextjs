'use client'
import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { MainContext } from '@/context/MainContext';

const Body = ({ children }) => {
    const { darkMode } = useContext(MainContext);
    return (
        <div dir="rtl" className={darkMode === "dark" ? "dark" : ""}>
            <div className='dark:border-blue-400' style={{marginRight: '250px', marginTop: '64px', padding: '20px'}}>
                {children}
            </div>
            <Sidebar />
            <Navbar />
        </div>
    );
};

export default Body;