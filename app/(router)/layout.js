import React from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout({ children }) {
    return (
        <>
            <div className='sm:w-64 sm:block hidden fixed'>
                <SideNav />
            </div>
            <div className='ml-64'>
                <Header />
                {children}
            </div>
        </>
    )
};

export default layout;