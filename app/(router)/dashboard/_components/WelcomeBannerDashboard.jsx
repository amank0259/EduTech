import Image from 'next/image';
import React from 'react';

function WelcomeBannerDashboard({ user }) {
    return (
        <div className='flex gap-5 items-center bg-orange-100 rounded-sm p-5'>
            <Image src='/courses.png'
                width={100}
                height={100}
            />
            <div>
                <h2 className='font-light text-[32px]'>Welcome Back, <span className='font-bold text-primary'>{user?.fullName}</span></h2>
                <h2 className='text-[16px] font-light text-slate-500'>Lets Begin Keep it up and improve your progress</h2>
            </div>
        </div>
    )
}

export default WelcomeBannerDashboard