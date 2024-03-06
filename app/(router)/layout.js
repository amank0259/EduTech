'use client';
import React, { useContext, useEffect } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '../_utils/GlobalApi';
import { UserMemberContext } from '../_context/UserMemberContext';

function layout({ children }) {
    const { user } = useUser();
    const { isMember, setIsMemeber } = useContext(UserMemberContext);

    useEffect(() => {
        user && checkUserMembership();
    }, [user]);

    /**
     * Check the Membership
     */
    const checkUserMembership = () => {
        GlobalApi.checkForMembership(user.primaryEmailAddress.emailAddress).then(resp => {
            if (resp?.membership?.length > 0) {
                console.log("Its Member")
                setIsMemeber(true);
            }
        })
    }
    return (
        <>
            <div className='sm:w-64 sm:block hidden fixed'>
                <SideNav />
            </div>
            <div className='sm:ml-64 ml-0'>
                <Header />
                {children}
            </div>
        </>
    )
};

export default layout;