import Image from 'next/image'
import React from 'react'

function CourseItem({ course }) {
    return (
        <div>
            <Image src={course?.banner?.url}
                width={500}
                height={150}
            />
        </div>
    )
}

export default CourseItem