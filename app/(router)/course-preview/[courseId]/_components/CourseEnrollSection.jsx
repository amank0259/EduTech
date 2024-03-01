import { Button } from '@/components/ui/button'
import React from 'react'

function CourseEnrollSection() {

    const membership = false;
    return (
        <div className='p-3 text-center rounded-sm bg-primary'>

            <h2 className='text-[22px] font-bold text-white'>Enroll the Course</h2>

            {/* User has Membership and Already Login */}
            {membership ?
                <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the Project</h2>
                    <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Enroll Now</Button>
                </div>

                : <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-white font-light'>Buy Membership and get Access to all Courses</h2>
                    <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Buy Membership at just ₹499</Button>
                </div>}
            {/*Above section is for User Does not have Membership or not Signup/Login */}
        </div >
    )
}

export default CourseEnrollSection